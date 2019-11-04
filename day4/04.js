//接收post 传输的数据
//中间件
var express = require("express")
var bodyParser = require("body-parser")
var app = express()
//使用中间件 use
//处理JSON数据 下面这条
app.use(bodyParser.json())
//处理字符串   下面这条
app.use(bodyParser.urlencoded({extended:false}))
app.get("/",(req,res)=>{
    res.end("首页")
})
app.post("/yjh",(req,res)=>{
    console.log(req.body)
    res.send({"data":"接受到post的数据为:"+req.body.username})
})
app.listen(3000)