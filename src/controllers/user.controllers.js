const db = require('../database/models/index');
const {join} = require('path');
const {unlinkSync} = require('fs');
const bcryptjs = require('bcryptjs');


const controller = {
    login: (req, res) => {
        return res.render("user/login")
    },
    
    register: (req, res) => {
        return res.render("user/register")
    },
    
    save:(req,res) => {
        let password = req.body.password
        let hash = bcryptjs.hashSync(password, 10)
        db.Users.create({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            password: hash,
            email: req.body.email,
            nacimiento: req.body.nacimiento,
            domicilio: req.body.domicilio,
            avatar: req.files && req.files.length ? req.body.image = req.files[0].filename : req.body.image = "default.png"
        })
        return res.redirect("/user/login")
    },
    
    profile:function(req,res){
        return res.render('user/profile')
    },
    
    access:(req,res) => {
        db.Users.findOne({where:{email:req.body.usuario}})
            .then((user) => {
                req.session.user = user

                if (req.body.rememberMe != undefined){
                    res.cookie('user', req.body.usuario,{maxAge: 1000 * 60 * 10})
                }
                return res.redirect('/')
            })
    },
    
    logout: (req,res) => {
        delete req.session.user
        res.clearCookie('user');
        return res.redirect('/')
    },
    
    edit: (req,res) => {
        return res.render('user/editProfile')
    },
    
    update: (req,res) => {
        db.Users.update({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            email: req.body.email,
            domicilio: req.body.domicilio,
            avatar: req.files && req.files.length ? req.body.image = req.files[0].filename : req.body.image = "default.png"
        },
        {
            where:{
                id : req.params.id
            }
        })
        res.redirect('/user/profile')

    },
            
    delete: (req,res) => {
        if(req.body.avatar != 'default.png'){
            let file = join(__dirname,'../../public/images/Uploads/users/' + req.body.avatar)
            unlinkSync(file)
        }
        db.Users.destroy({
            where: {
                id: req.params.id
            }
        })
        res.redirect('/user/show')
    },
    
    show:(req,res) => {
        db.Users.findAll()
        .then((users) => {
            res.render('user/userslist',{users:users})
        })
    },
    
    detail: (req, res) => {
        db.Users.findByPk(req.params.id)
        .then((user) => {
            if(user){
                return res.render("user/detailUser", {usuario:user})
                }
                return res.render("user/detailUser", {usuario:null});
        })

        

    }
}

module.exports = controller;

