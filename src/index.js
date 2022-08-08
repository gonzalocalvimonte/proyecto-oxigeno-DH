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

server.get("/", (req, res) => res.render('login'));

server.get("/", (req, res) => res.render('register'));

server.get("/", (req, res) => res.render('cart'));

server.get("/", (req, res) => res.render('products'));

server.get("/", (req, res) => res.render('agregarProd'));