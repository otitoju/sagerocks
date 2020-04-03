const Admin = require('../models/admin')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

class AdminService {
    static async AdminRegistration(data) {
        try {
            return await Admin.create(data)
        } catch (e) {
            throw e
        }
    }

    static async AdminLogin(email, password) {
        try {
            const user = await Admin.findOne({ email: email })
            if (!user) {
                return null
            } else {
                const passwordIsvalid = bcrypt.compareSync(password, user.password)
                if (!passwordIsvalid) {
                    return null
                } else {
                    const token = await jwt.sign({
                        id: user.id,
                        name: user.name,
                        email: user.email
                    }, process.env.ADMINSECRET)
                    const id = user._id
                    const combined = [token, id]
                    return combined
                }
            }
        } catch (e) {
            throw e
        }
    }

    static async getAdmins() {
        try {
            return await Admin.find().sort({ "_id": -1 })
        } catch (e) {
            throw e
        }
    }

    static async getAdmin(id) {
        try {
            return await Admin.findOne({ _id: id })
        } catch (e) {
            throw e
        }
    }
}

module.exports = AdminService;
