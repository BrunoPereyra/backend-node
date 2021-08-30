const Histories = require("../models/histories")
const myStories = async (req, res) => {

    const idUser = req.idUser
    const { idHistorie, deleteHistorie } = req.body
    const idViwsUser = await Histories.findById(idHistorie)
    if (idViwsUser == null) {
        res.status(404).json({
            error: "history does not exist"
        })
    }
    const storyViews = idViwsUser.iDviws.find( id => {
        if (id == idUser) {
            return idUser
        }
    })
    console.log("idUser: ",idUser);
    console.log(storyViews == undefined ? "ashei" : "storyViews is "+ storyViews);

    if (storyViews == undefined && (deleteHistorie == null || deleteHistorie == false)) {
        idViwsUser.iDviws = idViwsUser.iDviws.concat(idUser)
        idViwsUser.viws = idViwsUser.viws + 1
        await idViwsUser.save()
        res.status(200).json({
            res: idViwsUser
        })
    } else if(deleteHistorie == null || deleteHistorie == false){
        res.status(200).json({
            res: idViwsUser,
            ashei: "ashe"
        })
    }
    let idUserViw = idViwsUser.idUser
    if (deleteHistorie === true && idUser == idUserViw) {
        await Histories.findByIdAndDelete(idHistorie)
        res.status(200).json({
            res: "delete historie ok"
        })
    }
}
module.exports = myStories