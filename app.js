let server = require("http").createServer((req,res) => {
    res.end("our backend")
})
let fs = require("fs")

fs.writeFile("/abux.txt","text",() =} console.log("text created"))
server.listen(process.env.PORT || 5000) 