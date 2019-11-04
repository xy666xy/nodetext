var http = require("http")
var fs = require("fs")
var art = require("art-template")
http.createServer((req,res)=>{
    if(req.url == "/favicon.ico"){
        return
    }
    console.log(2)
    fs.readFile("./static/index.art",(err,data)=>{
        //获取art-template模板
        var template = data.toString()//buffer
        //render 模板 数据
        //定义数据
        var list = ["tom","jack","rose"]
        var htmlData = art.render(template,{a:list})
        res.end(htmlData)
    })
}).listen(3000)
