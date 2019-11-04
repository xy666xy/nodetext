//fs file system 文件系统
//require 加载
var http = require("http")
var fs = require("fs")
http.createServer((req,res) => {
    //读文件
    fs.readFile("node.txt",function(err,data){
        console.log(data.toString())
        res.end(data)
    })
   
}).listen(3000, function () {
    console.log("服务器挂起")
})
