const Carrito = require("../database/Carrito.js");

const getAllCarrito = () => {
  const allCarritos = Carrito.getAllCarrito();
  return allCarritos;
};
const getCarritoById = (id) => {
  const Carrito = Carrito.getCarritoById(id);
  return Carrito;
};
const createNewCarrito = (newCarrito) => {
  const createdCarrito = Carrito.createNewCarrito(newCarrito);
  return createdCarrito;
};
const updateCarrito = (id) => {
  const updateCarrito = Carrito.updateCarrito(id);
  return updateCarrito;
};
const deleteCarrito = (id) => {
  Carrito.deleteCarrito(id);
  return;
};

const addProduct = (id_prod, id) => {
  const newProductCart = Carrito.addProduct(id_prod, id);
  return newProductCart;
};

const deleteProduct = (id, id_prod) => {
  Carrito.deleteProduct(id, id_prod);
  return;
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
