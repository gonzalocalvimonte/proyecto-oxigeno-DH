let db = require('../../../src/database/models/index')


let ProductsController = {

crear: function (req, res) {
    db.categories.findAll()
        .then(function(categories){
            return res.render('listadoCategories', {categories: categories});



        })


}
}

module.exports = ProductsController;
