// post method via form 

const express = require('express')
const app = express()
let { people } = require('./data')

// post - put data on server - two ways
// static assets
app.use(express.static('./methods-public'))

// parse form data
app.use(express.urlencoded({ extendend: false })) // middleware

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

// using the form from index.html in methods-public
app.post('/login', (res, req) => {
    // console.log(req.body)
    const { name } = req.body
    if(name){
        return res.status(200).send(`Welcome ${name}`)
    }
    res.status(401).send('Please Provide Credentials')
})

app.listen(5000, () => {
    console.log('Server is Listening on port 5000....')
})

// you can't simply do the post request with the browser
// you either need a tool (PostMan) or set up a working Application
// In here we have an application in methods-public

// For post - body is required