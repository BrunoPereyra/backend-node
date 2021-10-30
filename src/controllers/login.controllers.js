const jwt = require("jsonwebtoken")
const bcrypt = require("bcrypt")
const User = require("../models/user")

async function login(req, res) {
    const { nameUser, password } = req.body

    const user = await User.findOne({ nameUser })
    const passwordCorrect = user == null
        ? false
        : await bcrypt.compare(password, user.password)

    if (!(user && passwordCorrect)) {
        res.status(401).json({
            error: "password o user incorrect"
        })
    }
    const userForToken = {
        id: user._id,
        nameUser: nameUser
    }
    const token = jwt.sign(
        userForToken,
        "123",
        {
            expiresIn: 60 * 60 * 24 * 7
        })
    res.send({
        user: user.name,
        nameUser: nameUser,
        token
    })
}
module.exports = login