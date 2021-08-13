const express = require("express")
const Router = express.Router()
const followContollers = require("../controllers/follow.controllers")

Router.post("/", followContollers)
module.exports = Router