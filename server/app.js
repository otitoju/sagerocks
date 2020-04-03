require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes/index')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', routes)

app.get('/', (req, res) => {
    res.send(`<h1>Sage rocks server</h1>`)
})

const port = process.env.PORT

app.listen(port, () => {
    console.log(`Application started on port ${port}`)
})

mongoose.connect(process.env.MONGOURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
