const express = require("express");
const router = express.Router();
const {
  get_user_cart,
  get_all_carts,
  purchase_user_cart,
} = require("../controllers/cartController");

router.get("/", get_all_carts);
router.get("/:nickname", get_user_cart);
router.put("/purchase/:nickname", purchase_user_cart);

module.exports = router;
