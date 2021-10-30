const express = require("express")
const Router = express.Router()

Router.get("", (req, res) => {
  console.log("hello");
})
module.exports = Router