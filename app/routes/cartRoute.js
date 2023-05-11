const router = require('express').Router();
const cartController = require('../controllers/cartController');

router.get('/', cartController.getAllCart);
router.post('/', cartController.createCart);
router.put('/:id', cartController.updateCart);
router.delete('/:id', cartController.deleteCart);

module.exports = router;