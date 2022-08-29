const {all,one,write,generate} = require('../models/products.model')
const {resolve} = require('path')
const {unlinkSync} = require('fs')


const controller = {
    index: (req, res) =>{
        let products = all();
        if(req.params.category){
            products = products.filter(e => e.category == req.params.category);
            return res.render('products/products',{products});
        }
        return res.render('products/products',{products});
    },
    category:(req, res) =>{
        let products = all();
        if(req.params.category){
            products = products.filter(e => e.category == req.params.category);
            return res.render('products/products',{products});
        }
        return res.render('products/products',{products});
    },
    detail: (req, res) => {
        let product = one(req.params.id);
        if(product){
            return res.render("products/detail", {product})
        }
        return res.render("products/detail", {product:null});
    },
    create: (req, res) =>{
        return res.render('products/create');
    },
    save: (req, res) =>{
        if(req.files && req.files.length > 0){
            req.body.image = req.files[0].filename
        }else{
            req.body.image ='default.png'
        }
        let nuevo = generate(req.body)
        let todos = all()
        todos.push(nuevo)
        write(todos)
        return res.redirect('/products')
    },
    edit: (req, res) => {
        let product = one(req.params.id);
        return res.render('products/edit', {product});
    },
    update: (req, res) => {
        let todos = all()
        let update = todos.map(product => {
            if (product.sku == req.body.sku){
                product.name = req.body.name;
                product.price = parseInt(req.body.price);
                product.description = req.body.description;
                product.category = req.body.category;
                product.image = req.files && req.files.length > 0 ? req.files[0].filename : product.image
            }
            return product
        })
        write(update);
        return res.redirect("/products/detail/" + req.body.sku);
    },
    remove: (req, res) => {
        let product = one(req.body.sku)
        if(product.image != 'default.png'){
            let file = resolve(__dirname, '..','..','public','images','Uploads','products',product.image)
            unlinkSync(file)
        }
        let todos = all();
        let noEliminados = todos.filter(elemento => elemento.sku != req.body.sku);
        write(noEliminados)
        return res.redirect('/products')
    }
}

module.exports = controller