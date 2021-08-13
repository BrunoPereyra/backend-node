const Posts = require("../models/posts")
const User = require("../models/user")
async function Posts_controller(req, res) {
    const { imgUrl, caption } = req.body
    
    const userId = await req.idUser
    const user = await User.findById(userId)

    const newPost = new Posts({
        imgUrl,
        caption,
        user:user._id,
        date: new Date(),
        likesAll:0,
    })
    try {
        const savePost = await newPost.save()
        user.posts =  user.posts.concat(savePost._id)
        await user.save()
        res.send(savePost)
    } catch (error) {
        console.log(error);
    }
}
module.exports = Posts_controller