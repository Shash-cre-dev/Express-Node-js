const os = require('os')

// info about the current user
const user = os.userInfo()
console.log(user)

// method returns the System Uptime in seconds
console.log(`The System Uptime is ${os.uptime()} seconds`);

const currentOS = {
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem(),
}

console.log(currentOS)
