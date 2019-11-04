var http = require("http")
var url = require("url")
http.createServer((req, res) => {
    if(req.url == "/favicon.ico"){
        return
    }
    // var result = 'http://localhost:3000/?username = 232&password=123&age=232'
    // var obj = url.parse(result, true)
    // var obj = url.format({
    //     protocol: 'http:',
    //     slashes: true,
    //     auth: null,
    //     host: 'localhost:3000',
    //     port: '3000',
    //     hostname: 'localhost',
    //     hash: null,
    //     search: '?username%20=%20232&password=232',
    //     query:'?username%20=%20232&password=232',
    //     pathname: '/',
    //     path: '/?username%20=%20232&password=123&age=232',
    //     href: 'http://localhost:3000/?username%20=%20232&password=123&age=232'
    // })
    var obj = url.resolve("http://localhost:3000", "/new")
    console.log(obj)
    res.end()
}).listen(3000, function () {
    console.log("链接成功") 
})