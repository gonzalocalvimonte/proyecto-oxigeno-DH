const {Router} = require("express");
const router = Router();
const homeController = require("../controllers/home.controller");

//home
router.get("/", homeController.home);
//quienes somos
router.get("/who", homeController.who);
//carrito
router.get("/cart", homeController.cart);

module.exports = router;

