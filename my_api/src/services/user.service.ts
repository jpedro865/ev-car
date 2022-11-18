import { Request } from 'express';
import User from '../database/models/User';

const bcrypt = require('bcrypt');

require('dotenv').config();

const jwt = require('jsonwebtoken');

// creating a new user
async function createUser(req: Request) {
  const created = await User.create(req.body);
  return created;
}

// Update an existing user relative to ID
async function updateUser(req: Request) {
  const { id } = req.params;
  const updated = await User.update(req.body, {
    where: {
      id,
    },
  });
  return updated;
}

// delete function relative to ID
async function deleteUser(req: Request) {
  const { id } = req.params;
  const deleted = await User.destroy({
    where: {
      id,
    },
  });
  return deleted;
}

// User Login
async function loginUser(req: Request) {
  const userExists = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  const passValid = bcrypt.compareSync(req.body.password, userExists.password);
  // Creating a JWT
  if (userExists && passValid) {
    const token = jwt.sign({
      id: userExists.id,
    }, process.env.SECRET_KEY, {
      expiresIn: '24h',
    });
    return token;
  }
  return 'The password does not match this account';
}

// User registration
async function registerUser(req: Request) {
  const userNameExists = await User.findOne({
    where: {
      userName: req.body.userName,
    },
  });
  const emailExists = await User.findOne({
    where: {
      email: req.body.email,
    },
  });
  // verification of a potential existing account
  if (!emailExists && !userNameExists) {
    req.body.password = await bcrypt.hash(req.body.password, 8);
    await createUser(req);
    return 'User created succesfully';
  }
  if (emailExists) {
    return 'This email is already linked to an account';
  }
  return 'This userName already exists';
}

export {
  createUser, updateUser,
  deleteUser, registerUser,
  loginUser,
};
