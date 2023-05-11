const jwt = require('jsonwebtoken');

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(' ')[1];

    if (!token) {
      return res.status(401).json({
        status: 'error',
        error: 'Authentication failed',
      });
    }

    const decodedToken = jwt.verify(token, 'JWT_SECRET');
    req.user = decodedToken;
    console.log(req.user);
    

    next();
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      data: error.message,
    });
  }
};

const isSeller = (req, res, next) => {
  try{
    //console.log(req.user.role);
    if (!req.user || req.user.role !== 'seller') {
      return res.status(403).json({
        status: 'error',
        error: 'User is not a seller',
      });
    }
    next();
  }catch (error) {
    return res.status(500).json({
      status: 'error',
      error: error.message,
    });
  }
};

module.exports = {
  auth,
  isSeller,
};
