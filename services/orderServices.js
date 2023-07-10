const { User, Cart, CartProduct, Product } = require("../models");
const { getAllCarts } = require("./CartServices");
const nodemailer = require("nodemailer");

exports.getAllOrders = async () => {
  try {
    let Carts = await Cart.findAll({
      where: { purchased: true },
      include: [
        { model: User, as: "user" },
        {
          model: CartProduct,
          as: "cart_product",
          include: [{ model: Product, as: "product" }],
        },
      ],
    });
    return Carts;
  } catch (error) {
    throw Error(error);
  }
};

exports.getAllUserOrders = async (id) => {
  try {
    const orders = await Cart.findAll({
      where: { purchased: true, userId: id },
      include: { model: User, as: "user" },
    });
    return orders;
  } catch (error) {
    throw Error(error);
  }
};

exports.addNewOrder = async (createdOrder) => {
  try {
    const newOrder = await Cart.create(createdOrder);
    return newOrder;
  } catch (error) {
    throw Error(error);
  }
};
