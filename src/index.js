const express = require("express");
const server = express();
const {join} = require("path");
const port = process.env.PORT || 3000;
const start = () => (console.log("Starting server..."));
server.listen(port, start());

const statics = express.static(join(__dirname, "../public"));
server.use(statics);

server.set('views', './src/views');

server.set('view engine', 'ejs');


server.get("/", (req, res) => res.render('index'));

server.get("/login", (req, res) => res.render('login'));

server.get("/register", (req, res) => res.render('register'));

server.get("/cart", (req, res) => res.render('cart'));

server.get("/products", (req, res) => res.render('products'));

server.get("/addProduct", (req, res) => res.render('agregarProd'));