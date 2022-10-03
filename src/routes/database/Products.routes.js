const express = require('express');
const router = express.Router();
const productsController = require('../../../src/controllers/database/ProductsController');




//Creación
router.get('/crear', productsController.crear),


module.exports = router;