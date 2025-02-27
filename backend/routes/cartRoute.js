const express = require("express");
const router = express.Router();
const { addToCart, getCartProducts } = require("../controllers/cartController");

router.post("/add", addToCart);
router.get("/:userId", getCartProducts); // Add route to fetch cart products

module.exports = router;
