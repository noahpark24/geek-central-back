const asyncHandler = require("express-async-handler");
const { searchUser } = require("../services/userServices");
const { getProduct } = require("../services/productServices");
const { getUserCart, createShoppingCart } = require("../services/cartServices");

const {
  add_new_product,
  edit_cart_product,
  delete_cart_product,
} = require("../services/cartProductServices");

exports.add_new_cart_product = asyncHandler(async (req, res) => {
  try {
    const { nickname, id, quantity } = req.body;

    const addedProduct = await add_new_product(quantity);

    const foundUser = await searchUser(nickname);

    const userShoppingCart = await getUserCart(foundUser.id);

    const foundProduct = await getProduct(id);

    addedProduct.setProduct(foundProduct);

    addedProduct.setCart(userShoppingCart);

    res.status(201).send(addedProduct);
  } catch (error) {
    throw Error(error);
  }
});

exports.delete_cart_product = asyncHandler(async (req, res) => {
  try {
    const { id } = req.body;
    const deletedProduct = await delete_cart_product(id);
    res.status(202).send(deletedProduct);
  } catch (error) {
    throw Error(error);
  }
});

exports.edit_cart_product = asyncHandler(async (req, res) => {
  try {
    const { id, quantity } = req.body;
    const updatedCartProduct = await edit_cart_product(id, quantity);
    res.status(200).send(updatedCartProduct);
  } catch (error) {
    throw Error(error);
  }
});

exports.get_product = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const product = await getProduct(id);
    res.status(200).send(product);
  } catch (error) {
    throw Error(error);
  }
});
