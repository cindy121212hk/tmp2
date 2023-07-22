const logger = require('./logger');
const os = require('os');
const fs = require('fs');
const _ = require('lodash');

function sayHello(name){

    var num = _.random(0,20);
    console.log("Random " + num);
    console.log("Hello " + name + logger.loggername);

}

 sayHello("John");
 sayHello("abc");

 console.log(os.cpus());
// console.log(module);