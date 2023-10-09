// MIDDLEWARE IN EXPRESS
// They are functions that execute during request of the server
// Each middleware object has access to res and req object

// Middleware is everywhere in express (heart and soul of express)

const express = require('express')
const app = express()

// req => middleware => res

// Here logger is the middleware

const logger = () => {
    const method = req.method
    const url = req.url
    const time = new Date().getFullYear()
    console.log(method, url, time)
    // res.send('Testing) - terminating middleware
    next() // - passing it to next middleware via next()
}

app.get('/', logger, (req, res) => {
    res.send('Home')
})

// express automatically supplies req, res, next to the middleware behind the scenes
// when you work with middleware, must pass it on to a next middleware unless you are terminating it with res.send

app.get('/about', logger, (req, res) => {
    res.send('About')
})

app.listen(5000, () => {
    console.log('Server is listening on Port 5000')
})