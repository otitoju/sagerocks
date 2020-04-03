const mongoose = require('mongoose')
const ServicesSchema = new mongoose.Schema({
    title: String,
    content: String,
    photo: String,
    date: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('services', ServicesSchema)
