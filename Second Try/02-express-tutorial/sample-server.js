const http = require('http')
const server = http.createServer((req, res) => {
    //console.log(req.method) - GET
    const url = req.url
    // homepage
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' }) // provides Headers, we pass in status code and header
        res.write('<h1>Home Page</h1>') // status code and content-type matters when we pass headers
        res.end()
    }
    // about page
    else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' }) // provides Headers, we pass in status code and header
        res.write('<h1>About Page</h1>') // status code and content-type matters when we pass headers
        res.end()
    }
    // 404
    else {
        res.writeHead(404, { 'content-type': 'text/html' }) // provides Headers, we pass in status code and header
        res.write('<h1>Page Not Found</h1>') // status code and content-type matters when we pass headers
        res.end()
    }
})

server.listen(5000)
// port - communication endpoint

// the callback in createServer invoked everytime the user hits the server

// response send to the to browser, must contain an end so that it
// indicates the communication has ended

//console.log(req.method) - GET
//console.log(req.url) - the resource that the user is trying to access, like / - for homepage 

