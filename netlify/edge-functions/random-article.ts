export default async () => {
    let path = "/articles"
    try {
        const response = await fetch("https://www.seanmcp.com/data/articles.json")
        const paths = await response.json()
        path = paths[Math.floor(Math.random() * paths.length)]
    } catch (error) {
        console.error(error)
    }
    return Response.redirect(path, 302)
}

export const config = {
    path: "/fn/random-article",
}
