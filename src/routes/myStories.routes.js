const express = require("express")
const Router = express.Router()
const AddMyStories = require("../controllers/AddMyStories.controllers")

Router.post("/",AddMyStories)
module.exports = Router