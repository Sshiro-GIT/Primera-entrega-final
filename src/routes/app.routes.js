const express = require("express");
const router = express.Router();
const productRoute = require("./products/products.routes.js");
const carritoRoute = require("./carrito/carrito.routes.js");

router.use("/productos", productRoute);
router.use("/carrito", carritoRoute);

module.exports = router;
