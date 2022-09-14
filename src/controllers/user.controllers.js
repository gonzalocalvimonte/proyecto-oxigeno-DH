const {all,write,generate,one} = require('../models/users.models');
const bcryptjs = require('bcryptjs');
const {resolve} = require('path');
const {unlinkSync} = require('fs');

const controller = {
  login: (req, res) => {
    return res.render("user/login")
  },
  register: (req, res) => {
    return res.render("user/register")
  },

    create:function(req,res){
        return res.render('register')
    },
    save:function(req,res){

        if(req.files && req.files.length > 0){
            req.body.avatar = req.files[0].filename 
        }else{
            req.body.avatar ='default.png'
        } 
        let nuevo = generate(req.body)
        let todos = all()
        todos.push(nuevo)
        write(todos)
        return res.redirect("/user/login")
    },
    profile:function(req,res){
      return res.render('user/profile')
    },
    access:(req,res) => {
      let list = all();
      req.session.user = list.find(user => user.email == req.body.usuario);
      
      /* Recordarme */
      /* if (req.body.rememberMe != undefined){
          res.cookie('rememberMe', req.body.usuario,{maxAge: 1000 * 60 * 10})
      } */

      return res.redirect('/')
  },
  logout:(req,res) => {
    delete req.session.user
    /* Destruir la cookie de recordar usuario*/
   /*  res.clearCookie('rememberMe'); */
    return res.redirect('/')
},
edit:(req,res) => {
  return res.render('user/editProfile')
},
update:(req,res) => {
  let todos = all()
        let update = todos.map(user => {
            if (user.id == req.body.id){
                user.nombre = req.body.nombre;
                user.apellido = req.body.apellido;
                user.email = req.body.email;              
                user.domicilio = req.body.domicilio;             
                user.avatar = req.files && req.files.length > 0 ? req.files[0].filename : user.avatar
            }
            return user
          })
          write(update);
          return res.redirect("/user/profile");
        },
          
delete:(req,res) => {
  let user = one(req.body.id)
  if(user.avatar != 'default.png'){
      let file = resolve(__dirname, '..','..','public','images','Uploads','users',user.avatar)
      unlinkSync(file)
  }
  let todos = all();
  let noEliminados = todos.filter(elemento => elemento.id != req.body.id);
  write(noEliminados)

  delete req.session.user
  /* Destruir la cookie de recordar usuario*/
  res.clearCookie('rememberMe');
  return res.redirect('/')

 /* if (user) { 
    if (user.email.includes("o2admin")) {
      let users = all();
      return  res.render('user/usersList',{users});
     } else {
     }
     */
},
show:(req,res) => {
  let users = all();
  return res.render('user/usersList',{users});

},
detail: (req, res) => {
  let usuario = one(req.params.id);
  if(usuario){
      return res.render("user/detailUser", {usuario})
  }
  return res.render("user/detailUser", {usuario:null});
}
}

module.exports = controller