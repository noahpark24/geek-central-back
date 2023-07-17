const { Product } = require("../models");

exports.addNewProduct = async (productData) => {
  try {
    const createdProduct = await Product.create(productData);
    return createdProduct;
  } catch (error) {
    throw Error(error);
  }
};

exports.getProduct = async (idProduct) => {
  try {
    const foundProduct = Product.findOne({ where: { id: idProduct } });
    return foundProduct;
  } catch (error) {
    throw Error(error);
  }
};

exports.addSeederProducts = async (productData) => {
  try {
    const existingProducts = await Product.findAll();
    if (existingProducts.length === 0) {
      await Product.bulkCreate(productData);
      console.log("Seeding complete!");
      return;
    } else {
      console.log("Products already exist in the database.");
      return;
    }
  } catch (error) {
    throw new Error(error);
  }
};

exports.getAllProducts = async () => {
  try {
    let productsOnStock = await Product.findAll();
    return productsOnStock;
  } catch (error) {
    throw Error(error);
  }
};

exports.deleteProduct = async (id) => {
  try {
    const product = await this.getProduct(id);

    product.is_deleted = true;

    await product.save();
  } catch (error) {
    throw Error(error);
  }
};

exports.editProduct = async (product) => {
  try {
    const updatedProduct = await Product.update(product, {
      where: { id: product.id },
      returning: true,
    });
    return updatedProduct[1][0];
  } catch (error) {
    throw Error(error);
  }
};
