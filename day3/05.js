//buffer 二进制转换 缓存区
/**
 * 什么是buffer
 * 从类型说，就是一个类数组
 * 从内存来说，就是开辟新的内存空间     
 * 作用：
 * 处理二进制数据：
 * 解决数据传输过大
 * 案例：文件流 事件流 Tcp
 * 别名：缓存区（等候区）
 * 什么是二进制数据？ 八进制 十六进制
 * 返回 0和1
 * 0000 11
 * 创建buffer?
 * new buffer() 废弃
 * 因为buffer 是一个全局对象，所以不需要通过require加载
 * buffer可以传输的类型？
 * string Buffer,Arraybuffer,Array, Array-link Object
 * buffer下面有哪些方法？
 * toJSon toString slice contact length 
 * 字节 bit byte 
 * buffer的编码类型
 * utf8 base64 hex Ascill unicode
 * buffer和cache的区别？
 * buffer相当于临时居住地 cache永久的家
 */
//第一种定义buffer的方式
//Buffer.from 把字符串转换成Buffer
var buf = Buffer.from("node") 
// <Buffer 6e 6f 64 65>
// var buf = Buffer.from() 下面这条
//返回一个已初始化的数据，防止生成新的数据包含旧数据
// var buf = Buffer.alloc(10)
//不安全 不推荐使用  下面这条   
// var buf = Buffer.allocUnsafe(10) 
console.log(buf.toString("base64"))
