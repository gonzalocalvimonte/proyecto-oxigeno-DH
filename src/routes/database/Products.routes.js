const express = require('express');
const router = express.Router();
const productsController = require('../../controllers/database/ProductsController');


//Creación
router.get('/crear', productsController.create),

router.get('/guardar', productsController.save),

module.exports = router;