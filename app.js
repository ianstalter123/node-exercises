var express = require("express")

var app = express();

app.set("view engine", "ejs")

app.get("/", function(req,res){
 res.render("index");
});

app.listen(3000, function(){
 console.log("Server starting on port 3000");
})

app.get("/add/:num1/:num2", function(req,res){
	var sum = Number(req.params.num1) + Number(req.params.num2) ;
 res.render("math", {sum:sum})
});
app.get("/multiply/:num1/:num2", function(req,res){
	var sum2 = Number(req.params.num1) * Number(req.params.num2) ;
 res.render("math", {sum:sum2})
});
app.get("/divide/:num1/:num2", function(req,res){
	var sum3 = Number(req.params.num1) / Number(req.params.num2) ;
 res.render("math", {sum:sum3})
});
app.get("/subtract/:num1/:num2", function(req,res){
	var sum4 = Number(req.params.num1) - Number(req.params.num2) ;
 res.render("math", {sum:sum4})
});

