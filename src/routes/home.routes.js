const {Router} = require("express");
const route = Router();
const homeController = require("../controllers/home.controller");

route.get("/", homeController.home);
route.get("/who", homeController.who);
// route.get("/contact", homeController.contact); CAMBIOS  ES  LA ESTRATEGIA, COMENTO POR LAS DUDAS
route.get("/cart", homeController.cart);

module.exports = route;

