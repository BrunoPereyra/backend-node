const User = require("../models/user")
const Posts = require("../models/posts")

const delete_User = async (req, res) => {
   const {idUser} = req.body
   
   try {
      await Posts.findByIdAndDelete(idUser)
      await Posts.deleteMany({user:idUser})
         res.status(200).json({
            UserId: "ok",
         })
   } catch (error) {
      res.status(500).json({
         error:error
      })
      console.log(error);
   }
}
module.exports = delete_User