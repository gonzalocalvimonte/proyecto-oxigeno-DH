const {Router} = require('express')
const router = Router()
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

router.get('/login', controller.login);
router.get('/register', controller.register);
router.post('/save', upload.any(), controller.save);
router.post('/access', controller.access)
router.get('/logout', controller.logout);
router.get('/profile', isLogged, controller.profile)
router.get('/profile/edit/:id', isLogged,controller.edit)
router.put('/update/:id', upload.any(), controller.update)
router.delete('/delete/:id', controller.delete)
router.get('/show', isLogged,isAdmin,controller.show)
router.get("/detail/:id", isLogged, isAdmin, controller.detail);

module.exports = router