//require('dotenv').config()
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const routes = require('./routes/index')
const cors = require('cors')
const path = require('path') 

const PORT = process.env.PORT || 5006
//mongodb://otitoju:emini1@ds055584.mlab.com:55584/sagerocks'
//|| 'mongodb://localhost:27017/sagerocks'
mongoose.connect('mongodb://localhost:27017/sagerocks' , {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
 
//app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))
app.use('/', routes)


app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.header("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
    next()
  })
  
  
  //if (process.env.NODE_ENV === 'production') {
    // Serve any static files
    app.use(express.static(path.join(__dirname, '../my-app/build')));
  
    // Handle React routing, return all requests to React app
    app.get('*', function(req, res) {
      res.sendFile(path.join(__dirname, '../my-app/build', 'index.html'));
    })
 // }

//if(process.env.NODE_ENV === 'production') {
    // app.use(express.static( 'my-app/build'))

    // app.get('*', (req, res) => {
    //     res.sendFile(path.join(__dirname, 'my-app', 'build', 'index.html'))
    // })
//}

app.listen(PORT, () => {
    console.log(`Application started on port ${PORT}`)
})
//commands
// heroku login
// heroku create sagerocks
// heroku addons:create mongolab:sandbox

