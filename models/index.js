const User = require("./User");
const Product = require("./Product");
const Cart = require("./Cart");
const CartProduct = require("./CartProduct");

//Un usuario Puede tener muchos carritos
User.hasMany(Cart, { as: "cart" });

//Cada carrito puede tener muchas ordenes e indica si se compro su contenido o no
Cart.belongsTo(User, { as: "user" });
Cart.hasMany(CartProduct, { as: "CartProducts" });

//Cada orden tiene un producto y un carrito
CartProduct.belongsTo(Cart, { as: "cart" });
CartProduct.belongsTo(Product, { as: "product" });

//Cada producto puede tener muchas ordenes
Product.hasMany(CartProduct, { as: "CartProduct" });

module.exports = { User, Product, Cart, CartProduct };
//BelongsToMany hace que sequelize cree una tabla intermedia automaticamente
