const express = require('express');
const router = express.Router();
const controller = require('../controllers/products.controller');

const {resolve,extname} = require('path')

const validador = require('../validations/products');
const multer = require('multer');
const { diskStorage } = require('multer');
const {existsSync,mkdirSync} = require('fs');

const isLogged = require("../middlewares/userLogged")
const isAdmin = require("../middlewares/userAdmin")

//Multer
const destination = function(req,file,cb){
    let folder = resolve(__dirname,'..', '..','public','images','Uploads','products')
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
router.get('/create', isLogged, controller.create),

router.post('/guardar',upload.any(), validador, controller.save),

//Read

router.get('/',controller.show),

router.get("/:category?", controller.show); //ruta del filtro de la vista de los productos products.ejs*/

router.get('/detalle/:id',controller.detail)


//Update

router.get("/editar/:id",isLogged, controller.edit);

router.put("/actualizar/:id",upload.any(), validador, controller.update)

//Delete
router.delete("/borrar/:id",  isLogged, controller.remove)

module.exports = router;