import fs from "node:fs"

const articlesDirectory = "src/content/articles"

const files = fs.readdirSync(articlesDirectory)

const paths = []

for (const file of files) {
    // Consider reading line by line
    const contents = fs.readFileSync(`${articlesDirectory}/${file}`, "utf8")
    if (contents.includes("- DRAFT")) {
        continue
    }
    const slug = file.slice(0, file.lastIndexOf("."))
    paths.push(`/articles/${slug}`)
}

export async function get() {
    return {
        body: JSON.stringify(paths),
    }
}