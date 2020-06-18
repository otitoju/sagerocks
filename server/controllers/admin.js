const AdminService = require('../services/admin')
const bcrypt = require('bcryptjs')

class AdminController {
    static async AdminRegistration(req, res) {
        try {
            if(!req.body.name || !req.body.email || !req.body.password ) {
                return res.status(400).json({
                    message: 'Please fill in all fields'
                })
            }
            else {
                const data = req.body
                const hash = bcrypt.hashSync(req.body.password, 10)
                const info = await AdminService.AdminRegistration(data)
                info.password = hash
                await info.save()
                return res.status(201).json({ 
                    message: "created",
                    info: info
                })
            }
        } catch (e) {
            return res.status(500).json({
                error: e.message
            })
        }
    }

    static async getAdmins(req, res) {
        try {
            const info = await AdminService.getAdmins()
            return res.status(200).json({
                info: info
            })
        } catch (e) {
            return res.status(500).json({
                error: e.message
            })
        }
    }

    static async getAdmin(req, res) {
        try {
            const { id } = req.params
            const info = await AdminService.getAdmin(id)
            return res.status(200).json({
                info: info
            })
        } catch (e) {
            return res.status(500).json({
                error: e.message
            })
        }
    }

    static async AdminLogin(req, res) {
        try {
            const { email, password } = req.body
            if(!email || !password) {
                return res.status(400).json({
                    message: 'Please fill all fields'
                })
            }
            else {
                const user = await AdminService.AdminLogin(email, password)
                if(!user) {
                    return res.status(404).json({
                        message: 'wrong email/password'
                    })
                }
                else {
                    return res.status(200).json({
                        message: 'login was successful',
                        token: user[0],
                        id: user[1],
                        name: user[2]

                    })
                }
            }
        } catch (e) {
            return res.status(500).json({
                error: e.message
            })
        }
    }
}

module.exports = AdminController;
