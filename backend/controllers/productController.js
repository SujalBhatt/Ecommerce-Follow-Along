const addProduct = (req, res) => {
    try {
        const { name, description, price } = req.body;
        const images = req.files ? req.files.images : [];

        // Add your logic to save the product to the database here

        res.status(201).json({ message: "Product added successfully!" });
    } catch (error) {
        console.error("Error adding product:", error);
        res.status(500).json({ message: "An error occurred while adding the product." });
    }
};

module.exports = { addProduct };