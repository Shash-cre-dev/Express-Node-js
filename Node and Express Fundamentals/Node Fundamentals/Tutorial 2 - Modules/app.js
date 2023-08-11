const names = require('./4-names')
const sayHi = require('./5-utils')

//console.log(names)
//{ john: 'john', peter: 'peter' }

sayHi('susan');       //for an input string
sayHi(names.john);    //for a variable
sayHi(names.peter);   //for a variable

// >node app.js
// Hello There susan
// Hello There john
// Hello There peter