exports.list=function(req,res){
  var arg=req.body;
  console.log(arg);
  res.send('收到了注册信息');
}
