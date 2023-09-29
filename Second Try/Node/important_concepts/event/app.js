// Event-Driven Programming 
// Flow of the program occurs as events execute
// Used Heavily in Node.js, core building blocks of code

// once an event takes place the callback function executes

// We create an instance from the class we get by events module, then there are
// two methods on method and emit method

// in on method we pass in the name of the event and a callback fn

// Once the event occurs, callback function executes
// then we emit the event by passing in the name of event in emit method

// Eventhough one is not setting up events, a lot of built in modules rely on events

const EventEmitter = require('events')

const customEmitter = new EventEmitter()
// customeEmitter is an instance

// on - listen to an event
// emit - emit an event 

// name of event - response
customEmitter.on('response', ()=>{
    console.log(`data recieved`);
})

// 1) We can have as many functions with the same event and perform other tasks
customEmitter.on('response', ()=>{
    console.log(`Some Other Logic here`);
})

customEmitter.emit('response')

// 2) Order of on and emit matters - on first then emit
//    We always first listen for the event before emitting it

// 3) We can pass in the arguments while emitting the event
// Refer to ex1.js
