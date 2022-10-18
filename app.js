let server = require("http").createServer((req,res) => {
    res.end("done")
})
server.listen(process.env.PORT || 5000)
