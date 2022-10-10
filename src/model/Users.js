const { users } = require("../data/data.json");
const { promises: fs } = require("fs");

class User {
  static lastUserstId = users[users.length - 1].id;
  constructor(route) {
    this.route = route;
  }

  async getAll() {
    try {
      const users = await fs.readFile(`./${this.route}`, "UTF-8");
      return JSON.parse(users);
    } catch (error) {
      return [];
    }
  }

  async getById(id) {
    const users = await this.getAll();
    const userReq = users.find((user) => user.id === id);
    return userReq;
  }

  async save(user) {
    const { name, lastname, age, email, password, role } = user;
    if (!name || !lastname || !age || !email || !password || !role) {
      return null;
    }
    User.lastUsersId++;
    const newUser = {
      id: User.lastUsersId,
      name,
      lastname,
      age,
      email,
      password,
      role,
    };
    users.push(newUser);
    try {
      await fs.writeFile(`./${this.route}`, JSON.stringify(newUser));
      return newUser;
    } catch (error) {
      throw new Error(`Error al guardar: ${error}`);
    }
  }

  async update(user, id) {
    const user = await this.getAll();
    const index = users.findIndex((user) => user.id === +id);

    if (index === -1) {
      throw new Error(`Error al actualizar: no se encontró el id ${user.id}`);
    } else {
      user[index] = user;
    }
    try {
      await fs.writeFile(`./${this.route}`, JSON.stringify(user));
    } catch (error) {
      throw new Error(`Error al actualizar: ${error}`);
    }
  }

  async deleteById(id) {
    try {
      let users = await this.getAll();
      let userParser = JSON.parse(users);
      let nuevosUsers = userParser.filter((element) => element.id !== id);
      await fs.writeFile(`./${this.route}`, JSON.stringify(nuevosUsers));
      return nuevosUsers;
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

module.exports = User;
