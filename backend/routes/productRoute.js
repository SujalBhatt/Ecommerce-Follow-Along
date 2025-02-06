const express = require("express");
const router = express.Router();
const { addProduct, getAllProducts, getProductsByEmail } = require("../controllers/productController");

router.post("/", addProduct);
router.get("/", getAllProducts);
router.get("/user/:email", getProductsByEmail);

module.exports = router;

