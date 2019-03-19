var express=require("express")
var app=express();

app.get("/",function(req,res){
    res.send("Hey")
})

app.listen(3000,function(err,data){
    if(!err)
    {
        console.log("Working at port 3000")
    }
})