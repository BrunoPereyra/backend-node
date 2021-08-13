const Posts = require("../models/posts")

const get_post = async (req,res) => {
    const getPost = await Posts.find({}).populate("user",{
        nameUser:1,
        name:1,
        _id:0
    })
    res.send(getPost)
}

module.exports = get_post