const num1 = 5
const num2 = 10

function addValues(){
    console.log(`The Sum is : ${num1 + num2}`)
}

addValues() //function invoked

// If there is a function in a module that we invoked 
// eventhough we didn't assign it with a variable with require and invoked it
// it will still run