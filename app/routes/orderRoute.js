const router = require('express').Router();
const orderController = require('../controllers/orderController');

router.get('/', orderController.getAllOrder);
router.post('/', orderController.createOrder);
router.put('/:id', orderController.updateOrder);
router.delete('/:id', orderController.deleteOrder);

module.exports = router;