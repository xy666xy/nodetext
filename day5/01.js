//public
var express =require("express")
var path = require("path")
var app = express()
//静态资源中间件  express.static 中间件必须通过use去使用这样才能保证中间件
// 和express 进行关联
var static = path.resolve(__dirname,"./static/public")
//console.log(static)
app.use(express.static(static)) 
//直接访问写死的路径
//app.use(express.static(./public))

app.get("/",async(req,res)=>{
    // app.writeHead(200,{"Content-Type":"text/html;charset = utf-8"})
    res.end("服务搭建成功")
})
app.listen(3000,function(){
    console.log("链接成功")
})