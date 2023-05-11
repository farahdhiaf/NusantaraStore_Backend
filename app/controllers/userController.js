const userService = require('../services/userService');

const register = async (req, res) => {
  try {
    const User = await userService.registerUser(req.body);
    return res.status(201).json({
      status: 'success',
      message: 'User created successfully',
      data: User
    });
  } catch (err) {
    if (
      err.message === 'Username already exists' ||
      err.message === 'Email already exists'
    ) {
      return res.status(409).json({ 
        status: 'error',
        error: err.message
      });
    } else {
      return res.status(500).json({ 
        status: 'error',
        error: err.message
        // message: 'Internal Server Error',
        // data: err
      });
    }
  }
};

const login = async (req, res) => {
  try {
    const token = await userService.loginUser(req.body);
    return res.json({ 
      status: 'success',
      message: 'User logged in successfully',
      data: token
    });
  } catch (err) {
    if (
      err.message === 'User not found' ||
      err.message === 'Invalid password' 
    ) {
      return res.status(401).json({ 
        status: 'error',
        error: err.message
      });
    } else {
      return res.status(500).json({ 
        status: 'error',
        //message: 'Internal Server Error',
        data: err.message
      });
    }
  }
};

const logout = async (req, res) => {
  try {
    const user = req.user; // Mendapatkan informasi pengguna dari objek permintaan

    // Hapus token pengguna atau lakukan tindakan logout lainnya
    // ...

    res.clearCookie('token'); 

    return res.status(200).json({
      status: 'success',
      message: 'Logout successful',
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      error: error.message,
    });
  }
};

const updateUser = (req, res) => {
  userService.updateUser(req.params.id, req.body)
    .then((user) => {
      if(!user){
          res.status(400).json({
              status: 'error',
              message: 'User not found',
              data: user
          })
      }
      res.status(200).json({
        status: "success",
        message: "User updated successfully",
        data: user,
      });
    })
    .catch((error) => {
      res.status(500).json({
        status: "error",
        message: error.message,
        data: error,
      });
    });
};


module.exports = {
  register,
  login,
  logout,
  updateUser
};

