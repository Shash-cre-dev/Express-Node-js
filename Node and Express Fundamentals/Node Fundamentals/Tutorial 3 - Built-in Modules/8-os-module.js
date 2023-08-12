//OS MODULES

//It provides many properties and methods to interact with the OS

//for built in modules, no need to reference it with './'

const os = require('os')

//info about current user
const user = os.userInfo()
console.log(user)

//method returns the System's Uptime in seconds
console.log(`The System's Uptime is ${os.uptime()} seconds`)

const currentOS = {
    name: os.type(), //type of OS
    release: os.release(),  //release version of OS
    totalMem: os.totalmem(), //total memory of the System
    freeMem: os.freemem() //free memory of the System
}

console.log(currentOS)