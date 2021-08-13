const express = require("express")
const Router = express.Router()
const delete_User = require("../controllers/delete_User.controllers")

Router.delete("/",delete_User)
module.exports = Router