const mongoose = require('mongoose')
const AdminSchema = new mongoose.Schema({
    email: String,
    password: String,
    name: String
})

module.exports = mongoose.model('admins', AdminSchema)
