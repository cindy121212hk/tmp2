const logger = require('./logger');
const os = require('os');
const os = require('fs');
const _ = require('lodash');

function sayHello(name){
    console.log("Hello " + name + logger.loggername);

}

 sayHello("John");
 sayHello("abc");

 console.log(os.cpus());
// console.log(module);