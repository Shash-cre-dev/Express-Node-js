const sayHi = (name) => {
    console.log(`Hello there ${name}`)
}

//same as export default
module.exports = sayHi

//Anything dumped inside the exports object can be used throughout the App via require
