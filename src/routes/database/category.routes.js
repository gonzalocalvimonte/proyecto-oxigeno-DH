let express = require('express');
let router = express.Router();
let categoryController = require('../../controllers/database/category.controllers')

// Crear
router.get('/crear', categoryController.crear);

router.post('/guardado', categoryController.guardado);
//read
router.get('/listado', categoryController.listado)

module.exports = router