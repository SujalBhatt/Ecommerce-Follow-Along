const express = require("express");
const { signUp, getUserByEmail, addAddress } = require("../controllers/userController");
const login = require("../controllers/loginController");
const router = express.Router();

router.post("/login", login);
router.post("/signup", signUp);
router.get("/:email", getUserByEmail);
router.post("/add-address", addAddress);

module.exports = router;