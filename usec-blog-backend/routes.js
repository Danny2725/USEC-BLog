const globalRouter = require("express").Router()

const postRoutes = require("./api/posts")

globalRouter.use("/posts", postRoutes)

module.exports = globalRouter
