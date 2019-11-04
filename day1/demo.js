//初始服务器
// node 模块
//加载http模块
var http = require("http")
//创建服务器
var Service=http.createServer(function (req,res) {
    //req requst 请求 res response 响应
    //结束响应 => 响应客户端
    res.end("helo word")
})
//监听端口
Service.listen(3000, function () {
    console.log("服务器挂起")
})