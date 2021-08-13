const User = require("../models/user")
const bcrypt = require("bcrypt")

async function signup(req, res, next) {
    const { name, password, gmail, nameUser } = req.body

    const passwordHash = await bcrypt.hash(password, 10)

    if (!name || !password || !gmail || !nameUser) {
        res.status(400).send("nesesitas pasar los datos correctos o faltan")
    }
    const newUser = new User({
        name: name,
        password: passwordHash,
        gmail: gmail,
        nameUser: nameUser
    })
    const repeatUser = await User.findOne({ nameUser })
    if (repeatUser) {
        res.status(401).json({
            error: "repeat user"
        })
    } else {
        newUser.save().then(() => {
            res.status(201).send("todo salio bien")
        }).catch(err => next(err))
    }
}
module.exports = signup