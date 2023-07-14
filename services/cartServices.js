const { Cart, User, CartProduct, Product } = require("../models");

exports.getUserCart = async (id) => {
  try {
    let cart = await Cart.findOne({
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
    return cart;
  } catch (error) {
    throw Error(error);
  }
};

exports.createCart = async () => {
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

exports.deleteCart = async (id) => {
  try {
    await Cart.destroy({ where: { id: id } });
  } catch (error) {
    throw Error(error);
  }
};
