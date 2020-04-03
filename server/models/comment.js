const mongoose = require('mongoose')
const commentSchema = new mongoose.Schema({
    name:String,
    text: String,
    date: { type: Date, default: Date.now() }
})

module.exports = mongoose.model('comments', commentSchema)
