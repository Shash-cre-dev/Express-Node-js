const names = require('./4-names')
const sayHi = require('./5-utils')
const data = require('./6-alternative_mod')

//console.log(names)
//{ john: 'john', peter: 'peter' }

//console.log(data)
//{ items: [ 'item1', 'item2' ], singlePerson: { name: 'Bob' } }

sayHi('susan');       //for an input string
sayHi(names.john);    //for a variable
sayHi(names.peter);   //for a variable

// >node app.js
// Hello There susan
// Hello There john
// Hello There peter

require('./7-mind_grenade')
//invoked function inside the required module (7-mind_grenade) is present, therefore the function addValues() will also execute
// >node app.js
// the sum is : 134