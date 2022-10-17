const express = require("express");
const router = express.Router();
const carritoController = require("../../controllers/carritoController.js");

router.get("/", carritoController.getAllCarrito);

router.get("/:id/productos", carritoController.getCarritoById);

router.put("/:id", carritoController.updateCarrito);

router.post("/", carritoController.createNewCarrito);
router.post("/:id/productos", carritoController.addProduct);

router.delete("/:id", carritoController.deleteCarrito);
router.delete("/:id/productos/:id_prod", carritoController.deleteProduct);

module.exports = router;
