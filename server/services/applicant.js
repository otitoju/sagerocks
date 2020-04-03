const Applicant = require('../models/applicants')

class ApplicantService {
    static async newApplicant(data, cv) {
        try {
            const info = await Applicant.create(data)
            info.cv = cv
            await info.save()
            return info
        } catch (e) {
            throw e
        }
    }

    static async getApplicants() {
        try {
            return await Applicant.find().sort({ "_id": -1 })
        } catch (e) {
            throw e
        }
    }

    static async getApplicant(id) {
        try {
            return await Applicant.findOne({ _id: id })
        } catch (e) {
            throw e
        }
    }

    static async deleteApplicant(id) {
        try {
            return await Applicant.findOneAndDelete({ _id: id })
        } catch (e) {
            throw e
        }
    }

    static async updateApplicant(id, data) {
        try {
            const info = await Applicant.findOne({ _id: id })
            if(info) {
                const { approved } = data
                info.approved = approved || info.approved
                await info.save()
                return info
            }
            return null
        } catch (e) {
            throw e
        }
    }
}

module.exports = ApplicantService
