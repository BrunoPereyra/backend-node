const express = require("express")
const Profile = require("../controllers/profile.controllers")
const Router = express.Router()

Router.get("/",Profile)

module.exports = Router