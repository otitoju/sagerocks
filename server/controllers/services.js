const Service = require('../services/services')
const cloudinary = require('cloudinary')

class ServiceController {
    static async newService(req, res) {
        try {
            const { title, content } = req.body
            if(!title || !content) {
                return res.status(400).json({
                    message:'Please fill all input fields'
                })
            }
            else if(req.file == undefined || req.file == ''){
                return res.status(400).json({ message:`Error: No file selected` })
            }
            else {
                var image = req.file.path
                const result = await cloudinary.uploader.upload(image)
                var imgUrl = result.secure_url
                const info = await Service.newService(req.body, imgUrl)
                return res.status(201).json({
                    message: 'Post created'
                })
            }
        } catch (e) {
            return res.status(500).json({
                message: e.message
            })
        }
    }

    static async getService(req, res) {
        try {
            const { id } = req.params
            const info = await Service.getService(id)
            return res.status(200).json({
                info: info
            })
        } catch (e) {
            return res.status(500).json({
                message: e.message
            })
        }
    }

    static async getServices(req, res) {
        try {
            const info = await Service.getServices()
            return res.status(200).json({
                info: info
            })
        } catch (e) {
            return res.status(500).json({
                message: e.message
            })
        }
    }

    static async deleteService(req, res) {
        try {
            const { id } = req.params
            const info = await Service.deleteService(id)
            return res.status(200).json({
                info: info
            })
        } catch (e) {
            return res.status(500).json({
                message: e.message
            })
        }
    }

    static async updateService(req, res) {
        try {
            const { id } = req.params
            const info = await Service.updateService(id, req.body)
            return res.status(200).json({
                info: info
            })
        } catch (e) {
            return res.status(500).json({
                message: e.message
            })
        }
    }

}

module.exports = ServiceController;
