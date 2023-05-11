const router = require('express').Router();
const reviewController = require('../controllers/reviewController');

router.get('/', reviewController.getAllReview);
router.post('/', reviewController.createReview);
router.put('/:id', reviewController.updateReview);
router.delete('/:id', reviewController.deleteReview);

module.exports = router;