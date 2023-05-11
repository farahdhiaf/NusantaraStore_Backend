const router = require('express').Router();
const productController = require('../controllers/productController');
const authMiddleware = require('../middleware/auth');

router.get('/', productController.getAllProduct);
router.post('/', authMiddleware.auth, authMiddleware.isSeller, productController.createProduct);
router.put('/:id', authMiddleware.auth, authMiddleware.isSeller, productController.updateProduct);
router.delete('/:id', authMiddleware.auth, authMiddleware.isSeller, productController.deleteProduct);

module.exports = router;