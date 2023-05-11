const router = require('express').Router();
const shipmentController = require('../controllers/shipmentController');

router.get('/', shipmentController.getAllShipment);
router.post('/', shipmentController.createShipment);
router.put('/:id', shipmentController.updateShipment);
router.delete('/:id', shipmentController.deleteShipment);

module.exports = router;