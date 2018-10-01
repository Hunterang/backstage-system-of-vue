var express=require('express');
var app=express();
// var router=express.Router();


app.post('/login',function(req,res){
  var arg=req.body;
  console.log(arg);
  res.send('收到了登录信息');
})

module.export = app;
