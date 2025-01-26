const express = require("express")
const app = express()
const connectDB = require("./configurations/db")
const router = require("./routes/userRoute")
const cors = require("cors") 
app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    res.send("API is running")
})

app.use("/api/users", router)

connectDB()

app.listen(4000, () => {
    console.log("Server is listening on port 4000")
})