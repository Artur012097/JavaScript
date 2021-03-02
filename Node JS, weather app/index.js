const fs = require('fs')

const data = `
    Hello everyone
    I'm from Berlin
`

fs.writeFileSync('berlin.txt', data)

const text = fs.readFileSync('berlin.txt', {encoding: 'utf-8'})

console.log(text)