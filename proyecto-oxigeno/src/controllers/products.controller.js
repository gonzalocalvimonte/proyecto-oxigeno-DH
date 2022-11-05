let db = require('../database/models/index')
const { Op } = require('sequelize');
const {resolve} = require('path')
const {unlinkSync} = require('fs')
const { validationResult } = require("express-validator");


let ProductsController = {

    create: function (req, res) {
        db.categories.findAll()
            .then(function(categories){
                return res.render("products/create", {categories: categories});
            })
    },

    save: async function(req,res) {
        let categorias = await db.categories.findAll()
        // Validaciones
        const result = validationResult(req);
        if ( !result.isEmpty() ){
            return res.render ("products/create",
            { 
                style: 'edit',
                errores: result.mapped(),
                data: req.body, 
                product: req.body,
                categories: categorias,
                
            })
        }
        // Fin validaciones, se continúa si pasaron ok
        db.Products.create({
            name:req.body.name,
            price:req.body.price,
            description:req.body.description,
            image:req.files && req.files.length? req.body.image = req.files[0].filename : req.body.image = 'default.png',
            category_id:req.body.category
        })
        res.redirect("/products")
    },

    search: async function(req,res){
        console.log(req.query.q)
        let query = null
        let productos = await db.Products.findAll({
            where:{
                name:{
                    [Op.like] : '%' + req.query.q + '%'
                }
            }
        })
        let categories = await db.categories.findAll()
        return res.render("products/products" , {productos,categories,query})
    },

    show: async function(req,res){
        let productos = await db.Products.findAll()
        let categories = await db.categories.findAll()
        let query = 0

        if(req.query.category){
            productos = productos.filter(e => e.category_id == req.query.category);
            query = req.query.category
        } return res.render("products/products" , {productos,categories,query})
    },

    detail: function(req,res){
        db.Products.findByPk(req.params.id)
        .then(function(producto){
            res.render("products/detail",{product:producto})
        })
    },

    edit:function(req,res){
        let pedidoProducto = db.Products.findByPk(req.params.id,{
            attributes:['id','name','description','price','image','category_id']
        });
        let pedidoCategoria = db.categories.findAll({
            attributes:['name','description','id']});
        
            Promise.all([pedidoProducto, pedidoCategoria])
            .then(function([producto,categories]){
            res.render("products/edit",{product:producto,categories:categories})
        })
    },

    update:async function(req,res){
        // Validaciones
        let pedidoCategoria = await db.categories.findAll({
            attributes:['name','description','id']});
        const result = validationResult(req);
        if ( !result.isEmpty() ){
            return res.render ("products/edit",
            { 
                style: 'edit',
                errores: result.mapped(),
                data: req.body, 
                product: req.body,
                categories: pedidoCategoria
            })
        }
        // Fin validaciones, se continúa si pasaron ok
        db.Products.update({
            name:req.body.name,
            price:req.body.price,
            description:req.body.description,
            image:req.files && req.files.length > 0 ? req.body.image = req.files[0].filename : req.body.oldImage ,
            category_id:req.body.category
        },
        {
            where:{
                id : req.params.id
            }
        })
        res.redirect('/products/detalle/' + req.params.id)
    },

    remove:function(req,res){
        if(req.body.image != 'default.png'){
            let file = resolve(__dirname,'..','..','public','images','Uploads','products',req.body.image)
            unlinkSync(file)
        }
        db.Products.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/products')
    }
}

module.exports = ProductsController;