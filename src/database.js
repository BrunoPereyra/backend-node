const mongoose = require("mongoose")
const config = require("./config/config")
require("colors")

const conectionString = config.database.URL || "mongodb+srv://Bruno:UyEYM4rUvyB$TMQ@cluster0.kmdpr.mongodb.net/app-instagram?retryWrites=true&w=majority"

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
