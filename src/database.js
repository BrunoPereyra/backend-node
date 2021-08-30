const mongoose = require("mongoose")
require("colors")

const conectionString = process.env.DBMONGO || "mongodb+srv://Bruno:UyEYM4rUvyB$TMQ@cluster0.kmdpr.mongodb.net/app-instagram?retryWrites=true&w=majority"

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
