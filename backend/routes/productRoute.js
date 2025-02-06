const express = require("express");
const router = express.Router();
const { addProduct, getAllProducts, getProductsByEmail, getProductById, updateProduct } = require("../controllers/productController");

router.post("/", addProduct);
router.get("/", getAllProducts);
router.get("/user/:email", getProductsByEmail);
router.get("/:id", getProductById); // Add route for fetching a single product by ID
router.put("/:id", updateProduct); // Add route for updating product

module.exports = router;

