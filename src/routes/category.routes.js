const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/category.controllers')

// Creación
router.get('/crear', categoryController.crear);
router.post('/guardado', categoryController.guardado);

// Lectura
router.get('/show', categoryController.listado);

// Detalle
router.get('/:id', categoryController.detalle);

// Actualización
router.get('/editar/:id', categoryController.editar);
router.post('/editar/:id', categoryController.actualizar);

// Borrado
router.post('/borrar/:id', categoryController.borrar);

module.exports = router