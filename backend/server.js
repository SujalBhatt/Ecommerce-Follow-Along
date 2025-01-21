const express = require("express")
const app = express()
const connectDB = require("./configurations/db")


app.use(express.json())

app.get("/", (req, res) => {
    res.send("API is running")
})

connectDB()

app.listen(5000, () => {
    console.log("Server is listening on port 5000")
})