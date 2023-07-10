const express = require("express");
const {
  delete_product,
  edit_product,
  add_new_product,
} = require("../controllers/productController");

const { get_all_orders } = require("../controllers/orderController");

const {
  see_all_users,
  update_user_data,
  delete_user_account,
} = require("../controllers/userController");
const router = express.Router();

router.get("/orders", get_all_orders);

router.post("/create-product", add_new_product);

router.delete("/delete-product/:id", delete_product);

router.put("/edit-product", edit_product);

router.get("/get-users", see_all_users);

router.put("/:nickname", update_user_data);

router.delete("/remove/:nickname", delete_user_account);

module.exports = router;
