const userService = require("../services/userService");

const register = async (req, res) => {
  const { username, email, password } = req.body;
  try {
    if (!username || !email || !password) {
      return res.status(400).json({
        status: "error",
        message: "Data required",
        data: null,
      }); // Data required error
      //   throw new Error('Data required'); // Throw error if required data is missing
    }
    const user = await userService.registerUser(username, email, password);
    return res.status(201).json({
      status: "success",
      message: "User created successfully",
      data: user,
    });
  } catch (err) {
    if (
      err.message === "Username already exists" ||
      err.message === "Email already exists"
    ) {
      return res.status(409).json({ 
        status: 'error',
        error: err.message
    }); // User already exists error
    } else {
      return res.status(500).json({ 
        status: 'error',
        message: "Internal Server Error",
        data: err,
    }); // Internal server error
    }
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username || !password) {
      return res.status(400).json({
        status: "error",
        message: "Data required",
        data: null,
    }); // Throw error if required data is missing
    }
    const token = await userService.loginUser(username, password);
    return res.status(200).json({ 
        status: 'success',
        message: 'User logged in successfully',
        data: token });
  } catch (err) {
    if (
      err.message === "User not found" ||
      err.message === "Invalid password" 
    ) {
      return res.status(401).json({ 
        status: 'error',
        error: err.message }); // Unauthorized error 
    } else {
      return res.status(500).json({ 
        status: 'error',
        message: "Internal Server Error",
        data: err }); // Internal server error
    }
  }
};

module.exports = {
  register,
  login,
};
