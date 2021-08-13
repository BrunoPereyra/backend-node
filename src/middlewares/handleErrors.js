module.exports = (error, req, res) => {
    if (error.name === "CastError") {
        res.status(400).send({ error: 'id used is malformed' })
    } else if (error.name === "ValidationError") {
        res.status(409).send({ error: "alidationError" })
    } else if (error.name === "JsonWebTokenError") {
        res.status(409).send({ error: "token missing or invalid" })
    } else if (error.name === "TokenExpirerError") {
        res.status(409).send({ error: "token expired" })
    } else {
        console.error(error.name)
        res.status(500).end()
    }
}