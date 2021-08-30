const express = require("express")
const Router = express.Router()
const search_engine = require("../controllers/search_engine.controllers")

Router.post("/",search_engine)
module.exports = Router