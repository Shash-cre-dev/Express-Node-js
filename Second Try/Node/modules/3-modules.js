// Modules

// Node uses CommonJS, and every file in Node is module (by Default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./names')
const sayHi = require('./utils')

console.log(names)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)
