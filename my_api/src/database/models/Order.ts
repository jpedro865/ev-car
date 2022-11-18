// Importing sequelize instance, the connexion to the db
import sequelize from '../instance';
// Importing User, Products and OrderProduct models to implement association
import User from './User';
import Product from './Product';
import OrderProduct from './OrderProducts';

// Importing DataTypes classe from sequelize in a variable
const { DataTypes } = require('sequelize');

// Defining the model to the database in a variable
const Order = sequelize.define('Order', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  dateCreation: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

// Implementing has many association with User and Order
User.hasMany(Order);
// Implementing belongs to association with User and Products trough orderProduct
User.belongsToMany(Product, { through: OrderProduct });
Product.belongsToMany(User, { through: OrderProduct });

// Exporting the model variable we defined
export default Order;
