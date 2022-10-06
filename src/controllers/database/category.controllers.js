const { name } = require('ejs');
let db = require ('../../database/models/index')
const {
    validationResult
} = require('express-validator');
let categoryController = {
    crear: function (req, res) {
            return res.render("database/creacionCategoria");
    },
    guardado: function(req,res) {
    db.categories.create({
          description: req.body.description,
          name: req.body.category
        })
        .then(() => res.redirect('/dbCategory/listado'))
    },
    listado: function(req, res) {
        db.categories.findAll()
        .then(function(categories){
        res.render('database/listaDeCategorias', {categories: categories});
        })
    },
    detalle: function(req, res) {
        db.categories.findByPk(req.params.id)
        .then(function(categories){
            res.render('database/detalleCategoria', {categories: categories} )
        })
    },
    editar: function(req, res) {
        let pedidoCategoria = db.categories.findByPk(req.params.id);

        Promise.all([pedidoCategoria])
            .then(function([categories]){
                res.render('database/editarCategoria', {categories: categories})
            })
    },
    actualizar: function(req, res) {
            db.categories.update({
                  description: req.body.description,
                  name: req.body.category
                }, {
                    where: {
                        id: req.params.id
                    }
                })
        .then(() => res.redirect('/dbCategory/' + req.params.id))
    },
    borrar: function(req, res) {
        db.categories.destroy({
            where:{
                id: req.params.id
            }
        })
        .then(() => res.redirect('/dbCategory/listado'))
    }
}

module.exports = categoryController