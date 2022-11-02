const db = require('../database/models/index');
const bcryptjs = require('bcryptjs');
const { body } = require("express-validator");
const { register } = require('../controllers/user.controllers');

let usuario = body('usuario').notEmpty().withMessage('Usuario requerido').bail().isEmail().withMessage('Email no válido').bail().custom( async (value, {req}) => {
     let user = await db.Users.findOne({where:{email:value}});
     if ( user ){         
        return true 
      } 
      else { throw new Error("No existe el usuario") }});


let password = body('password').notEmpty().withMessage('Password requerida').custom(async (value, { req }) => {
  
    let user = await db.Users.findOne({where:{email:req.body.usuario}});
    clearPassword = value;
    if ( user != null ) {
        console.log(user.password);
        if ( ! bcryptjs.compareSync(clearPassword, user.password)) {
            throw new Error("Contraseña incorrecta");
        }
    }
    return true;
    }).withMessage("Contraseña incorrecta");

let validationsLogin = [ usuario, password ];

module.exports = validationsLogin;