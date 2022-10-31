const { body } = require("express-validator");

let name = body('name').notEmpty().withMessage('Nombre requerido').bail().isLength({min:5}).withMessage('Mínimo 5 caracteres');

let price = body('price').notEmpty().withMessage('Precio requerido');

let description = body('description').notEmpty().withMessage('Descripción requerida').bail().isLength({min:20}).withMessage('Mínimo 20 caracteres');

// let image = body('image').isEmpty().contains('jpg').withMessage('Imagen no válida');

let validaciones = [ name, price, description];

module.exports = validaciones;
