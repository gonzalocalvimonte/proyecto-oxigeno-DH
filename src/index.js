//dependencies
const express = require("express");
const server = express();
const {join} = require("path");
const method = require('method-override')
const session = require('express-session')
const cookie = require('cookie-parser')

//server
const {port, start} = require("./modules/server");
server.listen(port, start());

//ejs
server.set("views", join(__dirname, "./views"));
server.set("view engine", "ejs");

//statics
const statics = require("./modules/static");
server.use(statics(join(__dirname, "../public")));

//method override
server.use(method('m'))

server.use(express.urlencoded({extended:true}));

//session
server.use(session({
    secret:'proyecto-oxigeno',
    resave:false,
    saveUninitialized:false,
}))
server.use(cookie());
server.use(require("./middlewares/user"));

//rutas
server.use(require('./routes/home.routes'));
server.use("/products", require('./routes/products.routes'));
server.use("/user", require('./routes/users.routes'));
server.use('/category', require('./routes/category.routes'));

//api
server.use("/api/", require('./routes/api/cart.routes'))
server.use("/api", require('./routes/api/products.api.routes'));

server.use(express.json())