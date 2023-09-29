const http = require('http')

// Normal Way
// const server = http.createServer((req, res) => {
//   res.end('Welcome')
// })

// With Event
// Using Event Emitter API
const server = http.createServer()
// emits request event
// subcribe to it / listen for it / respond to it
server.on('request', (req, res) => {
  res.end('Welcome')
})

server.listen(5000)

// server has an event called request
// request is emitted behing the scenes