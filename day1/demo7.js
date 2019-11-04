var http = require("http")
var url = require("url")
http.createServer((req,res) =>{
  res.writeHead(200,{"content-type":"text/html;charset = utf-8"})
    //url.parse().query 可以处理get请求
    var obj = url.parse(req.url,true).query
    res.end("接收的username是："+obj.username)
}).listen(3000,function(){
    console.log("链接成功")
})