const Message = require("./models/message")

module.exports = (io) => {
    io.on("connection", (socket) => {
        socket.on("client:newmsj", async ({ msjUser, nameUser, chatName }) => {

            if (typeof msjUser !== 'string') {
                console.log("type date the msjUser error");
            } else if (msjUser.length >= 1) {
                let newMessage = new Message({
                    message: msjUser,
                    nameUser: nameUser,
                    chatName: chatName,
                    date: new Date()
                })
                newMessage.save()
            }
        })
        socket.on("client:showChat", async () => {
            try {
                await Message.find({}, (err, result) => {
                    if (err) {
                        io.emit("server:showChat", {
                            err: "resource not found"
                        })
                    } else if (result) {
                        io.emit("server:showChat", {
                            result
                        })
                    }
                })
            } catch (error) {
                console.log(error, "este es el error");
            }
        })
    });
}