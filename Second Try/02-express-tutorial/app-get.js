// HTTP Methods in Express

const express = require('express')
const app = express()
let { people } = require('./data')

// get - read data - default method the browser performs
app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

app.listen(5000, () => {
    console.log('Server is Listening on port 5000....')
})