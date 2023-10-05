const express = require('express')
const app = express()

// importing data from data.js
const { products } = require('./data')

app.get('/', (req, res) => {
    res.json(products)
})

// app.get('/', (req, res) => {
//     res.json([{ name: 'john' }, { name: 'susan' }])
// })

app.listen(5000, () => {
    console.log('Server is listening on Port 5000...');
})

// We can access the data with json and built front-end using that data