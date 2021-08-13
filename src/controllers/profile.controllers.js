const User = require("../models/user")
const Profile = async (req, res) => {
    const { idUser } = req
    const UserId = await User.findById(idUser).populate("posts", {
        id: 0
    })
    if (UserId && UserId._id ) {
        UserId.password = null
        UserId.gmail = null
        UserId._id = null
        res.status(200).json({
            User : UserId
        })
    }
    else{
        res.status(402).send("faild")
    }
}
module.exports = Profile