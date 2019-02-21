const express = require("express");
const path = require('path')

const app = express();

const PORT = 8080;

app.use(express.static(path.join(__dirname, './public')))

require('./routes/htmlRoutes')
require('./routes/apiRoutes')


app.listen(PORT, function (){
    console.log("App is listening on PORT" +PORT);
});