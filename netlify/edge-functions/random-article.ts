const markdownFiles = Deno.readDirSync("src/content/articles");

const paths = []

for (const file of markdownFiles) {
    // Look into reading only the first few lines of the file
    const contents = Deno.readTextFileSync(`src/content/articles/${file.name}`)
    
    if (!file.isFile || contents.includes("- DRAFT")) continue

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
