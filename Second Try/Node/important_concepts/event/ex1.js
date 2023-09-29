// 3) We can pass in the arguments while emitting the event

const EventEmitter = require('events')
const customEmitter = new EventEmitter()

customEmitter.on('response', (name, id)=>{
    console.log(`data recieved user ${name} with id${id}`);
})

customEmitter.emit('response', 'john', 34)