const User = require("../models/user")

const search_engine = async (req, res) => {
    const { search } = req.body
    const Users = await User.find({})
    if (!search) {
        res.status(404).json({
            res: "write usury name"
        })
    }
    const searchUser = Users.filter((u) => {
        let nameUser = u.nameUser
        let nameUserSubstring = u.nameUser.substring(0, 4)
        let searchSubstring = search.substring(0, 4)
        if (nameUser == search || nameUserSubstring == searchSubstring) {
            return u
        }
    })
    if (searchUser.length > 0 ) {
        res.status(206).json({
            res:searchUser  
        })
    } else if(searchUser[0] == undefined) {
        res.status(404).json({
            res: "usury not found",
        })
    }

}
module.exports = search_engine