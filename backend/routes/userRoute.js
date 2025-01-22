const express = require("express")
const router = express.Router()

const signUp = require("../controllers/userController")
const upload = require("../configurations/multer")

router.post("/signup", upload.single("picture"), signUp)

module.exports = router