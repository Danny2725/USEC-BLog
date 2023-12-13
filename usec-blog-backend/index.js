const express = require("express")
const bodyParser = require("body-parser")
require("dotenv").config()

const app = express()
const port = Number(process.env.SERVER_PORT) || 5000
const host = process.env.SERVER_HOST || "0.0.0.0"

const { parseAllowedHosts } = require("./utils/parseAllowedHosts")

const cors = require("cors")
/**
 * Parse the allowed hosts from the environment variable
 * @type {string[] | "*" | null}
 */
const allowedHosts = parseAllowedHosts(process.env.ALLOWED_HOSTS) || null

/**
 * Checks if the host is allowed based on the allowed hosts list.
 * @param {string} req - The host to be checked.
 * @param {function} callback - The callback function to be called with the result.
 */
const checkHost = (req, callback) => {
    const host = req
    const isAllowedHost = allowedHosts === "*" || allowedHosts.includes(host)
    callback(null, isAllowedHost)
}

app.use(
    cors({
        origin: checkHost,
    }),
)

// Routes definitions below

const globalRoutes = require("./routes")

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    res.json({ message: "It's alive!" })
})

app.use(globalRoutes)

// Serve backend
app.listen(port, host, () => {
    console.log(`Server is running on ${host}:${port}`)
})
