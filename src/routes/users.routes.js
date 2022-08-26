const {Router} = require('express')
const route = Router()
const controller = require('../controllers/user.controllers');


// const destination = function(req,file,cb){
  //  let folder = resolve(__dirname, '..', '..', 'Uploads', 'products')

  //  if(!existsSync(folder)){
 //       mkdirSync(folder)
   // }
  ////  return cb(null,folder)
// }

//const filename = function(req,file,cb){
  //  let name = file.fieldname + '-' +  Date.now() + extname(file.originalname)
   // return cb(null,name)
///}
//const multer = require('multer');
//const { diskStorage } = require('multer');
//const upload = multer({storage:multer.diskStorage({destination,filename})})
route.get('/login', controller.login);
route.get('/register', controller.register);
route.get('/register', controller.create);
route.post('/register/save', controller.save)

module.exports = route