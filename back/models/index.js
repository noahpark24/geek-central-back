const User = require("./User");
const Product = require("./Product");
const Cart = require("./Cart");
const Order = require("./Order");

//Un usuario Puede tener muchos carritos y muchas ordenes
User.hasMany(Cart, { as: "cart" });

//Cada carrito puede tener muchas ordenes e indica si se compro su contenido o no
Cart.belongsTo(User, { as: "user" });
Cart.hasMany(Order, { as: "orders" });

//Cada orden tiene un producto y pertenece a un carrito
Order.belongsTo(Cart, { as: "cart" });
Order.belongsTo(Product, { as: "product" });

//Cada producto puede tener muchas ordenes
Product.hasMany(Order, { as: "order" });

module.exports = { User, Product, Cart, Order };
//BelongsToMany hace que sequelize cree una tabla intermedia automaticamente
