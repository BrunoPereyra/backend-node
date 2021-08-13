const express = require("express")
const Router = express.Router()
const Posts_controller = require("../controllers/posts.controllers")

Router.post("/",Posts_controller)
module.exports = Router