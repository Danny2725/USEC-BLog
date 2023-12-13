const express = require("express")
const postsRouter = express.Router()

const postsHandlers = require("./posts.handlers")

postsRouter.get("/", postsHandlers.getPosts)

module.exports = postsRouter
