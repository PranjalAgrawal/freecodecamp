var express= require('express')
var app=express()

app.get("/",function(req,res){
    //console.log(' __dirname ', __dirname);
    res.sendFile(__dirname + "/index.html");
})

app.listen(3000, function(err,data){
    if(!err)
    {
        console.log("app listening at port 3000")
    }
})

