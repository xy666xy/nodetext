/**
 * 流的类型？ 四种
 * readable stream 可读流 writable stream 可写流
 * duplex 双工流（可读可写） Transform 转换流
 * 数据的压缩 zlib
 */
var fs = require("fs")
//压缩模块 zlib
var zlib = require("zlib")
var readStream = fs.createReadStream("./static/1.txt.gz")
var writeStream = fs.createWriteStream("./static/1.txt")
//流支持链式操作 zlib.createGzip() 创建压缩包 pipe 管子
readStream.pipe(zlib.createGzip()).pipe(writeStream)