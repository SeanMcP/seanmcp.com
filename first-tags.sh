#!/usr/bin/env bash
set -euo pipefail

SCRIPT_NAME="$(basename "$0")"
VERIFY=0
TARGET_DIR="content"

# Keep approved categories in-script by design.
APPROVED_CATEGORIES=(
  "Blog"
  "Games"
  "Local"
  "RPGs"
  "Tech"
)

die() {
  echo "Error: $*" >&2
  exit 1
}

usage() {
  echo "Usage: $SCRIPT_NAME [--verify] [content-directory]"
}

parse_args() {
  local seen_directory=0

  while [[ $# -gt 0 ]]; do
    case "$1" in
      --verify)
        VERIFY=1
        shift
        ;;
      -h|--help)
        usage
        exit 0
        ;;
      --*)
        echo "Error: unknown option: $1" >&2
        usage >&2
        exit 1
        ;;
      *)
        if [[ $seen_directory -eq 1 ]]; then
          usage >&2
          die "too many positional arguments"
        fi

        seen_directory=1
        TARGET_DIR="$1"
        shift
        ;;
    esac
  done
}

resolve_target_dir() {
  # Keep the "content" default, but support this repo's src/content structure.
  if [[ ! -d "$TARGET_DIR" && "$TARGET_DIR" == "content" && -d "src/content" ]]; then
    TARGET_DIR="src/content"
  fi

  if [[ ! -d "$TARGET_DIR" ]]; then
    usage >&2
    die "directory not found: $TARGET_DIR"
  fi
}

extract_first_tag() {
  local file="$1"

  awk '
    BEGIN {
      in_frontmatter = 0
      in_tags = 0
    }

    function clean(value) {
      gsub(/^[[:space:]]+|[[:space:]]+$/, "", value)
      gsub(/^"|"$/, "", value)
      gsub(/^\x27|\x27$/, "", value)
      return value
    }

    NR == 1 && $0 == "---" {
      in_frontmatter = 1
      next
    }

    in_frontmatter && $0 == "---" {
      exit
    }

    in_frontmatter {
      if (!in_tags && $0 ~ /^tags:[[:space:]]*$/) {
        in_tags = 1
        next
      }

      if (!in_tags && $0 ~ /^tags:[[:space:]]*\[[^]]+\][[:space:]]*$/) {
        line = $0
        sub(/^tags:[[:space:]]*\[/, "", line)
        sub(/\][[:space:]]*$/, "", line)
        split(line, parts, /,/)
        print clean(parts[1])
        exit
      }

      if (in_tags) {
        if ($0 ~ /^[[:space:]]*-[[:space:]]+/) {
          line = $0
          sub(/^[[:space:]]*-[[:space:]]+/, "", line)
          print clean(line)
          exit
        }

        # Top-level key means we have moved past tags.
        if ($0 ~ /^[^[:space:]]/) {
          exit
        }
      }
    }
  ' "$file"
}

print_summary() {
  local -n ref_counts=$1
  local files_with_tags=$2
  local files_without_tags=$3

  printf 'Directory: %s\n\n' "$TARGET_DIR"
  printf '%-24s %7s\n' "First tag" "Files"
  printf '%-24s %7s\n' "------------------------" "-------"
  for tag in "${!ref_counts[@]}"; do
    printf '%s\t%d\n' "$tag" "${ref_counts[$tag]}"
  done | sort -t $'\t' -k2,2nr -k1,1 | awk -F '\t' '{ printf "%-24s %7d\n", $1, $2 }'

  echo
  echo "Unique first-tag categories: ${#ref_counts[@]}"
  echo "Files with tags: $files_with_tags"
  echo "Files without tags: $files_without_tags"
}

print_verification_failures() {
  local -n ref_rows=$1
  local invalid_count=$2

  echo >&2
  echo "Verification failed. Missing or invalid first tags found ($invalid_count):" >&2
  printf '%-72s  %s\n' "File" "Issue" >&2
  printf '%-72s  %s\n' "------------------------------------------------------------------------" "----------------" >&2
  printf '%s\n' "${ref_rows[@]}" \
    | sort \
    | awk -F '\t' '{ printf "%-72s  %s\n", $1, $2 }' >&2
  echo >&2
  echo "Approved categories are defined in first-tags.sh (APPROVED_CATEGORIES)." >&2
}

main() {
  parse_args "$@"
  resolve_target_dir

  if [[ ${#APPROVED_CATEGORIES[@]} -eq 0 ]]; then
    die "no approved categories configured in first-tags.sh"
  fi

  # Set membership map for O(1) verification checks.
  declare -A allowed
  for category in "${APPROVED_CATEGORIES[@]}"; do
    allowed["$category"]=1
  done

  declare -A counts
  local files_with_tags=0
  local files_without_tags=0
  local invalid_count=0
  declare -a invalid_rows=()

  # Scan markdown files once, then summarize and optionally verify.
  while IFS= read -r file; do
    local first_tag
    first_tag="$(extract_first_tag "$file")"

    local rel_path
    rel_path="${file#"$TARGET_DIR"/}"

    local tag
    tag="${first_tag:-"(none)"}"

    counts["$tag"]=$(( ${counts["$tag"]:-0} + 1 ))

    if [[ -n "$first_tag" ]]; then
      files_with_tags=$((files_with_tags + 1))
    else
      files_without_tags=$((files_without_tags + 1))
    fi

    if [[ $VERIFY -eq 1 ]]; then
      if [[ -z "$first_tag" ]]; then
        invalid_rows+=("$rel_path"$'\t'"(missing first tag)")
        invalid_count=$((invalid_count + 1))
      elif [[ -z "${allowed[$tag]+x}" ]]; then
        invalid_rows+=("$rel_path"$'\t'"$tag")
        invalid_count=$((invalid_count + 1))
      fi
    fi
  done < <(find "$TARGET_DIR" -type f -name '*.md' | sort)

  print_summary counts "$files_with_tags" "$files_without_tags"

  if [[ $VERIFY -eq 1 && $invalid_count -gt 0 ]]; then
    print_verification_failures invalid_rows "$invalid_count"
    exit 1
  fi

  if [[ $VERIFY -eq 1 ]]; then
    echo "Verification passed."
  fi
}

main "$@"
