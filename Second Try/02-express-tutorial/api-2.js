const express = require('express')
const app = express()

// importing data from data.js
const { products } = require('./data')
const { startsWith } = require('lodash')

app.get('/', (req, res) => {
    res.send('<h1> Home Page</h1><a href="/api/products">products</a>')
})

// with mapping - you can get specific chunks of data
app.get('/api/products', (req, res) => {
    const newProducts = products.map((product) => {
        const { id, name, image } = product;
        return { id, name, image }
    })
    res.json(newProducts)
})

// specific info about one product - find
// app.get('/api/products/1', (req, res) => {
//     const singleProduct = products.find((product) => product.id ===1)
//     res.json(singleProduct)
// })

// Now suppose we have 100 products we won't setup 100 different routes like /api/products/2 etc
// Instead we will use Route Parameters of Express

app.get('/api/products/:productID', (req, res) => {
    // console.log(req)
    // console.log(req.params)

    const { productID } = req.params
    const singleProduct = products.find((product) => product.id === Number(productID))
    if (!singleProduct) {
        return res.status(404).send('Product Does Not Exist')
    }
    return res.json(singleProduct)
})

// ROUTE PARAMS (:)

// They are like Placeholders where user provides a data req and params and set up some kind of logic
// request params will always come in a string, convert the data type if required

// for reviews
app.get('api/products/:productID/reviews/:reviewID', (req, res) => {
    console.log(req.params)
    res.send('Hello World')
})

// app.get('/', (req, res) => {
//     res.json([{ name: 'john' }, { name: 'susan' }])
// })

app.listen(5000, () => {
    console.log('Server is listening on Port 5000...');
})

// QUERY STRING PARAMETERS (URL PARAMETERS) (?)

// Send small amount of info to the servers using url, like for db or filtering db

// for search and limits of the Products displayed at once
app.get('/api/v1/query', (req, res) => {
    // console.log(req.query)
    const { search, limit } = req.query
    let sortedProducts = [...products]

    if (search) {
        sortedProducts = sortedProducts.filter((product) => {
            return product.name, startsWith(search)
        })
    }
    if (limit) {
        sortedProducts = sortedProducts.slice(0, Number(limit))
    }
    // no product found
    if (sortedProducts.length < 1) {
        // res.status(200).send('No Products that Matched your Search')
        return res.status(200).json({ success: true, data: [] })
    }
    res.status(200).json(sortedProducts)
    // res.send('Hello World')
})

// you can add as many query string param as you want