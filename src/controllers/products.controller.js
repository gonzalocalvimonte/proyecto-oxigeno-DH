const {all,write,generate} = require('../models/products.model')



const controller = {
    
    index: function(req,res){
        let products = all();
        if(req.params.categoria){
            products = products.filter(e => e.category == req.params.categoria)
            return res.render('productsList',{products})
        }
        return res.render('productsList',{products})
    },

    create:function(req,res){
        return res.render('agregarProd')
    },
    save:function(req,res){

        if(req.files && req.files.length > 0){
            req.body.image = req.files[0].filename 
        }else{
            req.body.image ='default.png'
        }

        let nuevo = generate(req.body)
        let todos = all()
        todos.push(nuevo)
        write(todos)
        return res.redirect('/products/list')
    }
}

module.exports = controller