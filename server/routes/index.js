const express = require('express')
const router = express.Router()
const postcontroller = require('../controllers/post')
const cloudinary = require('cloudinary')
const multer = require('multer')
const config = require('../config/config')
const applicantcontroller = require('../controllers/applicants')
const servicecontroller = require('../controllers/services')
const admincontroller = require('../controllers/admin')

cloudinary.config({
    cloud_name: config.cloud_name,
    api_key : config.api_key,
    api_secret : config.api_secret
})

const storage = multer.diskStorage({
    filename:function(req, file, cb){
        cb(null, Date.now()+file.originalname)
    }
})

const imageFilter = function(req, file, cb){
    if(!file.originalname.match(/\.(jpeg|jpg|png)$/i)){
        return cb('Only image files are allowed', false)
    }
    else{
        cb(null,true)
    }
}
const upload = multer({
    storage:storage,
    fileFilter:imageFilter
})

//Documents cloudinary and multer setup
// const storage = multer.diskStorage({
//     filename: function(req, file, cb){
//         cb(null, Date.now()+file.originalname)
//     }
// })
const docFilter = function(req, file, cb){
    if(!file.originalname.match(/\.(docx|doc|msword|rtf|zip|rar|pdf|txt)$/i)){
        return cb('Only zip, pdf, doc and docx files are allowed', false)
    }
    else{
        cb(null,true)
    }
}
var uploadfile = multer({
    storage:storage,
    limits:{fileSize:1024*1024*10},
    fileFilter:docFilter
}).single('cv')

// post routes
router.post('/api/v1/newpost', upload.single('photo'), postcontroller.newPost)
router.get('/api/v1/allposts', postcontroller.getPosts)
router.get('/api/v1/post/:id', postcontroller.getPost)
router.delete('/api/v1/post/delete/:id', postcontroller.deletePost)
router.put('/api/v1/post/put/:id', postcontroller.updatePost)
router.post('/api/v1/comment/:id', postcontroller.newComment)

// applicantsroutes
router.post('/api/v1/newapplicant', uploadfile, applicantcontroller.newAppicant)
router.get('/api/v1/applicants', applicantcontroller.getApplicants)
router.get('/api/v1/applicant/:id', applicantcontroller.getApplicant)
router.delete('/api/v1/applicant/delete/:id', applicantcontroller.deleteApplicant)
router.put('/api/v1/applicant/put/:id', applicantcontroller.updateApplicant)

// services routes
router.post('/api/v1/newservice', upload.single('photo'), servicecontroller.newService)
router.get('/api/v1/services', servicecontroller.getServices)
router.get('/api/v1/service/:id', servicecontroller.getService)
router.put('/api/v1/put/service/:id', servicecontroller.updateService)
router.delete('/api/v1/service/delete/:id', servicecontroller.deleteService)

router.post('/api/v1/register', admincontroller.AdminRegistration)
router.post('/api/v1/login', admincontroller.AdminLogin)
router.get('/api/v1/admins', admincontroller.getAdmins)
router.get('/api/v1/admin/:id', admincontroller.getAdmin)

module.exports = router;
