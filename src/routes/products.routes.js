const {Router} = require('express')
const route = Router()
const controller = require('../controllers/products.controller');
const {resolve,extname} = require('path')

//Multer
const {existsSync,mkdirSync} = require('fs');
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
const multer = require('multer');
const { diskStorage } = require('multer');
const upload = multer({storage:diskStorage({destination,filename})})

//CRUD
//Crud CREATE
route.get("/create", controller.create);
route.post("/save", upload.any(), controller.save);
//cRud READ
route.get('/', controller.index);
route.get("/:category?", controller.index);
route.get("/detail/:id", controller.detail);
//crUd UPDATE
route.get("/edit/:id", controller.edit);
route.put("/update",upload.any(), controller.update)
//cruD DELETE
route.delete("/delete", controller.remove)


module.exports = route