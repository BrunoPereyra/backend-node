const User = require("../models/user")
const followContollers = async (req, res) => {
    const { idUser } = req
    const { newFollower, stopFollowing } = req.body
    if (!(newFollower || stopFollowing)) {
        res.status(400).send({
            result: "data err"
        })
    }

    const UserId = await User.findById(idUser)
    let followersN = await UserId.followers
    const followersIF = await followersN.filter(f => {
        if (f == newFollower) {
            return true
        } else {
            return false
        }
    })
    if (followersIF == false) {
        UserId.followers = UserId.followers.concat(newFollower)
        await UserId.save()
        res.status(200).send({
            result: UserId
        })
    } else {
        res.status(200).json({
            res: "is already following him"
        })
    }
    if (stopFollowing) {

        const iFollow = await UserId.followers.indexOf(stopFollowing)
        if (iFollow !== null) {
            await UserId.followers.splice(iFollow, 1)
            await UserId.save()
            res.status(200).json({
                res: UserId
            })
        }
    }
}
module.exports = followContollers