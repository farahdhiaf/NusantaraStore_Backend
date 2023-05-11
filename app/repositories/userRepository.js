const { Op } = require('sequelize');
const { user, Sequelize } = require('../models');


const createUser = async (req, res) => {
    const User = await user.create({
      username: req.username,
      email: req.email,
      password: req.password,
      role: req.role,
    });
    return User;
  };
  
  const getUserByUsername = async (username) => {
    return user.findOne({ where: {username} });
  };
  
  const getUserByEmail = async (email) => {
    return user.findOne({ where: {email} });
  };

  const getUserByRole = async (role) => {
    return user.findOne({ where: {role }});
  };

  const getUserById = async (id) => {
    return user.findOne({ where: {id} });
  };

  const updateUser = (id, data) => {
    return user.update(data, {
        where: {
            id: id
        }
    })
}
  
  module.exports = {
    createUser,
    getUserByUsername,
    getUserByEmail,
    //logoutUser,
    getUserById,
    updateUser,
    getUserByRole
  };