const User = require("./User");
const Product = require("./Product");
const Cart = require("./Cart");
const CartProduct = require("./CartProduct");
const Order = require("./Order");

//Un usuario Puede tener muchos carritos
User.hasMany(Cart, { as: "cart" });

//order contiene un carrito con purchased true y el total gastado
Order.belongsTo(Cart, { as: "purchased_cart" });
Order.belongsTo(User, { as: "user" });

//Cada carrito puede tener muchos cartProduct e indica si se compro su contenido o no
Cart.belongsTo(User, { as: "user" });
Cart.hasMany(CartProduct, { as: "cartProduct" });

//Cada cartProduct tiene un carrito y un producto
CartProduct.belongsTo(Cart, { as: "cart" });
CartProduct.belongsTo(Product, { as: "product" });

//Cada producto puede tener muchos cartProduct
Product.hasMany(CartProduct, { as: "cartProduct" });

module.exports = { User, Product, Cart, Order, CartProduct };
//BelongsToMany hace que sequelize cree una tabla intermedia automaticamente
