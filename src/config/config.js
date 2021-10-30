const dotenv = require("dotenv")
dotenv.config();


const config = {
    server: {
        PORT: process.env.PORT
    },
    database: {
        URL: process.env.DBMONGO,
    },
};

module.exports = config