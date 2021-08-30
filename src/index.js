require("dotenv").config();
const express = require("express")
const app = express()
const morgan = require("morgan")
const cors = require("cors")
const notFound = require("./middlewares/notFound")
const handleErrors = require("./middlewares/handleErrors")
const useExtractor = require("./middlewares/useExtractor")
require("./database")


app.use(cors())
app.use(express.json())
app.use(morgan("dev"))


app.use("/post", useExtractor, require("./routes/post.routes"))
app.use("/login", require("./routes/login.routes"))
app.use("/signup", require("./routes/signup.routes"))
app.use("/getPost", useExtractor, require("./routes/get_post.routes"))
app.use("/userDelete", useExtractor, require("./routes/delete_user.routes"))
app.use("/Profile", useExtractor, require("./routes/profile.routes"))
app.use("/follow", useExtractor, require("./routes/follow.routes"))
app.use("/myStories", useExtractor, require("./routes/myStories.routes"))
app.use("/getStories", useExtractor, require("./routes/gethistories.routes"))
app.use("/userSearch", useExtractor, require("./routes/search_engine.routes"))

app.use(notFound)
app.use(handleErrors)


const PORT = process.env.PORT || 3001

app.listen(PORT, ()=> {
  console.log(process.env.ASD);
  console.log(`listen on port ${PORT}`.bgWhite.black);
})
// var server = require('http').createServer(app)
// var io = require('socket.io')(server,{
//   cors: {
//     origin: "http://localhost:3000",
//     methods: ["GET", "POST","PUT","DELETE"]
//   }
// })

// _______________________________________________

 // io.on("connection", (socket) => {
  //     // console.log("Un cliente se ha conectado".bgBlue);
  //   });

// server.listen(PORT, () => {
//     console.log(`listen on port ${PORT}`.bgWhite.black);
// })  