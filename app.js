const logger = require('./logger');
const os = require('os');
const os = require('fs');

function sayHello(name){
    console.log("Hello " + name + logger.loggername);

}

 sayHello("John");
 sayHello("abc");

 console.log(os.cpus());
// console.log(module);