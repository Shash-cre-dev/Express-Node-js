const http = require('http')

const server = http.createServer((req, res) => {
    console.log('request event')
    res.end('Hello World')
})

server.listen(5000, () => {
    console.log('Server listening on port : 5000...')
})

// Output
// Server listening on port : 5000

// In the browser at localhost:5000
// hello world

// In the console
// request event (only when you visit localhost:5000)

// this process stays alive - server keeps listening for the incoming requests
// once the request arrives respond to them appropriately