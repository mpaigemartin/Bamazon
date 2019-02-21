module.exports = function(app){
const Product = {
    product_name: {
        type = Sequelize.STRING
    },
    department_name: {
        type = Sequelize.STRING
    },
    price: {
        type = Sequelize.DECIMAL(10,2)
    },
    stock_quantity: {
        type = Sequelize.INTERGER
    },
    }
    return Product;
}
