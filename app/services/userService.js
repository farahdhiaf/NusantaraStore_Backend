const userRepository = require('../repositories/userRepository');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const registerUser = async (data) => {
  //const { username, email, password } = data;
  
  const existingUserByUsername = await userRepository.getUserByUsername(data.username);
  if (existingUserByUsername) {
    throw new Error('Username already exists');
  }

  const existingUserByEmail = await userRepository.getUserByEmail(data.email);
  if (existingUserByEmail) {
    throw new Error('Email already exists');
  }

  const hashedPassword = await bcrypt.hash(data.password, 10);
  const User = await userRepository.createUser({
    username: data.username,
    email: data.email,
    password: hashedPassword,
    role: data.role
  });

  return User;
};

const loginUser = async (data) => {
  const { username, email, password, role } = data;

  const existingUserByUsername = await userRepository.getUserByUsername(data.username);
  if (!existingUserByUsername) {
    throw new Error('Username not found');
  }

  const existingUserByEmail = await userRepository.getUserByEmail(data.email);
  if (!existingUserByEmail) {
    throw new Error('Email not found');
  }

  const existingUserByRole = await userRepository.getUserByRole(data.role);
  if (!existingUserByRole) {
    throw new Error('Role is wrong');
  }

  if (existingUserByUsername.email !== email) {
    throw new Error('Email and username do not match');
  }

  if (existingUserByUsername.role !== role) {
    throw new Error('Role do not match');
  }

  const isPasswordValid = await bcrypt.compare(data.password, existingUserByUsername.password);
  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }

  const token = jwt.sign(
    { 
      userId: existingUserByUsername.id,
      username: existingUserByUsername.username,
      email: existingUserByUsername.email,
      role: existingUserByUsername.role
    },
    'JWT_SECRET'
  );
  //const token = jwt.sign({ userId: existingUserByUsername.id }, 'JWT_SECRET');
  return token;
};

const updateUser = async (data, id) => {
  try{
      const user = userRepository.updateUser(data, id);
      return user;
  }
  catch(err){
      throw err;
  }
}

module.exports = {
  registerUser,
  loginUser,
  updateUser
  //logoutUser,
};
