// Importing sequelize instance, the connexion to the db
import sequelize from '../instance';

// Importing DataTypes classe from sequelize in a variable
const { DataTypes } = require('sequelize');

// Defining the model to the database in a variable
const OrderProduct = sequelize.define('Order_Products', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
});

// Exporting the model variable we defined
export default OrderProduct;
