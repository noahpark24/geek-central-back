const Sequelize = require("sequelize");
const db = require("../config/db/index");

class Cart extends Sequelize.Model {}

Cart.init(
  {
    purchased: { type: Sequelize.BOOLEAN, defaultValue: false },
  },
  { sequelize: db, modelName: "cart" }
);

module.exports = Cart;
