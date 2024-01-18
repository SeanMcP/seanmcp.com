// This is "content", but since it doesn't follow the official content pattern
// Astro requires an underscore in the filename.

const art: Art = [
    // REVERSE CHRONOLOGICAL ORDER
    ["2024-01-13T15:28-0400", "droplet_16.png", "Water droplet", "Aseprite"],
    ["2024-01-12T13:20-0400", "404_16.png", "404", "Aseprite"],
    ["2023-12-26T07:25-0400", "logo_16.png", "Logo", "Aseprite, Endesga 16"],
    ["2023-12-26T07:00-0400", "two-color-gradient_16.png", "Two-color gradient", "Aseprite, Endesga 16"],
    ["2023-12-26T06:42-0400", "hokusai-great-wave_16.png", "Hokusai's Great Wave", "Aseprite, Endesga 16; Overly ambitious, but I might revisit later."],
    ["2023-12-26T06:27-0400", "box_16.png", "Box", "Aseprite, Endesga 16"],
    ["2023-12-26T06:15-0400", "christmas-tree_16.png", "Christmas tree", "Aseprite, Endesga 16"],
    ["2023-12-21T15:07-0400", "prof-oak_16.png", "Prof. Oak", "Palette: Endesga 16"],
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