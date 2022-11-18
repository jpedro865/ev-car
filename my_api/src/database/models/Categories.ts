// Importing sequelize instance, the connexion to the db
import sequelize from '../instance';
// Importing Product model to initialize association between models
import Product from './Product';

// Importing DataTypes classe from sequelize in a variable
const { DataTypes } = require('sequelize');

// Defining the model to the database in a variable
const Categories = sequelize.define('Categories', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Implementing association between categories and products
Categories.hasMany(Product);

// Exporting the model variable we defined
export default Categories;
