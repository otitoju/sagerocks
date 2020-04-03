const Model = require('../models/post')
const Comment = require('../models/comment')

class PostService {
    static async getPosts() {
        try {
            return await Model.find().sort({ "_id": -1 })
        } catch (e) {
            throw e
        }
    }

    static async getPost(id) {
        try {
            return await Model.findOne({ _id: id })
        } catch (e) {
            throw e
        }
    }

    static async deletePost(id) {
        try {
            return await Model.findOneAndDelete({ _id: id })
        } catch (e) {
            throw e
        }
    }

    static async updatePost(id, data) {
        try {
            const info = await Model.findOne({ _id: id })
            if(info) {
                const { title, content } = data
                info.title = title || info.title
                info.content = content ||info.content
                await info.save()
                return info
            }
            return null
        } catch (e) {
            throw e
        }
    }

    static async newPost(data, file) {
        try {
            const info = await Model.create(data)
            info.photo = file
            await info.save()
            return info
        } catch (e) {
            throw e
        }
    }

    static async newComment(id, data) {
        try {
            await Model.findOne({ _id: id }, async (err, post) => {
                await Comment.create(data, async (err, comment) => {
                    const comments = post.comment
                    comments.push(comment)
                    await post.save()
                    return comment
                })
            })
        } catch (e) {
            throw e
        }
    }
}

module.exports = PostService;
