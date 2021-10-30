const mongoose = require("mongoose")
const { Schema, model } = mongoose

const Shemahistorie = new Schema({
    img: String,
    viws: Number,
    iDviws:Array,
    idUser:String,
    createdAt: { type: Date, expires: '1.440m', default: Date.now },
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})
Shemahistorie.set('tojson', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject._v
    }
})

const Histories = model("Histories", Shemahistorie)
module.exports = Histories
