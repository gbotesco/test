const os = require('os')

//Get info about the user

const userDetails = os.userInfo()

console.log(userDetails)


//Get the system uptime

const mySystemUptime = os.uptime()
console.log(`My system uptime is ${mySystemUptime} seconds`)

const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMem: os.totalmem(),
    freeMem: os.freemem()
}
console.log(currentOS)