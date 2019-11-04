var http = require("http")
var ejs = require("ejs")
var fs = require("fs")
http.createServer((req, res) => {
    if(req.url == "/favicon.ico"){
        return
    }
    // render 渲染 第一个参数 代表的是模板 第二个参数代表数据
    // compile编译               模板str        数据
    // template 模板
    /**
     * <% %> 流程控制标签
     * <%=%> 输出
     * <%#%> 注释
     * <%_%> 去除前面的空格
     * <% _%>去除后面的空格
     * <%-%>语句解析  转译结构到模板
     * <include />包含
     *    
     */
    // var str = 6
    // var data = ejs.render("<% = str%>")
    fs.readFile("./index.ejs", (err, data) => {
        var template = data.toString()
        var list = ["vue","react","node"]
        var result = ejs.render(template,{list:list})
        //response 响应前端请求
        res.end(result,function(){
            console.log("链接成功")
        })
    })

}).listen(3000)
// console.log(ejs)