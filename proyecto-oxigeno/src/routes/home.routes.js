const {Router} = require("express");
const router = Router();
const homeController = require("../controllers/home.controller");

router.get("/", homeController.home);
router.get("/who", homeController.who);
// route.get("/contact", homeController.contact); CAMBIOS  ES  LA ESTRATEGIA, COMENTO POR LAS DUDAS
router.get("/cart", homeController.cart);

module.exports = router;

