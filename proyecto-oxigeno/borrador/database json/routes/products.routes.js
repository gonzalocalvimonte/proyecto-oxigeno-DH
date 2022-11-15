const {Router} = require('express')
const route = Router()
const {resolve,extname} = require('path')

const multer = require('multer');
const { diskStorage } = require('multer');
const {existsSync,mkdirSync} = require('fs');

const controller = require('../controllers/products.controller');
const isLogged = require("../middlewares/userLogged")
const isAdmin = require("../middlewares/userAdmin")

//Multer
const destination = function(req,file,cb){
    let folder = resolve(__dirname, '..', '..','public','images','Uploads','products')
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

//CRUD
//Crud CREATE
route.get("/create", isLogged, isAdmin, controller.create);
route.post("/save", upload.any(), controller.save);
//cRud READ
route.get('/', controller.index);
route.get("/:category?", controller.index);
route.get("/detail/:id", controller.detail);
//crUd UPDATE
route.get("/edit/:id", isLogged, isAdmin, controller.edit);
route.put("/update",upload.any(), controller.update)
//cruD DELETE
route.delete("/delete", isLogged, isAdmin, controller.remove)


module.exports = route