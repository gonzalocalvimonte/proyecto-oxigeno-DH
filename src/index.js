//dependencias
const express = require("express");
const server = express();
const {join} = require("path");
const method = require('method-override')
const session = require('express-session')
const cookie = require('cookie-parser')
//server module
const statics = require("./modules/static");
const {port, start} = require("./modules/server");
server.listen(port, start());
//ejs
server.set("views", join(__dirname, "./views"));
server.set("view engine", "ejs");
//server uses
server.use(statics(join(__dirname, "../public")));
server.use(express.urlencoded({extended:true}));
server.use(method('m'))

// Middleware para rememberMe
const rememberMe = require ('./middlewares/rememberme');
server.use(rememberMe)

//session
server.use(session({
    secret:'proyecto-oxigeno',
    resave:false,
    saveUninitialized:true,
}))
//rutas
server.use(require('./routes/home.routes'));
server.use("/products", require('./routes/products.routes'));
server.use("/user", require('./routes/users.routes'));
