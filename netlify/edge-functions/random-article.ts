import { readLines } from "https://deno.land/std@0.177.0/io/read_lines.ts";

const markdownFiles = Deno.readDirSync("src/content/articles");

const paths = []

for (const file of markdownFiles) {
    if (!file.isFile) continue

    const reader = await Deno.open(`src/content/articles/${file.name}`)
    
    let frontmatterOpen = false;
    let isDraft = false;

    for await (const line of readLines(reader)) {
        if (line === "---") {
            if (frontmatterOpen) {
                // frontmatter already open, so this is the closing line
                break;
            } else {
                frontmatterOpen = true
            }
        } else {
            if (line.includes("- DRAFT")) {
                isDraft = true
                break;
            }
        }
    }

    reader.close()
    
    if (isDraft) continue

    const slug = file.name.slice(0, file.name.lastIndexOf("."))
    paths.push(`/articles/${slug}`)
}

export default async () => {
    const randomPath = paths[Math.floor(Math.random() * paths.length)]
    return Response.redirect(randomPath, 302)
}

export const config = {
    path: "/fn/random-article",
}
