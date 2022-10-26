const { body } = require("express-validator");


let nombre = body('nombre').notEmpty().withMessage('Nombre requerido');
let apellido = body('apellido').notEmpty().withMessage('Apellido requerido');
let email = body('email').notEmpty().withMessage('Email requerido').isEmail().withMessage('Email no válido');
let password = body('password').notEmpty().withMessage('Password requerida').isLength({min:8});

let validaciones = [ nombre, apellido, email, password ];

module.exports = validaciones;
