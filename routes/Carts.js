const express = require("express");
const router = express.Router();
const { getAllCarts } = require("../services/cartServices");

router.get("/", getAllCarts);
router.get("/:nickname", get_user_shopping_cart);

module.exports = router;
