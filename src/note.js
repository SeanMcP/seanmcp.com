const fs = require('fs')

const cwd = process.cwd()

try {
    const notes = fs.readdirSync(`${cwd}/src/notes`, { encoding: 'utf8' })

    let highest = 0

    for (let i = 0; i < notes.length; i++) {
        const [name, extension] = notes[i].split('.')
        if (extension !== 'md') continue

        const noteNumber = parseInt(name)
        if (noteNumber > highest) highest = noteNumber
    }

    const next = highest + 1;

    const template = fs.readFileSync(`${cwd}/src/_includes/templates/note.md`, { encoding: 'utf8' })
    const [date] = new Date().toISOString().split('T')

    const contents = template.replace('<DATE>', date)

    fs.writeFileSync(`${cwd}/src/notes/${next}.md`, contents)
} catch (error) {
    console.error(error)
    process.exit(0)
}
