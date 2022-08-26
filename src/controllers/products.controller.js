const {all,one,write,generate} = require('../models/products.model')



const controller = {
    index: (req, res) =>{
        let products = all();
        if(req.params.categoria){
            products = products.filter(e => e.category == req.params.categoria);
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
            req.body.image = req.files[0].filename;
        }else{
            req.body.image ='default.png';
        }
        let nuevo = generate(req.body);
        let todos = all();
        todos.push(nuevo);
        write(todos);
        return res.redirect('/products/products');
    },
    edit: (req, res) => {
        let product = one(req.params.id);
        return res.render('products/edit', {product});
    },
    update: (req, res) => {
        let all = all();
        let update = all.map(product => {
            if (product.sku == req.body.sku){
                product.name = req.body.name;
                product.price = parseInt(req.body.price);
                product.description = req.body.description;
                product.category = req.body.category;
                /* product.image = req.files && req.files.length > 0 ? req.files[0].filename : product.image */
            }
            return res.redirect('/products/detail');
        })
        write(update);
        return res.redirect("/products/");
    },
    delete: (req, res) => {
    }
}

module.exports = controller