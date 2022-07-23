const express = require("express");
const server = express();
const port = process.env.PORT || 3000;
const start = () => (console.log("Starting server..."));
server.listen(port, start());

const {join} = require("path");
const statics = express.static(join(__dirname, "../public"));
server.use(statics);

server.get("/", (req, res) => res.sendFile(join(__dirname, "views/index.html")))
server.get("/login", (req, res) => res.sendFile(join(__dirname, "views/login.html")))
server.get("/register", (req, res) => res.sendFile(join(__dirname, "views/register.html")))
server.get("/cart", (req, res) => res.sendFile(join(__dirname, "views/cart.html")))
server.get("/products", (req, res) => res.sendFile(join(__dirname, "views/products.html")))