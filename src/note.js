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

    const content = `---\ndate: ${new Date().toISOString()}\n---\n\n`

    const fileName = highest + 1 + '.md'

    fs.writeFileSync(`${cwd}/src/notes/${fileName}`, content)

    console.log(`Created \`notes/${fileName}\``)
} catch (error) {
    console.error(error)
    process.exit(0)
}
