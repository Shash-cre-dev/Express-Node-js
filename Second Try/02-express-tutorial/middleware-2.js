// importing middleware from another file via logger.js
// A function that adds middleware to every route possible via app.use

const express = require('express')
const app = express()
const logger = require('./logger')

app.use(logger) // logger middleware added to all possible routes without manually adding it

// req => middleware => res

app.get('/', (req, res) => {
    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {
    res.send('Products')
})

app.get('/api/items', (req, res) => {
    res.send('Items')
})


app.listen(5000, () => {
    console.log('Server is listening on Port 5000')
})

// all middleware functions are at the top of your program
// then all the routes are written

// You can also add path to middleware via app.get()
// app.use('/api', logger)
// logger executes for all the routes named api
// Eg: /api, /api/home, /api/about etc
