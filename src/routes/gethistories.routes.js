const express = require("express")
const Router = express.Router()
const myStories = require("../controllers/myStories.controllers")

Router.post("/", myStories)
module.exports = Router