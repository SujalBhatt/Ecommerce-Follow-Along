const express = require("express");
const { placeOrder, getUserOrders } = require("../controllers/orderController");
const router = express.Router();

router.post("/place-order", placeOrder);
router.get("/user-orders/:email", getUserOrders); // Add endpoint to get user orders

module.exports = router;
