const {all,write,generate} = require('../models/users.models')



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
      res.cookie('user', req.body.email,{maxAge: 1000 * 60 * 3});
      let list = all();
      req.session.user = list.find(user => user.email == req.body.email);

      /* Recordarme */
      if (req.body.rememberMe != undefined){
          res.cookie('rememberMe', req.body.usuario,{maxAge: 1000 * 60 * 10})
      }

      return res.render('home/indexOn')
  },
  logout:(req,res) => {
    delete req.session.user
    
    /* Destruir la cookie de recordar usuario*/
    res.clearCookie('rememberMe');
    return res.redirect('/')
}
}

module.exports = controller