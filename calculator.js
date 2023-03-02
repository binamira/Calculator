const express=require("express");
const app=express();
const bodyParser=require("body-parser");

app.use(bodyParser.urlencoded({extended:true}));

app.get("/",function (req,res) {

    res.sendFile(__dirname+"/bmiCalculator.html")
    
})

app.post("/",function (req,res) {

    var variable1=Number(req.body.weight);
    var variable2= Number((req.body.height)*(req.body.height));

    var n= variable1/variable2;

    res.send("your bmi is:"+n);


    
})

app.listen(3000,function () {

    console.log("server 3k has started")
    
})
