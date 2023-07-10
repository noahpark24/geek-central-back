const express = require("express");
const router = express.Router();
const { getAllCarts } = require("../services/CartServices");

router.get("/", getAllCarts);

module.exports = router;
