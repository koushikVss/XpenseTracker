const express = require("express")
const app = express()
require("./config/env")

app.use(express.json())
app.get("/api", (req, res) => {
    res.json({ message: "Xpense Tracker Backend..." })
})

const port = process.env.PORT
app.listen(port, () => {
    console.log("Server running on port ", port)
})
