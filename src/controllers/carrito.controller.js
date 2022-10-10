const { Cart } = require("../model/Cart");

const carts = new Cart();

const getAllController = (req, res) => {
  let carts = Cart.getAll();
  return res.json(carts);
};

const getByIdController = (req, res) => {
  const { id } = req.params;
  const cart = carts.getById(id);
  if (!cart)
    return res
      .status(404)
      .send({ error: -2, method: `${method} Cart not found` });
};

const saveController = (req, res) => {
  const newCart = Cart.save(req.body);
  if (newCart.error)
    return res
      .status(400)
      .send({ error: -2, method: `${method} no implementada` });
  return res.json(newCart);
};

const updateController = (req, res) => {
  const {
    params: { id },
  } = req;
  const cartUpdate = carts.update(req.body, id);
  if (cartUpdate.error) return res.status(404).send(cartUpdate.error);
  return res.json(cartUpdate);
};

const deleteByIdController = (req, res) => {
  const { id } = req.params;
  const cartDelete = carts.deleteById(id);
  if (cartDelete.error) return res.status(404).send(cartDelete.error);
  return res.json(cartDelete);
};

const deleteAllController = (req, res) => {
  const carts = carts.deleteAll();
  if (cartDelete.error) return res.status(404).send(cartDelete.error);
  return res.json(cartDelete);
};

module.exports = {
  getAllController,
  getByIdController,
  saveController,
  updateController,
  deleteByIdController,
  deleteAllController,
};
