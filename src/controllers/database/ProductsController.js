let db = require('../../database/models/index')


let ProductsController = {

create: function (req, res) {
    db.categories.findAll()
        .then(function(categories){
            return res.render("database/listadoCategories", {categories: categories});
        })
},
save: function(req,res) {
    db.Products.create({
        name:req.body.name,
        price:req.body.price,
        description:req.body.description,
        image:req.body.image,
        category:req.body.category
    })
}
}

module.exports = ProductsController;
