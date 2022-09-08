const {all,write,generate} = require('../models/users.models')



const controller = {
  login: (req, res) => {
    return res.render("user/login")
  },
  register: (req, res) => {
    return res.render("user/register")
  },

 /*  index: function(req,res){
   let products = all();
       if(req.params.categoria){
       products = products.filter(e => e.category == req.params.categoria)
       return res.render('productsList',{products})
        }
    return res.render('productsList',{products})
    }, */ 

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
      return res.render('home/indexOn')
  },
  logout:(req,res) => {
    delete req.session.user
    res.cookie('user', null,{maxAge: -1});
    return res.redirect('/')
}
}

module.exports = controller