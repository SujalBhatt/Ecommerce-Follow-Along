const Product = require("../models/productModel");
const path = require("path");
const fs = require("fs");

const addProduct = async (req, res) => {
    try {
        console.log("Request body:", req.body);
        console.log("Request files:", req.files);

        const { name, description, price } = req.body;
        let images = [];

        if (req.files && req.files.images) {
            const uploadPath = path.join(__dirname, '../uploads');
            if (!fs.existsSync(uploadPath)) {
                fs.mkdirSync(uploadPath);
            }

            if (Array.isArray(req.files.images)) {
                images = req.files.images.map(file => {
                    const filePath = path.join(uploadPath, file.name);
                    file.mv(filePath);
                    console.log("File uploaded to:", filePath); // Add this line
                    return file.name;
                });
            } else {
                const filePath = path.join(uploadPath, req.files.images.name);
                req.files.images.mv(filePath);
                console.log("File uploaded to:", filePath); // Add this line
                images = [req.files.images.name];
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

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json(products);
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({ message: "An error occurred while fetching products.", error: error.message });
    }
};

module.exports = { addProduct, getAllProducts };

