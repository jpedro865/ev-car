// Importing sequelize instance, the connexion to the db
import sequelize from '../instance';

// Importing DataTypes classe from sequelize in a variable
const { DataTypes } = require('sequelize');

// Defining the model to the database in a variable
const Product = sequelize.define('Product', {
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
  description: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  model: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  brand: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  releaseYear: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
  mileage: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  new: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
});

// Exporting the model variable we defined
export default Product;
