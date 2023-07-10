const { CartProduct } = require("../models");

exports.add_new_order = async (quantity) => {
  try {
    const newOrder = await CartProduct.create(quantity);
    return newOrder;
  } catch (error) {
    throw Error(error);
  }
};

exports.delete_cart_product = async (id) => {
  try {
    await CartProduct.destroy({
      where: { productId: id },
      returning: true,
    });
  } catch (error) {
    throw Error(error);
  }
};

exports.edit_cart_product = async (cartProductId, newQuantity) => {
  try {
    const updatedCartProduct = await CartProduct.update(
      { quantity: newQuantity },
      {
        where: { id: cartProductId },
        returning: true,
      }
    );
    return updatedCartProduct[1][0];
  } catch (error) {
    throw Error(error);
  }
};
