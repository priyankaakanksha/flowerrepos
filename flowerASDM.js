var express=require('express');
var app=express();
var flowerController=function(req,res){
var flowers=[{id:1,name:"rose"},{id:2,name:"lotus"}];
res.send(flowers);
};
app.get('/flowers',flowerController);
var server=app.listen(8086,function() {

var host=server.address().address;
var port=server.address().port;
console.log("example listening at http://localhost:8086",host,port);

} 
)