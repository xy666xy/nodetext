var express = require("express")
var router = express.Router()
var db = require("../db")
//解决跨域
router.all("*",(req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","*")
    res.setHeader("Access-Control-Allow-Methods","get,patch,post,delete,put,options")
    //继续执行后续代码
    next()
})
//注册
router.post("/reg",(req,res)=>{
    /**
     * 1.接受前端传输过来的数据
     * 2.判断用户是否存在
     * 3.存在提示用户已存在
     * 4.不存在则执行insert
     */
    // console.log(req.body)
    db.fi("student",{username:req.body.username},(err,data)=>{
        if(err) throw err
        else{
            if(data.length!=0){
                res.send({
                    status:1,
                    msg:"该用户已注册"
                })
            }else if(data.length==0){
                //注册
                var info = {
                    username:req.body.username,
                    password:req.body.password,
                    email:req.body.email,
                    phone:req.body.phone,
                    createAt:new Date(),
                    updateAt:new Date(),
                    isDelete:0
                }
                db.add("student",info,(err)=>{
                    if(err) throw err
                    res.send({
                        status:2,
                        msg:"注册成功",
                    })
                })
            }
        }
    })
})
//登录
router.post("/login",(req,res)=>{
    /**
     * 1.利用手机号去数据进行查询，判断该用户是否注册过
     * 2.如果未注册，则提示用户未注册
     * 3.注册则进行登录
     * 4.登录时还要判断用户名或密码是否正确
     */
    db.fi("student",{username:req.body.username},(err,data)=>{
        if(err) throw err
        else{
            if(data.length==0){
                res.send({
                    status:0,
                    msg:"该用户未注册"
                })
            }else{
                if(data[0].username==req.body.username&&data[0].password==req.body.password){
                   res.cookie('username',req.body.username,{maxAge:90000,httpOnly:true})
                    // console.log(session)
                    res.send({
                        status:1,
                        msg:"登录成功"
                    })
                }else{
                    res.send({
                        status:2,
                        msg:"用户名或密码错误"
                    })
                }
            }
        }
    })
})
//获取用户信息
router.get("/getUserinfo",(req,res)=>{
    /**
     * 1.获取已登录的状态
     * 2.利用缓存下来的用户进行数据库的查询
     * 3.返回对应用户的信息
     */
    console.log(req.cookies.username)
    db.fi("student",{username:req.cookies.username},(err,data)=>{
        if(err) throw err
        else{
            res.send({
                status:0,
                data:data[0]
            })
        }
    })
})
//用户信息
module.exports = router 