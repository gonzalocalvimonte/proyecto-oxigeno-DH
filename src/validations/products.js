const { body } = require("express-validator");

let name = body('name').notEmpty().withMessage('Nombre requerido').bail().isLength({min:5}).withMessage('Mínimo 5 caracteres');

let price = body('price').notEmpty().withMessage('Precio requerido');

let description = body('description').notEmpty().withMessage('Descripción requerida').bail().isLength({min:20}).withMessage('Mínimo 20 caracteres');

//let image = body('image').isEmpty().withMessage('Imagen no válida').bail();

let image = body('image').isEmpty().bail().custom((value) => {
    console.log(value);
    let extension = value.value.split('.').pop().toUpperCase();
    let imgTypes = [ "JPG", "JPEG", "PNG", "GIF"];
    if ( imgTypes.indexOf(extension) < 0 ){
      throw new Error('El archivo debe ser una imagen');
    }
    return true;
  });

let validaciones = [ name, price, description, image];

module.exports = validaciones;
