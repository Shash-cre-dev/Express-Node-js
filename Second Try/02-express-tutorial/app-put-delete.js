// put method is used to update Data
// route params are used

const express = require('express')
const app = express()
let { people } = require('./data')

app.use(express.json())

app.get('/api/people', (req, res) => {
    res.status(200).json({ success: true, data: people })
})

app.put('/api/people/:id', (req, res) => {
    const { id } = req.params
    const { name } = req.body

    const person = people.find((person) => person.id === Number(id))
    if (!person) {
        return res.status(404).json({ success: false, msg: `No person with id ${id}` })
    }

    const newPeople = people.map((person) => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })
    res.status(200).json({ success: true, data: newPeople })
})

// delete method to delete data

app.delete('/api/people/:id', (req, res) => {
    const person = people.find((person) => person.id === Number(req.params.id))
    if (!person) {
        return res.status(404).json({ success: false, msg: `No person with id ${req.params.id}` })
    }

    const newPeople = people.filter((person) => person.id !== Number(req.params.id))
    return res.status(200).json({ success: true, data: newPeople })
})

app.listen(5000, () => {
    console.log('Server is Listening on port 5000....')
})

