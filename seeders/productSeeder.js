const Product = require("../models/Product.js");
const db = require("../config/db/index.js");
const { productData } = require("./products.js");

exports.seedProducts = async () => {
  try {
    await Product.bulkCreate(productData);

    console.log("Seeding complete!");
  } catch (error) {
    console.error("Seeding error:", error);
  } finally {
    await db.close();
  }
};
