const { Order, User, Cart, CartProduct, Product } = require("../models");
const { getAllCarts } = require("../services/cartServices");
const nodemailer = require("nodemailer");

exports.getAllOrders = async () => {
  try {
    // const orders = await Order.findAll({
    //   include: [
    //     { model: User, as: "user" },
    //     { model: Cart, as: "shopping_cart" },
    //   ],
    // });

    let shoppingCarts = await Cart.findAll({
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
    return shoppingCarts;
  } catch (error) {
    throw Error(error);
  }
};

exports.getAllUserOrders = async (id) => {
  try {
    const orders = await Order.findAll({
      where: { userId: id },
      include: { model: User, as: "user" },
    });
    return orders;
  } catch (error) {
    throw Error(error);
  }
};

exports.addNewOrder = async (createdOrder) => {
  try {
    const newOrder = await Order.create(createdOrder);
    return newOrder;
  } catch (error) {
    throw Error(error);
  }
};
