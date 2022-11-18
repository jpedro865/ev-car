const { Sequelize } = require('sequelize'); // calling sequelize
require('dotenv').config(); // see .env.example to create your own .env file

// connexion to dataBase with .env variables
const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: process.env.DB_HOST,
    dialect: process.env.DB_DIALECT,
  },
);

// Exporting sequelize instance
export default sequelize;
