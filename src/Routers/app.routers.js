const express = require("express");
const cartRoute = require("./cart/cart.routes,js");
const productsRoute = require("./products/products.routes.js");
const usersRoute = require("./users/users.routes.js");
const authorizer = require("../middlewares/authorizer.js");
const logger = require("../middlewares/logger");
const router = express.Router();

const middleware = [logger];

router.use([middleware]);
router.use("/products", productsRoute);
router.use("/users", usersRoute);
router.use("/cart", cartRoute);

module.exports = router;
