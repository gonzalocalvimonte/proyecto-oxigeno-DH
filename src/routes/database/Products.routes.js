const express = require('express');
const router = express.Router();
const productsController = require('../../controllers/database/ProductsController');


//Creación
router.get('/crear', productsController.create),

router.post('/guardar', productsController.save),

module.exports = router;