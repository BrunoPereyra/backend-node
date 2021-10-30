const { Schema, model } = require("mongoose")

const Schemaposts = new Schema({
    caption: String,
    date: Date,
    imgUrl: String,
    nameUser:String,
    userId: String,
    likesAll: 0,
    user: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

Schemaposts.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id
        delete returnedObject._id
        delete returnedObject.__v
    }
})

const Posts = model('Posts', Schemaposts)

module.exports = Posts