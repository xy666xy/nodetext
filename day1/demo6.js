var http = require("http")
var url = require("url")

http.createServer((req,res) =>{
    if(req.url =="/favicon.ico"){
        return
    }
    // console.log(url.parse(req.url))
    // console.log(req.params)
    var obj = url.parse(req.url,true).query
    console.log(obj)
    res.end()
}).listen(3000,function(){
    console.log("服务器挂起")
})