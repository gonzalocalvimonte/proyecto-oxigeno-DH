const {Router} = require('express')
const router = Router()
const {resolve,extname} = require('path')
//
const controller = require('../controllers/user.controllers')
const isLogged = require('../middlewares/userLogged')
const isAdmin = require('../middlewares/userAdmin')
// Validaciones
const validationsRegUser = require('../validations/register');
const validationsLogin = require('../validations/login');

//Multer
const multer = require('multer');
const { diskStorage } = require('multer');
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
const upload = multer({storage:diskStorage({destination,filename})})

//Create
router.get('/register', controller.register);
router.post('/save', upload.any(), validationsRegUser, controller.save);

//Read
router.get('/login', controller.login);
router.get('/profile', isLogged, controller.profile)
router.post('/access',  validationsLogin, controller.access)
router.get('/logout', controller.logout);
router.get('/show', isLogged,isAdmin,controller.show) //Admin Functions
router.get("/detail/:id", isLogged, isAdmin, controller.detail); //Admin Functions

//Update
router.get('/profile/edit/:id', isLogged,controller.edit)
router.put('/update/:id', upload.any(), controller.update)

//Delete
router.delete('/delete/:id', controller.delete)

module.exports = router