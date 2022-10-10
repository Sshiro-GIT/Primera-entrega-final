const { Products } = require("../model/Products");

const products = new Products();

const getAllController = (req, res) => {
  const products = products.getAll();
  if (products.error) return res.status(404).send(products.error);
  return res.json(products);
};

const getByIdController = (req, res) => {
  const { productId } = req.params;
  const product = products.getById(productId);
  if (product.error) return res.status(404).send(product.error);
  return res.json(product);
};

const saveController = (req, res) => {
  const newProduct = products.save(req.body);
  if (newProduct.error) return res.status(400).send(newProduct.error);
  return res.json(newProduct);
};

const updateController = (req, res) => {
  const {
    params: { productId },
  } = req;
  const productUpdated = products.update(req.body, productId);
  if (productUpdated.error) return res.status(404).send(productUpdated.error);
  return res.json(productUpdated);
};

const deleteByIdController = (req, res) => {
  const { productId } = req.params;
  const productDeleted = products.deleteById(productId);
  if (productDeleted.error) return res.status(404).send(productDeleted.error);
  return res.json(productDeleted);
};

module.exports = {
  getAllController,
  getByIdController,
  saveController,
  updateController,
  deleteByIdController,
};
