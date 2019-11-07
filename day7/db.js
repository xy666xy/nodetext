//封装数据库方式
const {MongoClient} = require("mongodb")
const {url} = require("./sit/url")
function ConnectDB(callback){
    //db => 数据库
    MongoClient.connect(url,(err,db)=>{
        if(err) throw err
        //创建或使用数据库
        var dbName = db.db("user")
        callback(db,dbName)
    })
}
//增 集合 回调函数
exports.add = function(collection,json,callback){
    //如何和connectDB进行连接
    ConnectDB((db,dbName)=>{
        dbName.collection(collection).insert(json,(err)=>{
            callback(err)
            //关闭数据库
            db.close()
        })
    })
}
//删除
exports.del = function(collection,json,callback){
    //如何和connectDB进行连接
    ConnectDB((db,dbName)=>{
        dbName.collection(collection).deleteOne(json,(err)=>{
            callback(err)
            //关闭数据库
            db.close()
        })
    })
}
//改
exports.upd = function(collection,json,gai,callback){
    //如何和connectDB进行连接
    ConnectDB((db,dbName)=>{
        dbName.collection(collection).update(json,gai,(err)=>{
            callback(err)
            //关闭数据库
            db.close()
        })
    })
}
//查
exports.fi = function(collection,json,callback){
    //如何和connectDB进行连接
    ConnectDB((db,dbName)=>{
        dbName.collection(collection).find(json).toArray((err,data)=>{
            callback(err,data)
            //关闭数据库
            db.close()
        })
    })
}