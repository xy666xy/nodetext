//view
var express = require("express")
var app = express()
// var ejs = require(ejs)
//在express 里面设置模板引擎
app.set("view engine","ejs")
app.get("/",(req,res)=>{
    var list = ["tom","joke","rose"]
    res.render("index.ejs",{list:list})
    // res.send("4564")
})
app.listen(3000)