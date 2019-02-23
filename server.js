const express = require("express");
const path = require('path')

const app = express();

const PORT = process.env.PORT || 8080;

const db = require('./models');

app.use(express.static(path.join(__dirname, './public')));
app.use(express.json());

require('./routes/htmlRoutes')
require('./routes/apiRoutes')


db.sequelize.sync({force: true}).then(function(){
app.listen(PORT, function (){
    console.log("App is listening on PORT" +PORT);
    });
});