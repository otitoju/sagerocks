const mongoose = require('mongoose')
const PostSchema = new mongoose.Schema({
    title: String,
    content: String,
    photo: String,
    date: { type: Date, default: Date.now() },
    comment: [{ type: mongoose.Schema.Types.ObjectId, ref: 'comments' }]
})

module.exports = mongoose.model('posts', PostSchema)
