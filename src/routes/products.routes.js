const {Router} = require('express')
const route = Router()
const controller = require('../controllers/products.controller');

//Multer
const destination = function(req,file,cb){
    let folder = resolve(__dirname, '..', '..', 'Uploads', 'products')

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
const upload = multer({storage:multer.diskStorage({destination,filename})})

//CRUD

//C:Create
//Products GET con controller index(para mostrar listado de productos)
route.get('/products/list', controller.index);

//Products/create GET con controller create(muestra formulario para agregar producto a la lista)
route.get('/products/add',upload.any(), controller.create);

//Productos POST con controller save(accion del formulario para guardar el producto creado a la lista de productos)
route.post('/products/save', controller.save)

module.exports = route