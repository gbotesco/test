const { log } = require('console')
const path = require('path')

log(path.sep)

const filePath = path.join('/built-in module', 'content', 'module.js')

log(filePath)

const base = path.basename(filePath)
log(base)

const absolute = path.resolve( __dirname, 'built-in modules', 'content', 'module.js')
log(absolute)