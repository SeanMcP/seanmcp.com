const fs = require('fs')

const titleArg = process.argv[2] || ''

if (!titleArg) {
    console.log('🎗  You can provide a title for your draft with:\n      `npm run draft \'My Title\'`\n')
}

const title = titleArg.includes('"') ? '"' + titleArg.replace(/"/g, '\\"') + '"' : titleArg

// Creates a file name safe string. There is probably a better way to do this.
function scrubFileName(title) {
    let fileName = title
    fileName = fileName.toLowerCase()
    fileName = fileName.replace(/&/g, 'and') // Removes ampersands
    fileName = fileName.replace(/\s+/g, '-') // Removes non-alphanumeric
    fileName = fileName.replace(/\\/g, '')   // Removes backslashes
    fileName = fileName.replace(/\"/g, '')   // Removes double quotes
    fileName = fileName.replace(/\'/g, '')   // Removes single quotes
    return fileName
}

const fileName = '_' + (title ? scrubFileName(title) : 'draft') + '.md'
const filePath = './articles/' + fileName
const date = new Date().toISOString().split('T')[0]

fs.readFile('./_includes/templates/article.md', 'utf8', (err, data) => {
    if (err) {
        throw(err)
    }
    const injectedData = data.replace('<TITLE>', title).replace('<DATE>', date)

    fs.writeFile(filePath, injectedData, 'utf8', (err) => {
        if (err) throw err
        console.log(`✅  Draft${titleArg ? ` "${titleArg}"` : ''} created at \`${filePath}\``)
    })
})