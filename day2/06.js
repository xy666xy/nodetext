var http = require("http")
var form = require("formidable")
var path = require("path")
var sd = require("silly-datetime")
var fs = require("fs")
http.createServer((req,res)=>{
    if(req.url == "/dopost"){

       var fm = form.IncomingForm()
       //fields 文本域 files 文件域
       fm.uploadDir = "./upload/"
       fm.parse(req,function(err,fields,files){
            var low = files.pic.path
            var extname = path.extname(files.pic.name)
            var time = sd.format(new Date(),"YYYYMMDDHHmmss")
            var fanishon = "./upload/" + time +extname
            console.log(fanishon)
            fs.rename(low,fanishon,(err)=>{
                if(err) throw err
            })
            res.end("success")
       })
    // res.end("success")
    }
    
}).listen(3000)