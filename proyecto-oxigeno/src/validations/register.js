const { body } = require("express-validator");


let nombre = body('nombre').notEmpty().withMessage('Nombre requerido');
let apellido = body('apellido').notEmpty().withMessage('Apellido requerido');
let email = body('email').notEmpty().withMessage('Email requerido').bail().isEmail().withMessage('Email no válido');
let password = body('password').notEmpty().withMessage('Password requerida').bail().isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres');
let avatar = body('avatar').isEmpty().bail()
  .custom((v, {req}) => {
    if (typeof req.files[0] != "undefined" && req.files[0] != null ) {
      let extension = req.files[0].filename.split('.').pop().toUpperCase();
      let imgTypes = [ "JPG", "JPEG", "PNG", "GIF"];
      if ( imgTypes.indexOf(extension) < 0 ){
        return false; 
      }
    }
    return true;
  }).withMessage("El archivo debe ser una imagen");

let validationsRegUser = [ nombre, apellido, email, password, avatar ];

module.exports = validationsRegUser;