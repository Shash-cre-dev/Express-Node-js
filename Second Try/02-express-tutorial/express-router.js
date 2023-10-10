// common convention of setting up Express Routers

// create a folder named routes

const express = require('express')
const app = express()

// setting up router
const people = require('./routes/people')
const auth = require('./routes/auth')

// static assets
app.use(express.static('./methods-public'))

// parse form data
app.use(express.urlencoded({ extendend: false })) // middleware

// parse json
app.use(express.json())

// base route
app.use('/api/people', people)
app.use('/login', auth)
// no need to add /api/people to every router method in people.js

app.listen(5000, () => {
    console.log('Server is Listening on port 5000....')
})

// The code can be further clearned with MVC convention
// Model View Controller