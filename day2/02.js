//模块 module
/*
    common.js
  作用域：模块作用域
  exports module.exports
  抛出、暴露
  exports和module.exports的区别？
  1.两者默认都是空对象
  2.exports是指向moudle.exports的引用


  Es6 
    export export default
*/

//settimeout 属于宏任务:宏任务是主流，当js开始被执行的时候，就是开启一个宏任务，在宏任务中执行一条一条的指令；
//promise 属于微任务
// for(var i = 0;i < 5; i ++){
//     setTimeout(() =>{
//         console.log(i)
//     },0)
// }
var foo = require("./static/demo")
console.log(demo)
// console.log(module)