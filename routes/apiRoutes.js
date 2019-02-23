const db = require("../models");

module.exports = function(app){
    app.get("/api/product", function(req, res){
        db.Product.findAll().then(function(){
            res.json(rows);
        }).catch(function(err){
            res.json(err)
        })
    })
}