const { EventEmitter } = require('stream');
const logEvents = require('./logEvents');

const eventEmitter = require('events');

class MyEmitter extends EventEmitter {}; 

// initialize objects
const myEmitter = new MyEmitter();

// add listener for log event
myEmitter.on('log', (msg) => logEvents(msg));

setTimeout(() => {
    // Emit event
    myEmitter.emit('log', 'Log event emitted!');

}, 2000)