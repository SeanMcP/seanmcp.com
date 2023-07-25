import fs from "node:fs"
import path from "node:path"

const __dirname = path.dirname(new URL(import.meta.url).pathname)
const dirPath = path.join(__dirname, "./content/articles")

const files = fs.readdirSync(dirPath)

files.forEach((file) => {
    const contents = fs.readFileSync(path.join(dirPath, file), "utf8")
    const key = "pubDate: "
    const anchor = contents.indexOf(key) + key.length
    const chunk = contents.slice(anchor, anchor + 36)
    const dateString = chunk.slice(0, chunk.indexOf('\n'))
    
    const date = new Date(dateString)

    if (date.getDay() === 0) {
        console.log('!!! uh oh, it is a Sunday !!!')
        console.log(dateString)
        console.log(contents.slice(4, contents.indexOf("description:")))
    }
})