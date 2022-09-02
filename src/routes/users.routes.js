const {Router} = require('express')
const route = Router()
const controller = require('../controllers/user.controllers');
const {resolve,extname} = require('path')

//Multer
const {existsSync,mkdirSync} = require('fs');
const destination = function(req,file,cb){
    let folder = resolve(__dirname, '..', '..','public','images','Uploads','users')

    if(!existsSync(folder)){
        mkdirSync(folder)
    }
    return cb(null,folder)
}

const filename = function(req,file,cb){
    let name = file.fieldname + '-' +  Date.now() + extname(file.originalname)
    return cb(null,name)
}
const multer = require('multer');
const { diskStorage } = require('multer');
const upload = multer({storage:diskStorage({destination,filename})})

route.get('/login', controller.login);
route.get('/register', controller.register);
route.post('/save',upload.any(), controller.save);
route.post('/access',controller.access)
route.get('/logout', controller.logout);
route.get('/profile',controller.profile)

module.exports = route