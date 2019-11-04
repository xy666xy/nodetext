//获取文件路径
var path = require("path")
console.log(path.resolve("F:\NODE","./aa"))
console.log(path.normalize("F:\NODE"))
console.log(path.isAbsolute("F:\NODE/demo1.js"))
console.log(path.join("/aa","/bb","//sss","//bb"))
console.log(path.dirname("F:\NODE"))
console.log(path.basename("F:\NODE"))
console.log(path.extname("F:\NODE\1.html"))

res.writeHead(200,{"Content-type":"text/html"})
//后端
res.setHeader("Access-Cortrol-Allow-Origin","*")
//前端
jsopan