const path = require("path");

console.log(__dirname);

module.exports = function(app) {


  app.get("/", function(request, response) {
    response.sendFile(path.join(__dirname, "./public/index.html"));
  });

  app.get("*", function(request, response) {
    response.sendFile(path.join(__dirname, "./public/index.html"));
  });

};
