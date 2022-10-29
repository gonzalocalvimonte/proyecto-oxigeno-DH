const { body } = require("express-validator");


let name = body('name').notEmpty().withMessage('Nombre requerido');
let apellido = body('price').notEmpty().withMessage('Precio requerido');
let email = body('description').notEmpty().withMessage('Descripción requerida')
let password = body('image').notEmpty().withMessage('Imagen requerida');

let validaciones = [ name, price, description, image];

module.exports = validaciones;
