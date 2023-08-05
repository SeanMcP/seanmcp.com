import fs from "node:fs"
import path from "node:path"

const __dirname = path.dirname(new URL(import.meta.url).pathname)
const dirPath = path.join(__dirname, "./content/articles")

const files = fs.readdirSync(dirPath)

function forceTwoDigits(number) {
    const string = String(number)

    if (string.length === 1) {
        return "0" + string
    }
    return string
}

/**
 * @param {Date} date 
 * @returns 
 */
function getTimestamp(date) {
    const dateParts = [
        date.getFullYear(),
        date.getMonth() + 1,
        date.getDate(),
    ].map(forceTwoDigits)
    const timeParts = [
        date.getHours(),
        date.getMinutes()
    ].map(forceTwoDigits)

    return `${dateParts.join('-')}T${timeParts.join(':')}-0400`
}

files.forEach((file) => {
    const contents = fs.readFileSync(path.join(dirPath, file), "utf8")
    const key = "pubDate: "
    const anchor = contents.indexOf(key) + key.length
    const chunk = contents.slice(anchor, anchor + 36)
    const dateString = chunk.slice(0, chunk.indexOf('\n'))
    // The above is neat and all, but I should probably be using String.replace
    // with a regex pattern
    contents.replace(/pubDate: (.*)\n/, (_, pubDate) => {
        const date = new Date(pubDate)

        // console.log(pubDate)

        if (!pubDate.includes("T")) {
            // It's one of the date-only timestamps
            date.setHours(12)
            date.setUTCDate(date.getUTCDate() + 1)
            // console.log([pubDate, getTimestamp(date)])
            return ""
        }
    
        if (pubDate.includes("Z")) {
            // UTC time!
            // console.log([pubDate, getTimestamp(date)])
            return ""
        }

        // console.count('OTHER')
        let next = pubDate.slice(0, pubDate.lastIndexOf('.') - 3)
        next += "-0400"
        // console.log([pubDate, next])
        return ""
    })

    if (!dateString.includes("T")) {
        // It's one of the date-only timestamps. Add a publish time at noon.
    }

    if (dateString.includes("Z")) {
        // UTC time! Subtract four hours and set the correct timezone.
    }
    
    const date = new Date(dateString)

    // I don't think this will actually be an issue once I resolve all of the T-
    // less dates, but I'll keep this check for now.
    if (date.getDay() === 0) {
        // console.log('!!! uh oh, it is a Sunday !!!')
        // console.log(dateString)
        // console.log(contents.slice(4, contents.indexOf("description:")))
    }
})