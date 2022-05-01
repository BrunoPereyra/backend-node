const mongoose = require("mongoose")
const { Schema, model } = mongoose

const SchemaMessage = new Schema({
    message: String,
    chatName: String,
    nameUser: String,
    date: Date,
    user: [{
        type: Schema.Types.ObjectId,
        ref: "User"
    }]
})
SchemaMessage.set("toJSON", {
    transform: (returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})
const Message = model("Message", SchemaMessage)

module.exports = Message