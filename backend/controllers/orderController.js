const Order = require("../models/orderModel");
const User = require("../models/userModel");

const placeOrder = async (req, res) => {
    try {
        const { email, cartProducts, selectedAddress, totalAmount } = req.body;

        // Retrieve the user by email
        const user = await User.findOne({ email });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Create an order for each product in the cart
        const orders = await Promise.all(cartProducts.map(async (product) => {
            const newOrder = new Order({
                user: user._id,
                address: selectedAddress,
                items: [{
                    product: product.product._id,
                    quantity: product.quantity
                }],
                totalAmount: product.product.price * product.quantity,
                status: "Pending"
            });

            await newOrder.save();
            return newOrder;
        }));

        res.status(201).json({ message: "Order placed successfully", orders });
    } catch (error) {
        console.error("Error placing order:", error);
        res.status(500).json({ message: "An error occurred while placing the order.", error: error.message });
    }
};

module.exports = { placeOrder };
