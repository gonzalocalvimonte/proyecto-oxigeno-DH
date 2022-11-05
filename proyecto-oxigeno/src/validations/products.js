const { body } = require("express-validator");

let name = body('name').notEmpty().withMessage('Nombre requerido').bail().isLength({min:5}).withMessage('Mínimo 5 caracteres');

let price = body('price').notEmpty().withMessage('Precio requerido');

let description = body('description').notEmpty().withMessage('Descripción requerida').bail().isLength({min:20}).withMessage('Mínimo 20 caracteres');

//let image = body('image').isEmpty().withMessage('Imagen no válida').bail();

let image = body('image').isEmpty().bail().custom((v, {req}) => {
  if (typeof req.files[0] != "undefined" && req.files[0] != null ) {
    let extension = req.files[0].filename.split('.').pop().toUpperCase();
    let imgTypes = [ "JPG", "JPEG", "PNG", "GIF"];
    if ( imgTypes.indexOf(extension) < 0 ){
      return false; 
    }
  }
    return true;
  }).withMessage("El archivo debe ser una imagen");

let validaciones = [ name, price, description, image];

module.exports = validaciones;
