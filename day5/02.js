var express = require("express")
var app = express()
var path = require("path")
//cookie中间件
var cookieParsr = require("cookie-parser")
//让express 和cookie建立联系
app.use(cookieParsr())
// console.log(cookieParsr)
var static = path.resolve(__dirname,"public")
app.use(express.static(static))
app.get("/",(req,res)=>{
    console.log("首页中获取:"+req.cookies)
    res.send({"data":"login中的cookie为:"+req.cookies})
})
//设置 setCookie
app.get("/login",(req,res)=>{
    var obj = req.query.username
   
    // req.cookies.cookiename = obj
    // 设置cookie maxAge 过期时长 httpOnly 只允许在服务端修改cookie值
    //signed 是否生成签名 domin 域名 secure
    res.cookie("username",obj,{maxAge:90000,httpOnly:true})
    res.send({"data":obj})
})
//获取 getCookie
app.get(".list",(req,res)=>{
    console.log("获取"+req.cookies.cookiename)
    res.send()
})
/**
 * 什么是cookie：是存在于访问者计算机中的一个变量 ，便于访问同一域名或服务器存储的用户信息
 * cookie 的优缺点：协助服务端承载压力 存在过期时间 不便于攻击者进行攻击 
 * 缺点：有长度的限制，安全性比较低 存储量小
 * cookie存储的大小？4kb
 * cookie的安全性?相对比较低 如何解决？ 生成签名
 * 
 * cookie的特点？
 * cookie保存在浏览器本地 cookie默认不加密，用户可以之间看到 
 * cookie支持被删除 cookie便于用于攻击
 * cookie易被篡改
 */
app.listen(3000,function(){
    console.log("链接成功：")
})