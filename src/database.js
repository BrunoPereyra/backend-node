const mongoose = require("mongoose")
require("colors")

const conectionString = process.env.DB

mongoose.connect(conectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
})
    .then(() => {
        console.log("database connect".bgWhite.black);
    })
    .catch((error) => {
        console.log(error);
    })


process.on('uncaughtException', error => {
    console.error(error)
    mongoose.disconnect()
})