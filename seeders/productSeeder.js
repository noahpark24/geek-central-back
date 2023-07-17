const { productData } = require("./products.js");
const { addSeederProducts } = require("../services/productServices.js");

exports.seedProducts = async () => {
  try {
    await addSeederProducts(productData);
  } catch (error) {
    console.error("Seeding error:", error);
  }
};
