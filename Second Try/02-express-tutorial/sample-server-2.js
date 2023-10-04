// we can also write the contents of file in a response 
// we are not invoking the file

const http = require('http')
const {readFileSync} = require('fs')

// get all files
const homePage = readFileSync('./index.html')

const server = http.createServer((req, res) => {
    //console.log(req.method) - GET
    const url = req.url
    // homepage
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' }) // provides Headers, we pass in status code and header
        res.write(homePage) // status code and content-type matters when we pass headers
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