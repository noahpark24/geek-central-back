const { Cart, User, CartProduct, Product } = require("../models");

exports.getUserCart = async (id) => {
  try {
    let shoppingCart = await Cart.findOne({
      where: { userId: id, purchased: false },
      include: [
        { model: User, as: "user" },
        {
          model: CartProduct,
          as: "cart_product",
          include: [{ model: Product, as: "product" }],
        },
      ],
    });
    return shoppingCart;
  } catch (error) {
    throw Error(error);
  }
};

exports.createShoppingCart = async () => {
  try {
    const newCart = await Cart.create();
    return newCart;
  } catch (error) {
    throw Error(error);
  }
};

exports.getAllCarts = async () => {
  try {
    const carts = await Cart.findAll({
      include: { model: User, as: "user" },
    });
    return carts;
  } catch (error) {
    throw Error(error);
  }
};

exports.delete_cart = async (id) => {
  try {
    await Cart.destroy({ where: { id: id } });
  } catch (error) {
    throw Error(error);
  }
};
