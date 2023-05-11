const reviewService = require('../services/reviewService')

const getAllReview = (req, res) => {
    reviewService.getAllReview()
    .then(review => {
        if(!review){
            res.status(400).json({
                status: 'error',
                message: 'Review not found',
                data: review
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Success get all list review',
            data: review
        })
    })
    .catch(err => {
        res.status(500).json({
            status: 'error',
            message: 'internal server error',
            data: err
        })
    })
}

const createReview = (req, res) => {
    const data = req.body;
    reviewService.createReview(data)
    .then(review => {
        if(!review){
            res.status(400).json({
                status: 'error',
                message: 'Failed create review',
                data: review
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Success create review',
            data: review
        })
    })
    .catch(err => {
        res.status(500).json({
            status: 'error',
            message: 'internal server error',
            data: err
        })
    })
}

const updateReview = (req, res) => {
    reviewService.updateReview(req.params.id, req.body)
      .then((review) => {
        if(!review){
            res.status(400).json({
                status: 'error',
                message: 'Review not found',
                data: review
            })
        }
        res.status(200).json({
          status: "success",
          message: "review updated successfully",
          data: review,
        });
      })
      .catch((error) => {
        res.status(500).json({
          status: "error",
          message: error.message,
          data: error,
        });
      });
  };


const deleteReview = (req, res) => {
    reviewService.deleteReview(req.params.id)
      .then((review) => {
        if(!review){
            res.status(400).json({
                status: 'error',
                message: 'Review not found',
                data: review
            })
        }
        res.status(200).json({
          status: "success",
          message: "review deleted successfully",
          data: review,
        });
      })
      .catch((error) => {
        res.status(500).json({
          status: "error",
          message: error.message,
          data: error,
        });
      });
  };

  module.exports = {
    getAllReview,
    createReview,
    updateReview,
    deleteReview
}

