---
title: Find and replace with Regex groups
description: Create Regex groups with parentheses for powerful find/replace patterns
tags:
- Regex
date: 2023-03-14T06:50-0400
---

Create Regex groups with parentheses for powerful find/replace patterns.

**Setup**: I have a markdown file with a lot of shorthand links to GitHub PRs,
_e.g._ `user/repo#1`, that I wanted to be replaced with full URLs:
`https://github.com/user/repo/issues/1`.

These steps are for VS Code, but you can do a Regex find/replace in any
environment.

**Step by step:**

1. Open the search panel in VS Code
2. Turn on Regex searches with the `.*` toggle
3. Search with the following Regex pattern: `([\w-]+)/(.+)#(\d+)`
 - This looks for any text that matches the pattern of:
   - `([\w-]+)` a word containing one more alphanumeric or hyphen characters,
   - `/` a forward slash,
   - `(.+)` one or more of any character,
   - `#` a pound sign, and
   - `(\d+)` one or more digits
 - It creates three groups (identified by the parentheses)
4. Replace the matched text with the following pattern:
   `https://github.com/$1/$2/issues/$3`

**Try it out:**

[https://regexr.com/7a3kb](https://regexr.com/7a3kb)

**Tradeoffs:** The regex pattern above will only match for alphanumeric GitHub
usernames with optional hyphens. I don’t know the official pattern used to
validate usernames, so your data might include some that don’t match.
