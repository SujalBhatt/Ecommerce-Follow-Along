const Product = require("../models/productModel");

const addProduct = async (req, res) => {
    try {
        console.log("Request body:", req.body);
        console.log("Request files:", req.files);

        const { name, description, price } = req.body;
        let images = [];

        if (req.files && req.files.images) {
            if (Array.isArray(req.files.images)) {
                images = req.files.images.map(file => file.path);
            } else {
                images = [req.files.images.path];
            }
        }

        const newProduct = new Product({
            name,
            description,
            price,
            images,
        });

        await newProduct.save();

        res.status(201).json({ message: "Product added successfully!" });
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({ message: "An error occurred while adding the product.", error: error.message });
    }
};

module.exports = { addProduct };


// this one