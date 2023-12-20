// This is "content", but since it doesn't follow the official content pattern
// Astro requires an underscore in the filename.

const art: Art = [
    // REVERSE CHRONOLOGICAL ORDER
    ["2023-12-20T08:24-0400", "maple-tree_16.png", "Maple tree", "Tried some dithering on the leaves"],
    ["2023-12-19T16:00-0400", "donut.png", "Donut", "What flavor is blue frosting?"],
    ["2023-12-19T15:30-0400", "red.png", "Red", "Maybe jumping into color a little too quickly, but I like how the shading turned out"]
]

type Piece = [
    string, // Date string, e.g. 2023-12-20T06:13-400
    string, // Relative path, e.g. example.png
    string, // Title, e.g. Example
    string?, // Description (optional), e.g. Lorem ipsum dolor
]

export type Art = Array<Piece>

// Validate that all titles are unique
art.reduce((acc, [,,title]) => {
    if (acc[title]) {
        throw new Error(`Duplicate art title: ${title}`)
    }
    acc[title] = true
    return acc
}, {})

export default art