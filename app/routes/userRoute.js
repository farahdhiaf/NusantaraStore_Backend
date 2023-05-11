const express = require('express');
const userController = require('../controllers/userController');
const authMiddleware = require('../middleware/auth');

const router = express.Router();

router.post('/register', userController.register);
router.post('/login', userController.login);
router.post('/logout', authMiddleware.auth, userController.logout);
router.put('/:id', authMiddleware.auth, userController.updateUser);

module.exports = router;
