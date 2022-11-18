// Importing sequelize instance, the connexion to the db
import sequelize from '../instance';

// Importing DataTypes classe from sequelize in a variable
const { DataTypes } = require('sequelize');

// Defining the model to the database in a variable
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    unique: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNULL: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  phoneNumber: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

// Exporting the model variable we defined
export default User;
