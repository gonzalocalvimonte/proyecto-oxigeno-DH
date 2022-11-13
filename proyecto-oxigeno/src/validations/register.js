const db = require('../database/models/index');
const { body } = require("express-validator");


let nombre = body('nombre').notEmpty().withMessage('Nombre requerido').bail().isLength({min:2}).withMessage('El nombre debe tener al menos 2 caracteres');
let apellido = body('apellido').notEmpty().withMessage('Apellido requerido').bail().isLength({min:2}).withMessage('El apellido debe tener al menos 2 caracteres');;
let email = body('email').notEmpty().withMessage('Email requerido').bail().isEmail().withMessage('Email no válido').bail().custom( async (value, {req}) => {
  let user = await db.Users.findOne({where:{email:value}});
  if ( ! user ){         
      return true 
  } 
  else { throw new Error("Ese email ya está registrado") }});

let password = body('password').notEmpty().withMessage('Password requerida').bail().isLength({min:8}).withMessage('La contraseña debe tener al menos 8 caracteres').isStrongPassword({minLength: 6, minLowercase: 1, minUppercase: 1, minNumbers: 1, minSymbols: 1 }).withMessage('La contraseña debe tener letras mayúsculas, minúsculas, un número y un carácter especial');
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


  let nacimiento = body('nacimiento').notEmpty().withMessage('Fecha de nacimiento requerida');

  let domicilio = body('domicilio').notEmpty().withMessage('Domicilio requerido')
let validationsRegUser = [ nombre, apellido, email, password, avatar, nacimiento, domicilio ];

module.exports = validationsRegUser;
