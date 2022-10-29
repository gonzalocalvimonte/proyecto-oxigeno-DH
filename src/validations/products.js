const { body } = require("express-validator");


let name = body('name').notEmpty().withMessage('Nombre requerido');
let price = body('price').notEmpty().withMessage('Precio requerido');
let description = body('description').notEmpty().withMessage('Descripción requerida')
let image = body('image').notEmpty().withMessage('Imagen requerida');

let validaciones = [ name, price, description, image];

module.exports = validaciones;
