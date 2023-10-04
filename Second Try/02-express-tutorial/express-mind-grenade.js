// navbar-app via Express.js

// In Express we pass in the absolute path with path.resolve


const express = require('express')
const path = require('path')
const app = express()

// For static files - css, logo, js
// setup static and middleware
app.use(express.static('./public'))

// index.html
// app.get('/', (req, res) => {
//     res.sendFile(path.resolve(__dirname, './navbar-app/index.html'))

// Since absolute path is also static 
// Two ways to add index.html

// 1 - Place it in public folder
// 2 - Template Engine (Server Side Rendering)
// })

app.all('*', (req,res) =>{
    res.status(404).send('Resource Not Found')
})

app.listen(5000, () => {
    console.log('Server is listening on Port 5000')
})
