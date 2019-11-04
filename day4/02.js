var express = require("express")
var app = express()
//get指代get 请求
app.get("/get",(req,res)=>{
    console.log(arguments)
    res.send({"success":"get请求成功","data":[{"name":"tom","age":20}]})
})

app.post("/list",(req,res)=>{
    res.send({"success":"post请求成功","data":[{"name":"tom","age":20}]})
})
//all 代表的是所有
//什么情况下会使用app.all 解答：控制全局的功能是会使用
app.all("/",(req,res)=>{
    res.send({"data":"数据请求"})
})
app.listen(3000)
