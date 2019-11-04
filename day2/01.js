var queryString = require("querystring")
// var obj = queryString.parse("name=tom&sex=0&id=1")
var obj = queryString.stringify({name:'tom',sex:'0',id:'1'})
// var obj = queryString.escape("name=李威威")
// var obj = queryString.unescape("name%3D%E6%9D%8E%E5%A8%81%E5%A8%81")

console.log(obj)