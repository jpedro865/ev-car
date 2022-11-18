// Importing sequelize instance
import sequelize from './instance';
// Importing all models
import User from './models/User';
import Category from './models/Categories';
import Product from './models/Product';
import Order from './models/Order';

// checking connexion to database
// run script 'dbcheck' to check your connexion
async function connexion() {
  console.log(process.env.DB_NAME);
  try {
    await sequelize.authenticate();
    console.log('connection succefull');
  } catch (error) {
    console.error('unable to connect:', error);
  }
}

// Syncing function to create Users table in db
async function migrationUsers() {
  await User.sync();
}

// Syncing function to create Categories table in db
async function migrationCategory() {
  await Category.sync();
}

// Syncing function to create Products table in db
async function migrationProduct() {
  await Product.sync();
}

// Syncing function to create Orders table in db
async function migrationOrder() {
  await Order.sync();
}

// calling all syncing functions
async function migration() {
  await migrationUsers();
  await migrationCategory();
  await migrationOrder();
  await migrationProduct();
}

// Function to check param given by user
// If param is dbcheck program only runs connexion function
// Otherwise runs connexion and migration functions
if (process.argv[2] === 'dbcheck') {
  connexion();
} else {
  connexion();
  migration();
}
