const db = require('../models')

    const items = [
    {
        product_name: "Diablo 3",
        department_name: "Video Games",
        price: 59.99,
        stock_quantity: 5
    },
    {
        product_name: "Dragon's Lair",
        department_name: "Video Games",
        price: 449.99,
        stock_quantity: 1
    },
    {
        product_name: "Fallout 4",
        department_name: "Video Games",
        price: 59.99,
        stock_quantity: 11
    },
    {
        product_name: "Final Fantasy XV",
        department_name: "Video Games",
        price: 34.99,
        stock_quantity: 218
    },
    {
        product_name: "Frogger",
        department_name: "Video Games",
        price: 8.99,
        stock_quantity: 25
    },
    {
        product_name: "Joust",
        department_name: "Video Games",
        price: 2.99,
        stock_quantity: 15
    },
    {
        product_name: "Killer Instinct",
        department_name: "Video Games",
        price: 29.99,
        stock_quantity: 80
    },
    {
        product_name: "Portal 2",
        department_name: "Video Games",
        price: 19.99,
        stock_quantity: 9
    },
    {
        product_name: "Super Burger Time",
        department_name: "Video Games",
        price: 6.99,
        stock_quantity: 18
    },
    {
        product_name: "Sugar Rush",
        department_name: "Video Games",
        price: 289.99,
        stock_quantity: 2
    },
    {
        product_name: "World of Warcraft",
        department_name: "Video Games",
        price: 59.99,
        stock_quantity: 68
    }
]

db.sequelize.sync({force: true}).then(function(){
    db.Product.bulkCreate(items)
    .then(function(rows){
        console.log("\n\nInserted into database\n\n");
        db.sequelize.close();
    }) .catch(function(err){
        console.log('\n\nError:', err);
    });
});
