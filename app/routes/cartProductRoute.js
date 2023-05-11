const router = require('express').Router();
const cartProductController = require('../controllers/cartProductController');

router.get('/', cartProductController.getAllCartProduct);
router.post('/', cartProductController.createCartProduct);
router.put('/:id', cartProductController.updateCartProduct);
router.delete('/:id', cartProductController.deleteCartProduct);

module.exports = router;