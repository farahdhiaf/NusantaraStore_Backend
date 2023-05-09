const User = require('../models/user');


const createUser = async (username, email, password) => {
    const user = new User({
      username,
      email,
      password,
    });
  
    await user.save();
    return user;
  };
  
  const getUserByUsername = async (username) => {
    return User.findOne({ username });
  };
  
  const getUserByEmail = async (email) => {
    return User.findOne({ email });
  };
  
  module.exports = {
    createUser,
    getUserByUsername,
    getUserByEmail,
  };