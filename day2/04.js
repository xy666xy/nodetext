var fs = require("fs")
var http = require("http")
http.createServer((req,res) =>{
    if(req.url =="/favicon.ico"){
        return
    }
    // fs.readFile("./static/demo2.txt",(err,data)=>{
    //     res.end(data)
    // })
    //读文件 同步读取
    // var a = fs.readFileSync("./static/demo2.txt")
    // res.end(a)


    //写文件 writeFile
    // fs.writeFile("./static/demo2.txt","啊啊啊啊啊啊啊啊啊啊",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    //     res.end("写入成功")
    // })


    // 追加内容 {flag:a} append
    // fs.appendFile("./static/demo2.txt","官方发生大幅度股份的范德萨范德萨",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("append success")
    // })

    //创建目录
    // fs.mkdir("./aa",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("success")
    // })

    // 创建文件
    // fs.writeFile("./aa/123.txt","啊啊啊啊啊啊",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("success")
    // })

    // 删除文件
    // fs.unlink("./static/demo3.txt",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("success")
    // })

    // //删除目录
    // fs.rmdir("./aa",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("success")
    // })

    //判断文件状态
    // fs.stat("./static",(err,stats)=>{
    //     // console.log(stats.isDirectory())   /**true 是文件 */
    //     console.log(stats.isFile())
    //     res.end("22")
    // })

     //该名称
    // fs.rename("./static/1.txt","./static/demo2.txt",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("change name success")
    // })

    // 判断目录文件
    // fs.statSync("./static",(err)=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("success")
    // })
    
    //复制文件 copyFile
    //打开文件
    //关闭文件
    /**
     * 作业：
     * 1.判断当前目录(static)里面的内容是文件还是目录
     * 2.如果是目录则输出目录
     */
}).listen(3000)