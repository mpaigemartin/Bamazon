const express = require("express");
const path = require("path");

const PORT = process.env.PORT || 8080;

const db = require("./models");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(path.join(__dirname, "./public")));

require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

db.sequelize.sync().then(function() {
  app.listen(PORT, function() {
    console.log("App is listening on PORT" + PORT);
  });
});
