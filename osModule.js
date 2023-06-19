// FOR MORE IMPORTANT OS RELATED MODULES IN NODEJS REFER TO NODEJS DOCS OF OS MODULE...
// LINK:- https://nodejs.org/docs/latest-v16.x/api/os.html#os

const os = require('node:os');

console.log(os.freemem())    //used to view the free memory of your computer

console.log(os.homedir())   //print the home directory...

console.log(os.hostname())

console.log(os.platform())

console.log(os.release())

console.log(os.uptime())

console.log(os.networkInterfaces());

console.log(os.totalmem())