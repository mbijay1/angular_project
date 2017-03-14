var express =require('express');
var app = express();
//Hosting static files
app.use(express.static(__dirname + '/'));
//get request call
app.get("/",function(req,res){
        res.redirect('/views/index.html');
        });
app.listen(4200,function(req,res){
    console.log("server running at port 4200:localhost:4200");
});