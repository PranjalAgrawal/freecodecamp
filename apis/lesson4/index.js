var express =require("express")
var app=express();

app.get("/",function(req,res){
    res.send("Hello Universe")
})

app.listen(3000,function(err,data){
    console.log("App listeing at port 3000")
})