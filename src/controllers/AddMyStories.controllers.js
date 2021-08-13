const Histories = require("../models/histories")
const User = require("../models/user")
const AddMyStories = async (req, res) => {
    const id = req.idUser
    const {img} = req.body
    const userId = await User.findById(id)
    if (img) {
        const newHistories = new Histories({
            date: new Date(),
            img: img,
            viws: 0,
            idUser: userId._id
        })
        newHistories.save()
        res.status(200).json({
            newHistories
        })     
    }else{
        res.status(404).json({
            error: "algo a salido mal"
        })
    }

}
module.exports = AddMyStories