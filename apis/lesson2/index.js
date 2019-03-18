var express=require('express')
var app=express();

app.listen(3000, function(err,data){
    if(!err)
    {
        console.log("App listening at port 3000")
    }
})
app.get("/",function(req,res){

    res.send("Response String")
})
