const express = require("express");
const router = express.Router();

const controller = require("../../controllers/api/cart.api");

router.get("/product/:id", controller.one);
router.get("/products", controller.all);

module.exports = router;