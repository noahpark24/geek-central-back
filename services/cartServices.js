const { Cart, User, CartProduct, Product } = require("../models");
const { searchUser } = require("./userServices");

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

exports.createShoppingCart = async (user) => {
  try {
    const newCart = await Cart.create();
    newCart.setUser(user);
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

exports.purchaseCart = async (id) => {
  try {
    await Cart.update({ where: { id: id } }, { purchased: true });
  } catch (error) {
    throw Error(error);
  }
};
