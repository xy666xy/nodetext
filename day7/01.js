var express = require("express")
var app = express()
var db = require("./db")
console.log(db)
    app.get("/add",(req,res)=>{
        db.add("student",{"username":"jack","age":20},(err)=>{
            if(err) throw err
            res.send({"data":"注册成功"})
        })
    })
    app.get("/del",(req,res)=>{
        db.del("student",{"username":"jack","age":20},(err)=>{
            if(err) throw err
            res.send({"data":"注册成功"})
        })
    })
    app.get("/upd",(req,res)=>{
        db.upd("student",{"username":"tom","age":"22"},{$set:{"username":"xxx","age":"24"}},(err)=>{
            if(err) throw err
            res.send({"data":"注册成功"})
        })
    })
    app.get("/fi",(req,res)=>{
        db.fi("student",{},(err,data)=>{
            if(err) throw err
            res.send({"data":data})
        })
    })
    

app.listen(3000)