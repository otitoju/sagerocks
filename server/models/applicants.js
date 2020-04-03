const mongoose = require('mongoose')
const ApplicantSchema = new mongoose.Schema({
    name: String,
    email: String,
    cv: String,
    date: { type: Date, default: Date.now() },
    approved: { type: Boolean, default: false }
})

module.exports = mongoose.model('posts', PostSchema)
