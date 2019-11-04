var http = require("http")
var fs = require("fs")
http.createServer((req,res)=>{
    //普通获取数据的方式
    // fs.readFile("./static/1.txt",(err,data)=>{
    //     console.log(data)
    //     res.end(data)
    // })
    
    //通过流的方式去获取数据
    // 创建文件可读流
  var fsStream = fs.createReadStream("./static/1.txt") //source
    fsStream.pipe(res)
// data 接受数据 end 数据完成
}).listen(3000,function(){
    console.log("链接成功")
})