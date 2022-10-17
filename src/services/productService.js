const Product = require("../database/Product.js");

const getAllProducts = () => {
  const allProducts = Product.getAllProducts();
  return allProducts;
};
const getProductById = (productId) => {
  const product = Product.getProductById(productId);
  return product;
};
const createNewProduct = (newProduct) => {
  const createdProduct = Product.createNewProduct(newProduct);
  return createdProduct;
};

const updateProduct = (productId, changes) => {
  const updateProduct = Product.updateProduct(productId, changes);
  return updateProduct;
};
const deleteProduct = (productId) => {
  Product.deleteProduct(productId);
  return;
};

module.exports = {
  getAllProducts,
  getProductById,
  createNewProduct,
  updateProduct,
  deleteProduct,
};
