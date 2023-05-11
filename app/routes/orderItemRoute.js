const router = require('express').Router();
const orderItemController = require('../controllers/orderItemController');

router.get('/', orderItemController.getAllOrderItem);
router.post('/', orderItemController.createOrderItem);
router.put('/:id', orderItemController.updateOrderItem);
router.delete('/:id', orderItemController.deleteOrderItem);

module.exports = router;