// req.url 请求 . 路径
var http = require("http")
var fs = require("fs")
http.createServer((req,res) => {
    if(req.url == "/favicon.ico"){
        return
    }

    console.log(req)
    res.end(req.toString())
}).listen(3000, function () {
    console.log("服务器挂起")
})