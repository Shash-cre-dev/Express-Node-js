// Executing Two Middlewares logger and authorize

const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

// We execute multiple middleware via using array in app.use

app.use([logger, authorize])
// they will be executed in order of their place in array

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
    console.log(req.user)
    res.send('Items')
})


app.listen(5000, () => {
    console.log('Server is listening on Port 5000')
})

// 1. use vs route
// What if you don't want to pass middlewares to all routes, just /api/items 
// app.get('/api/items', [logger, authorize] (req, res) => {
//     console.log(req.user)
//     res.send('Items')
// })

// 2. options - our own / express / third party

// What are the options available with middlewares
// our own - you can create and setup your own middlewares

// express - provides some built-in middlewares
// app.use(express.static('./public'))

// third party - like morgan npm
// npm i morgan

const morgan = require('morgan')
app.use(morgan('tiny'))