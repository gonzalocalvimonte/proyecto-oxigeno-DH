const db = require('../database/models/index');
const {resolve} = require('path');
const {unlinkSync} = require('fs');

const controller = {
    login: (req, res) => {
        return res.render("user/login")
    },
    
    register: (req, res) => {
        return res.render("user/register")
    },
    
    save:(req,res) => {
        db.Users.create({
            nombre: req.body.nombre,
            apellido: req.body.apellido,
            password: req.body.password,
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
                    res.cookie('rememberMe', req.body.usuario,{maxAge: 1000 * 60 * 10})
                }
                return res.redirect('/')
            })
    },
    
    logout:(req,res) => {
        delete req.session.user
        res.clearCookie('rememberMe');
        return res.redirect('/')
    },
    
    edit:(req,res) => {
        return res.render('user/editProfile')
    },
    
    update:(req,res) => {
        let todos = all()
        let update = todos.map(user => {
            if (user.id == req.body.id){
            user.nombre = req.body.nombre;
            user.apellido = req.body.apellido;
            user.email = req.body.email;              
            user.domicilio = req.body.domicilio;             
            user.avatar = req.files && req.files.length > 0 ? req.files[0].filename : user.avatar
            }
            return user
        })
        write(update);
        return res.redirect("/user/profile");
    },
            
    delete:(req,res) => {
        let user = one(req.body.id);
        if(user.avatar != 'default.png'){
        let file = resolve(__dirname, '..','..','public','images','Uploads','users',user.avatar)
        unlinkSync(file)
        };
        let todos = all();
        let noEliminados = todos.filter(elemento => elemento.id != req.body.id);
        write(noEliminados)
        delete req.session.user
        /* Destruir la cookie de recordar usuario*/
        res.clearCookie('rememberMe');
        return res.redirect('/')
    },
    
    show:(req,res) => {
        let users = all();
        return res.render('user/usersList',{users});
    },
    
    detail: (req, res) => {
        let usuario = one(req.params.id);
        if(usuario){
        return res.render("user/detailUser", {usuario})
        }
        return res.render("user/detailUser", {usuario:null});
    }
}

module.exports = controller;

