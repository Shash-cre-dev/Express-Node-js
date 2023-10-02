const http = require('http')
const server = http.createServer((req, res) => {
    res.writeHead(200, { 'content-type': 'text/html' }) // provides Headers, we pass in status code and header
    res.write('<h1>Home Page</h1>') // status code and content-type matters when we pass headers
    res.end()
    // response send to the to browser, must contain an end so that it 
    // indicates the communication has ended
})

server.listen(5000)
// port - communication endpoint

// the callback in createServer invoked everytime the user hits the server

