const { cart } = require("../data/data.json");

const { promises: fs } = require("fs");

class Cart {
  static lastCartstId = cart[cart.length - 1].id;
  constructor(route) {
    this.route = route;
  }

  async getAll() {
    try {
      const cart = await fs.readFile(`./${this.route}`, "UTF-8");
      return JSON.parse(cart);
    } catch (error) {
      return [];
    }
  }

  async getById(id) {
    const carts = await this.getAll();
    const cartReq = carts.find((cart) => cart.id === id);
    return userReq;
  }

  async save(cart) {
    const { id, timestamp } = cart;
    if (!id || !timestamp) {
      return null;
    }
    Cart.lastCartId++;
    const newCart = {
      id: Cart.lastCartId,
      timestamp: Date.now(),
      products: {
        id,
        name,
        description,
        code,
        img,
        price,
        stock,
      },
    };
    users.push(newCart);
    try {
      await fs.writeFile(`./${this.route}`, JSON.stringify(newCart));
      return newCart;
    } catch (error) {
      throw new Error(`Error al guardar: ${error}`);
    }
  }

  async update(cart, id) {
    const cart = await this.getAll();
    const index = users.findIndex((cart) => cart.id === +id);

    if (index === -1) {
      throw new Error(`Error al actualizar: no se encontró el id ${cart.id}`);
    } else {
      cart[index] = cart;
    }
    try {
      await fs.writeFile(`./${this.route}`, JSON.stringify(cart));
    } catch (error) {
      throw new Error(`Error al actualizar: ${error}`);
    }
  }

  async deleteById(id) {
    try {
      let carts = await this.getAll();
      let cartParser = JSON.parse(carts);
      let nuevoscarts = cartParser.filter((element) => element.id !== id);
      await fs.writeFile(`./${this.route}`, JSON.stringify(nuevoscarts));
      return nuevoscarts;
    } catch (error) {
      console.log(error);
    }
  }
  async deleteAll() {
    try {
      await fs.promises.writeFile(`./${this.name}`, JSON.stringify([{}]));
      return console.log("Usuarios eliminados");
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = Cart;
