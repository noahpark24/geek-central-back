const asyncHandler = require("express-async-handler");
const { searchUser } = require("../services/userServices");
const {
  getAllCarts,
  getUserCart,
  purchaseCart,
} = require("../services/cartServices");

exports.get_all_carts = asyncHandler(async (req, res) => {
  try {
    const carts = await getAllCarts();
    res.status(200).send(carts);
  } catch (error) {
    throw Error(error);
  }
});

exports.get_user_cart = asyncHandler(async (req, res) => {
  try {
    const { nickname } = req.params;
    const user = await searchUser(nickname);
    let userShoppingCart = await getUserCart(user.id);
    res.status(200).send(userShoppingCart);
  } catch (error) {
    throw Error(error);
  }
});

exports.purchase_user_cart = asyncHandler(async (req, res) => {
  try {
    const { nickname } = req.params;
    const user = await searchUser(nickname);
    let userShoppingCart = await getUserCart(user.id);
    await purchaseCart(userShoppingCart.id);
    res.status(200).send(userShoppingCart);
  } catch (error) {
    throw Error(error);
  }
});
