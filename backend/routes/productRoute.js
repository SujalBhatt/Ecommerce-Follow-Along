const express = require("express");
const router = express.Router();
const { addProduct } = require("../controllers/productController");

const products = [
    {
        id: 1,
        name: "Laptop",
        price: 1000,
        image: "https://cdn.mos.cms.futurecdn.net/EMVxCdfULHcJwa2UDYVo2U-1200-80.jpg"
    },
    {
        id: 2,
        name: "Headphones",
        price: 200,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfHS7aAC5-1O2A04S5Y5epxmL7aeBWQu3Ksw&s"
    },
    {
        id: 3,
        name: "Smartphone",
        price: 800,
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBawO82nbpFImf6VOVzRnVGvz9XXaYkRVvVA&s"
    }
];

router.post("/", addProduct);
router.get("/products", (req, res) => {
    res.json(products);
});

module.exports = router;
