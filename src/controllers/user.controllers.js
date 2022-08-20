const {all,write,generate} = require('../models/users.models')



const controller = {
    
    // index: function(req,res){
       // let products = all();
       // if(req.params.categoria){
      //      products = products.filter(e => e.category == req.params.categoria)
      //      return res.render('productsList',{products})
    //    }
// return res.render('productsList',{products})
    // }, Lo comento porque no es necesario mostrar la lista de usuarios

    create:function(req,res){
        return res.render('register')
    },
    save:function(req,res){

        // if(req.files && req.files.length > 0){
         //   req.body.image = req.files[0].filename 
       // }else{
         //   req.body.image ='default.png'
       // } EN CASO QUE QUERRAMOS AGREGAR FOTO DE USUARIO.

        let nuevo = generate(req.body)
        let todos = all()
        todos.push(nuevo)
        write(todos)
        return res.redirect('/login')
    }
}

module.exports = controller