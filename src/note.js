const fs = require('fs')

try {
    const notes = fs.readdirSync('./notes', { encoding: 'utf8' })

    let highest = 0

    for (let i = 0; i < notes.length; i++) {
        const [name, extension] = notes[i].split('.')
        if (extension !== 'md') continue

        const noteNumber = parseInt(name)
        if (noteNumber > highest) highest = noteNumber
    }

    const next = highest + 1;

    const template = fs.readFileSync('./_includes/templates/note.md', { encoding: 'utf8' })
    const [date] = new Date().toISOString().split('T')

    const contents = template.replace('<DATE>', date)

    fs.writeFileSync(`./src/notes/${next}.md`, contents)
} catch (error) {
    console.error(error)
    process.exit(0)
}
