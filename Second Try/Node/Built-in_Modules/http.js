const http = require('http')

// To create a Server - requires a callback function with two objects as arguments
// generally named req (request) and res (response)

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to our Home Page')
    }
    if (req.url === '/about') {
        res.end('Here is our History')
    }
    res.end(`
    <h1>Oops!</h1>
    <p>We can't seem to find the Page you are looking for</p>
    <a href="/">back home</a>
    ` 
    )
})

server.listen(5000)

// Web Servers keep on listening to incoming request
// They need to be always up