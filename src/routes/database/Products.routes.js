const express = require('express');
const router = express.Router();
const productsController = require('../../controllers/database/ProductsController');

const {resolve,extname} = require('path')

const multer = require('multer');
const { diskStorage } = require('multer');
const {existsSync,mkdirSync} = require('fs');

const isLogged = require("../../middlewares/userLogged")
const isAdmin = require("../../middlewares/userAdmin")

//Multer
const destination = function(req,file,cb){
    let folder = resolve(__dirname,'..', '..', '..','public','images','Uploads','products')
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
router.get('/crear', productsController.create),

router.post('/guardar',upload.any(), productsController.save),

//Read

router.get('/lista',productsController.show),

router.get('/detalle/:id',productsController.detail)

//Update

router.get("/editar/:id", productsController.edit);

router.put("/actualizar/:id",upload.any(), productsController.update)

//Delete
router.delete("/borrar/:id", productsController.remove)

module.exports = router;