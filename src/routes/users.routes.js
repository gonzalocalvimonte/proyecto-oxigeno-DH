const {Router} = require('express')
const route = Router()
const {resolve,extname} = require('path')

const multer = require('multer');
const { diskStorage } = require('multer');
const {existsSync,mkdirSync} = require('fs');

const controller = require('../controllers/user.controllers')
const isLogged = require('../middlewares/userLogged')
const isAdmin = require('../middlewares/userAdmin')

//Multer
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
const upload = multer({storage:diskStorage({destination,filename})})

route.get('/login', controller.login);
route.get('/register', controller.register);
route.post('/save',upload.any(), controller.save);
route.post('/access',controller.access)
route.get('/logout', controller.logout);
route.get('/profile', isLogged, controller.profile)
route.get('/profile/edit/:id',isLogged,controller.edit)
route.put('/update',upload.any(),controller.update)
route.delete('/delete',controller.delete)
route.get('/show',isLogged,isAdmin,controller.show)
route.get("/detail/:id",isLogged,isAdmin,controller.detail);

module.exports = route