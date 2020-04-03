const ApplicantService = require('../services/applicant')

class ApplicantController {
    static async newAppicant(req, res) {
        try {
            const { email, name } = req.body
            if(!email || !name) {
                return res.status(400).json({
                    message: "Please fill in all fields"
                })
            }
            else if(req.file == undefined || req.file == ''){
                return res.status(400).json({ message:`Error: No file selected` })
            }
            else {
                var file = req.file.path
                const result = await cloudinary.v2.uploader.upload(file, { resource_type: "raw" })
                let fileUrl = result.secure_url
                const info = await ApplicantService.newApplicant(req.body, fileUrl)
                return res.status(201).json({
                    message: 'Application sent successfully'
                })
            } 
        } catch (e) {
            return res.status(500).json({
                message: e.message
            })
        }
    }

    static async getApplicants(req, res) {
        try {
            const info = await ApplicantService.getApplicants()
            return res.status(200).json({
                info: info
            })
        } catch (e) {
            return res.status(500).json({
                message: e.message
            })
        }
    }

    static async getApplicant(req, res) {
        try {
            const { id } = req.params
            const info = await ApplicantService.getApplicant(id)
            return res.status(200).json({
                info: info
            })
        } catch (e) {
            return res.status(500).json({
                message: e.message
            })
        }
    }

    static async deleteApplicant(req, res) {
        try {
            const { id } = req.params
            const info = await ApplicantService.deleteApplicant(id)
            return res.status(200).json({
                info: info
            })
        } catch (e) {
            return res.status(500).json({
                message: e.message
            })
        }
    }

    static async updateApplicant(req, res) {
        try {
            const { id } = req.params
            const info = await ApplicantService.updateApplicant(id, req.body)
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

module.exports = ApplicantController;
