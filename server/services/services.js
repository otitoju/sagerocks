const Model = require('../models/services')

class Service {
    static async getServices() {
        try {
            return await Model.find().sort({ "_id": -1 })
        } catch (e) {
            throw e
        }
    }

    static async getService(id) {
        try {
            return await Model.findOne({ _id: id })
        } catch (e) {
            throw e
        }
    }

    static async deleteService(id) {
        try {
            return await Model.findOneAndDelete({ _id: id })
        } catch (e) {
            throw e
        }
    }

    static async updateService(id, data) {
        try {
            const info = await Model.findOne({ _id: id })
            if(info) {
                const { title, content } = data
                info.title = title || info.title
                info.content = content || info.content
                await info.save()
                return info
            }
            return null
        } catch (e) {
            throw e
        }
    }

    static async newService(data, file) {
        try {
            const info = await Model.create(data)
            info.photo = file
            await info.save()
            return info
        } catch (e) {
            throw e
        }
    }

}

module.exports = Service;
