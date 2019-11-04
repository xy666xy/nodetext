//解决乱码
var http = require("http")
http.createServer((req,res) =>{
    //设置请求响应头 content-type 文本类型 text/html text/plain image/jpeg
    res.writeHead(200,{"Content-Type":"text/html;charset = utf-8"})
    res.end("dsa")
}).listen(3000, function () {
    console.log("服务器挂起")
})
