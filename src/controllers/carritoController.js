const { v4: uuid } = require("uuid");
const carritoService = require("../services/carritoService.js");

const getAllCarrito = (req, res) => {
  try {
    const allCarritos = carritoService.getAllCarrito();
    res.send({ status: "OK", data: allCarritos });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const getCarritoById = (req, res) => {
  const {
    params: { id },
  } = req;
  if (!id) {
    res.status(400).send({
      status: "FAILED",
      data: { error: "El parámetro ':id' no puede estar vacio" },
    });
  }
  try {
    const carrito = carritoService.getCarritoById(id);
    res.send({ status: "OK", data: carrito });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const createNewCarrito = (req, res) => {
  const { productos } = req.body;
  if (!productos) {
    res.status(401).json({
      status: "False",
      result: "Producto no cumple con el formato requerido!",
    });
  }

  const newCarrito = {
    id: uuid(),
    timestamp: Date.now(),
    productos,
  };
  try {
    const createdCarrito = carritoService.createNewCarrito(newCarrito);
    res.status(201).send({ status: "ok", data: createdCarrito });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const updateCarrito = (req, res) => {
  const {
    body,
    params: { id },
  } = req;

  if (!id) {
    req.status(400).send({
      status: "FAILED",
      data: { error: "El parámetro ':id' no puede estar vacio" },
    });
  }
  try {
    const updateCarrito = carritoService.updateCarrito(id, body);
    res.send({ status: "ok", data: updateCarrito });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const deleteCarrito = (req, res) => {
  const {
    params: { id },
  } = req;

  if (!id) {
    req.status(400).send({
      status: "FAILED",
      data: { error: "El parámetro ':id' no puede estar vacio" },
    });
  }

  try {
    carritoService.deleteCarrito(id);
    res.status(204).send({ statis: "ok" });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
};

const addProduct = (req, res) => {
  const { id, id_prod } = req.params;
  const { product } = req.body;

  const productCart = carritoService.addProduct(id_prod, id, productCart);
  res.status(201).json({ status: "OK", data: product });
};

const deleteProduct = (req, res) => {
  const { id, id_prod } = req.params;

  if (!id || !id_prod) {
    return;
  }

  const deleteOneProduct = carritoService.deleteProduct(id, id_prod);
  res.status(202).json({ status: "Delete", data: deleteOneProduct });
};

module.exports = {
  getAllCarrito,
  getCarritoById,
  createNewCarrito,
  updateCarrito,
  deleteCarrito,
  addProduct,
  deleteProduct,
};
