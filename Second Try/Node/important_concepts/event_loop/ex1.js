// starting operating system process
console.log('first')
setTimeout(() =>{
    console.log('second')
}, 0)
console.log('third')
// completed and exited OS process

// Output
// first
// third 
// second

// setting setTimeout to interval 0, off blocks it and the CB will 
// only be executed after all the remaining code has been executed  
