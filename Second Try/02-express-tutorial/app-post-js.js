// Post Method via JavaScript (No Form)
// from javascript.html from methods-public

const express = require('express')
const app = express()
let { people } = require('./data')

app.use(express.static('./methods-public'))

// parse json
app.use(express.json())

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

app.post('/api/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).json({ success: false, msg: 'Please Provide Name Value' })
    }
    res.status(201).json({ success: true, person: name })
})

app.post('/api/postman/people', (req, res) => {
    const { name } = req.body
    if (!name) {
        return res.status(400).json({ success: false, msg: 'Please Provide Name Value' })
    }
    res.status(201).send({ success: true, data: [...people, name] })
})

app.listen(5000, () => {
    console.log('Server is Listening on port 5000....')
})