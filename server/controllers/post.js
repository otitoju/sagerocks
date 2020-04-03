const PostService = require('../services/post')
const cloudinary = require('cloudinary')

class PostController {
    static async newPost(req, res) {
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
                const info = await PostService.newPost(req.body, imgUrl)
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

    static async getPost(req, res) {
        try {
            const { id } = req.params
            const info = await PostService.getPost(id)
            return res.status(200).json({
                info: info
            })
        } catch (e) {
            return res.status(500).json({
                message: e.message
            })
        }
    }

    static async getPosts(req, res) {
        try {
            const info = await PostService.getPosts()
            return res.status(200).json({
                info: info
            })
        } catch (e) {
            return res.status(500).json({
                message: e.message
            })
        }
    }

    static async deletePost(req, res) {
        try {
            const { id } = req.params
            const info = await PostService.deletePost(id)
            return res.status(200).json({
                info: info
            })
        } catch (e) {
            return res.status(500).json({
                message: e.message
            })
        }
    }

    static async updatePost(req, res) {
        try {
            const { id } = req.params
            const info = await PostService.updatePost(id, req.body)
            return res.status(200).json({
                info: info
            })
        } catch (e) {
            return res.status(500).json({
                message: e.message
            })
        }
    }

    static async newComment(req, res) {
        try {
            const { name, text } = req.body
            if(!name || !text) {
                return res.status(400).json({
                    message: 'Please enter valid comment'
                })
            }
            else {
                const { id } = req.params
                const info = await PostService.newComment(id, req.body)
                return res.status(200).json({
                    message: 'Comment created',
                    info: info
                })
            }
        } catch (e) {
            return res.status(500).json({
                message: e.message
            })
        }
    }
}

module.exports = PostController;
