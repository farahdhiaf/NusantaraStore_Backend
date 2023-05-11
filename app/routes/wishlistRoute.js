const router = require('express').Router();
const wishlistController = require('../controllers/wishlistController');

router.get('/', wishlistController.getAllWishlist);
router.post('/', wishlistController.createWishlist);
router.put('/:id', wishlistController.updateWishlist);
router.delete('/:id', wishlistController.deleteWishlist);

module.exports = router;