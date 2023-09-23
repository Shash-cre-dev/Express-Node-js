// Modules

// Node uses CommonJS, and every file in Node is module (by Default)
// Modules - Encapsulated Code (only share minimum)

const names = require('./names')
const sayHi = require('./utils')

// For Functions - When using require the var names (sayHi) must match with the same in exports object

console.log(names)

sayHi('susan')
sayHi(names.john)
sayHi(names.peter)

//Here I changed the var name (people from names above)
// It works the same as above for names

const people = require('./names')
console.log(people)
sayHi('susan')
sayHi(people.john)
sayHi(people.peter)

