const { products } = require("../data/data.json");

const { promises: fs } = require("fs");

class Product {
  static lastProductId = products[products.length - 1].id;
  constructor(route) {
    this.route = route;
  }

  async getAll() {
    try {
      const products = await fs.readFile(`./${this.route}`, "UTF-8");
      return JSON.parse(products);
    } catch (error) {
      return [];
    }
  }

  async getById(id) {
    const products = await this.getAll();
    const productReq = products.find((product) => product.id === id);
    return productReq;
  }

  async save(product) {
    const { id, timestamp, name, desciption, code, img, price, stock } =
      product;
    if (
      !id ||
      !timestamp ||
      !name ||
      !desciption ||
      !code ||
      !img ||
      !price ||
      !stock
    ) {
      return null;
    }
    product.lastProductsId++;
    const newProduct = {
      id: Product.lastProductsId,
      timestamp: Date.now(),
      name,
      desciption,
      code,
      img,
      price,
      stock,
    };
    products.push(newProduct);
    try {
      await fs.writeFile(`./${this.route}`, JSON.stringify(newProduct));
      return newProduct;
    } catch (error) {
      throw new Error(`Error al guardar: ${error}`);
    }
  }

  async update(product, id) {
    const product = await this.getAll();
    const index = product.findIndex((product) => product.id === +id);

    if (index === -1) {
      throw new Error(
        `Error al actualizar: no se encontró el id ${product.id}`
      );
    } else {
      product[index] = product;
    }
    try {
      await fs.writeFile(`./${this.route}`, JSON.stringify(product));
    } catch (error) {
      throw new Error(`Error al actualizar: ${error}`);
    }
  }

  async deleteById(id) {
    try {
      let products = await this.getAll();
      let productParser = JSON.parse(products);
      let nuevosProducts = productParser.filter((element) => element.id !== id);
      await fs.writeFile(`./${this.route}`, JSON.stringify(nuevosProducts));
      return nuevosProducts;
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

module.exports = Product;
