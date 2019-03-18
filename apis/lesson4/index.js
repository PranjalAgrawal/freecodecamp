var express =require("express")
var app=express();

app.get("/",function(res,req){
    res.file("Hello Universe")
})

app.listen(3000,function(err,data){
    console.log("App listeing at port 3000")
})