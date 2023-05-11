const { readFileSync, writeFileSync } = require('fs')

const first = readFileSync('./built-in modules/first.txt', 'utf8')
const second = readFileSync('./built-in modules/second.txt', 'utf8')

writeFileSync('./built-in modules/result.txt', `Our result is : ${first}, ${second}`)