const express = require("express")
const Router = express.Router()
const get_post = require("../controllers/get_post.controllers")

Router.get("/", get_post)

module.exports = Router