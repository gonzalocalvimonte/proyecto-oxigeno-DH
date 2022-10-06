let express = require('express');
let router = express.Router();
let categoryController = require('../../controllers/database/category.controllers')

// Creación

router.get('/crear', categoryController.crear);

router.post('/guardado', categoryController.guardado);

// Lectura

router.get('/listado', categoryController.listado);

// Detalle

router.get('/:id', categoryController.detalle);

// Actualización

router.get('/editar/:id', categoryController.editar);
router.post('/editar/:id', categoryController.actualizar);

// Borrado

router.post('/borrar/:id', categoryController.borrar);

module.exports = router