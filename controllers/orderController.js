const asyncHandler = require("express-async-handler");
const {
  getAllOrders,
  addNewOrder,
  getUserOrders,
} = require("../services/orderServices");
const { sendEmailToUser } = require("../services/mailSenderServices");
const { searchUser } = require("../services/userServices");
const { getUserCart } = require("../services/cartServices");

exports.get_all_orders = asyncHandler(async (req, res) => {
  try {
    const orders = await getAllOrders();
    res.status(200).send(orders);
  } catch (error) {
    throw Error(error);
  }
});

exports.get_all_user_orders = asyncHandler(async (req, res) => {
  try {
    const { id } = req.body;
    const orders = await getUserOrders(id);
    res.status(200).send(orders);
  } catch (error) {
    throw Error(error);
  }
});

exports.add_new_order = asyncHandler(async (req, res) => {
  try {
    const { total, CartId, nickname } = req.body;
    const { id, email } = await searchUser(nickname);
    const cart = await getUserCart(id);
    const newOrder = await addNewOrder({
      total: total,
      purchasedCartId: CartId,
      userId: id,
    });
    cart.purchased = true;
    cart.save();
    res.status(201).send(newOrder);
  } catch (error) {
    throw Error(error);
  }
});
