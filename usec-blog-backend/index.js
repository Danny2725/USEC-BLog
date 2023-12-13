const express = require("express")
const bodyParser = require("body-parser")
require("dotenv").config()

const app = express()
const port = Number(process.env.SERVER_PORT) || 5000
const host = process.env.SERVER_HOST || "0.0.0.0"

const globalRoutes = require("./routes")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.json({ message: "It's alive!" })
})

app.use(globalRoutes)

app.listen(port, host, () => {
    console.log(`Server is running on port ${port}`)
})
