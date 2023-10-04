// When we try to combine the contents of navbar-app
// JS, HTML AND CSS

const http = require('http')
const {readFileSync} = require('fs')

// get all files
const homePage  = readFileSync('./navbar-app/index.html')
const homeStyle = readFileSync('./navbar-app/styles.css')
const homeImage = readFileSync('./navbar-app/logo.svg')
const homeLogic = readFileSync('./navbar-app/browser-app.js')

const server = http.createServer((req, res) => {
    const url = req.url

    // homepage
    if (url === '/') {
        res.writeHead(200, { 'content-type': 'text/html' }) 
        res.write(homePage) 
        res.end()
    }

    // about page
    else if (url === '/about') {
        res.writeHead(200, { 'content-type': 'text/html' }) 
        res.write('<h1>About Page</h1>') 
        res.end()
    }

    // styles
    else if (url === '/styles.css') {
        res.writeHead(200, { 'content-type': 'text/css' }) 
        res.write(homeStyle) 
        res.end()
    }

    // image/logo
    else if (url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'image/svg+xml' }) 
        res.write(homeImage) 
        res.end()
    }

    // logic-js
    else if (url === '/logo.svg') {
        res.writeHead(200, { 'content-type': 'text/javascript' }) 
        res.write(homeLogic) 
        res.end()
    }

    // 404
    else {
        res.writeHead(404, { 'content-type': 'text/html' }) 
        res.write('<h1>Page Not Found</h1>') 
        res.end()
    }
})

server.listen(5000)

// We are not able to request css and js from index.html
// We have to request the external files explicitly one by one

// We use Express.js to reduce such tasks
// For example, if a website has a lot of resources setting up manually one by one 
// will be difficult