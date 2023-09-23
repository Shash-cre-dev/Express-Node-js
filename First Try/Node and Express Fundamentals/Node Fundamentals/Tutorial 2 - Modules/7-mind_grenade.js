const num1 = 7
const num2 = 127

function addValues(){
    console.log(`the sum is : ${num1 + num2}`)
}

addValues()

//When there is a invoked function (function that is executed via function call)
//inside a module, then function will also run in any other module with 
//require without assigning it to any other variable or calling the function