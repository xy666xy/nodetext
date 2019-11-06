var express = require("express")
var app = express()
var mongoClient = require("mongodb").MongoClient
app.get("/add", (req, res) => {
    var url = 'mongodb://127.0.0.1:27017'
    mongoClient.connect(url, (err, db) => {
        if (err) throw err
        //创建数据库 
        var dbName = db.db("test")
        //链接集合
        // 增
        dbName.collection("hjk").insert({"username":"tom","age":12},(err)=>{
            if(err) throw err
            res.send({"data":"插入成功"})
        })
        // 删
        // dbName.collection("hjk").deleteOne({"username":"joke"},(err)=>{
        //     if(err) throw (err)
        //     res.send("删除成功")
        // })
        // 改
        // dbName.collection("hjk").updateOne({"username":"tom"},{$set:{"username":"joke"}},(err)=>{
        //     if(err) throw err
        //     res.send("success")
        // })
        // // 查
        // dbName.collection("hjk").find().toArray((err, data) => {
        //     if (err) throw err
        //     console.log(data)
        //     res.send({ "data": data })
        //     // 关闭数据库
        //     db.close()
        // })
    })
})

app.listen(3000)