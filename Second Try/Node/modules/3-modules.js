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

// { john: 'john', peter: 'peter' }
// Hello there susan
// Hello there john
// Hello there peter

//Here I changed the var name (people from names above)
// It works the same as above for names

const people = require('./names')
console.log(people)
sayHi('susan')
sayHi(people.john)
sayHi(people.peter)

// { john: 'john', peter: 'peter' }
// Hello there susan
// Hello there john
// Hello there peter

//FOR ALTERNATIVE WAY

// Here variable name can be anything
const data = require('./alternative')
const userData = require('./alternative')

console.log(data);
console.log(userData);

// { items: [ 'item1, item2' ], singlePerson: { name: 'bob' } }

// BOTH WAYS DO THE SAME THING
// { john: 'john', peter: 'peter' }
// { items: [ 'item1, item2' ], singlePerson: { name: 'bob' } } 


// MIND GRENADE

// If there is a function in a module that we invoked 
// eventhough we didn't assign it with a variable with require and invoked it
// it will still run
require('./mind-grenade')

// Output in the console - The Sum is : 15

