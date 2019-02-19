const express = require("express");

const app = express();

const PORT = 8080;

app.get("/", function(req, res){
    res.json();
});




app.listen(PORT, function (){
    console.log("App is listening on PORT" +PORT);
});