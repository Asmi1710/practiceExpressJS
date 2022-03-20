const express =require ('express');
const bodyParser = require("body-parser");
const app= express();
const port= 3000;
app.use(bodyParser.urlencoded({extended: true}));


//calculating sum

app.get ("/", function (req,res) { 
    res.sendFile(__dirname+"/index.html");

});

app.post("/", function (req,res){
    //console.log (req.body);
    //res.send("Thanks for input");

    var num1= Number (req.body.num1);
    var num2= Number (req.body.num2);
    var result = num1 + num2;
    res.send ("The sum of given digits is "+ result);

})

//bmi calculator

app.get ("/bmicalculator", function (req,res) {
    
    res.sendFile(__dirname+ "/bmiCalculator.html");
});


app.post("/bmicalculator", function (req,res){
    //console.log (req.body);
    //res.send("Thanks for input");

    var height= Number (req.body.height);
    var weight= Number (req.body.weight);
    var result = weight/(height*height);
    if (result>25)
        res.send ("Your BMI is "+ result+". Your are OVERWEIGHT.");
    else if (result>=18.5)
        res.send ("Your BMI is "+ result+". Your are HEALTHY.");
    else
        res.send ("Your BMI is "+ result+". Your are UNDERWEIGHT.");

})


app.listen (port, function (){
    console.log("Server is running now...");
});

// $("button").click(function(){

// });