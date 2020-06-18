//require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes/index')
const cors = require('cors')
const path = require('path') 
const PORT = process.env.PORT || 5000

mongoose.connect('mongodb://sellyourmarket:sellyourmarket1@ds263928.mlab.com:63928/sellyourmarket' || 'mongodb://localhost:27017/sagerocks', {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
 
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', routes)

if(process.env.NODE_ENV === 'production') {
    app.use(express.static( '../my-app/build'))

    app.get('*', (req, res) => {
        res.sendFile(path.join(__dirname, '../my-app', 'build', 'index.html'))
    })
}

app.listen(PORT, () => {
    console.log(`Application started on port ${PORT}`)
})
//commands
// heroku login
// heroku create sagerocks
// heroku addons:create mongolab:sandbox

