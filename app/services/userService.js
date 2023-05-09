const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRepository = require('../repositories/userRepository');

const registerUser = async (username, email, password) => {
  const existingUserByUsername = await userRepository.getUserByUsername(username);
  if (existingUserByUsername) {
    throw new Error('Username already exists');
  }

  const existingUserByEmail = await userRepository.getUserByEmail(email);
  if (existingUserByEmail) {
    throw new Error('Email already exists');
  }

  const hashedPassword = await bcrypt.hashSync(password, 10);
  const user = await userRepository.createUser(username, email, hashedPassword);
  return user;
};

const loginUser = async (username, password) => {
  const user = await userRepository.getUserByUsername(username);
  if (!user) {
    throw new Error('User not found');
  }

//   const isEmailValid = await bcrypt.compare(email, user.email);
//   if (!isEmailValid) {
//     throw new Error('Invalid email');
//   }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }

  const token = jwt.sign({ userId: user._id }, 'JWT_SECRET');
  return token;
};

module.exports = {
  registerUser,
  loginUser,
};
