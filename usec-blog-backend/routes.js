const globalRouter = require("express").Router()

const postRoutes = require("./api/posts")

globalRouter.use("/api/posts", postRoutes)

module.exports = globalRouter
