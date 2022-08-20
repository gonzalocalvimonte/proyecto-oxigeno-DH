//express
const express = require("express");
const server = express();
const {join} = require("path");
const method = require('method-override')
//server module
const {port, start} = require("./modules/server");
server.listen(port, start());
//statics
const statics = express.static(join(__dirname, "../public"));
server.use(statics);
//ejs
server.set('views', './src/views');
server.set('view engine', 'ejs');
//rutas
server.use(express.urlencoded({extended:true}))

server.use(method('m'))

server.use(require('./routes/products.routes'))
server.use(require('./routes/users.routes'))

server.get("/", (req, res) => res.render('index'));
server.get("/login", (req, res) => res.render('login'));
server.get("/register", (req, res) => res.render('register'));
server.get("/cart", (req, res) => res.render('cart'));
server.get("/products", (req, res) => res.render('products'));
