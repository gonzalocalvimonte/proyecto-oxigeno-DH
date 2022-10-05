const { name } = require('ejs');
let db = require ('../../database/models/index')
const {
    validationResult, body
} = require('express-validator');
let categoryController = {
    crear: function (req, res) {
            return res.render("database/creacionCategory");
    },
    guardado: function(req,res) {
        let errors = validationResult(req);
        //if (errors.isEmpty()) {
        /*     let {
            description,
            name
        } = req.body */
            res.send(req.body)
    /* db.categories.create({
          description,
          name
        }) */

        console.log(req.body)
    //}
    },
    listado: function(req, res) {
        db.categories.findAll()
        .then(function(categories){
        res.render('creacionCategory', {categories: categories});
        })
    }
}

module.exports = categoryController