const express = require('express')
const app = express()
//  OR const app = require('express)()

// homepage - user accesses homepage on the server
app.get('/', (req, res)=>{
res.status(200).send('Home Page')
})

// aboutpage
app.get('/about', (req, res)=>{
    res.status(200).send('About Page')    
})

// 404
app.all('*', (req,res)=>{
    res.status(404).send('<h1>Resource Not Found</h1>')
})
// all handles all pages

app.listen(5000, () => {
    console.log('Server is listening on Port 5000')
})

// most common methods in express
// app.get
// app.post
// app.put
// app.delete
// app.all
// app.use
// app.listen