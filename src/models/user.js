const mongoose = require("mongoose")
const { Schema, model } = mongoose

const Schemauser = new Schema({
    name: String,
    password: String,
    gmail: String,
    photoUrl: String,
    nameUser: String,
    date: Date,
    followers: Array,
    following: Array,
    biografia: {
        nacimiento: Number,
        infoUser: String
    },
    posts: [{
        type: Schema.Types.ObjectId,
        ref: "Posts"
    }],
    messages: [{
        type: Schema.Types.ObjectId,
        ref: "Messages"
    }]
})
Schemauser.set("toJSON", {
    transform: (returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
        delete returnedObject.password
        delete returnedObject.gmail
    }
})


const User = model("User", Schemauser)

module.exports = User