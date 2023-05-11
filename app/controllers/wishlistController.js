const shipmentService = require('../services/shipmentService')

const getAllWishlist = (req, res) => {
    shipmentService.getAllWishlist()
    .then(wishlist => {
        if(!wishlist){
            res.status(400).json({
                status: 'error',
                message: 'Wishlist not found',
                data: wishlist
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Success get all list wishlist',
            data: wishlist
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

const createWishlist = (req, res) => {
    const data = req.body;
    shipmentService.createWishlist(data)
    .then(wishlist => {
        if(!wishlist){
            res.status(400).json({
                status: 'error',
                message: 'Failed create wishlist',
                data: wishlist
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Success create wishlist',
            data: wishlist
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

const updateWishlist = (req, res) => {
    shipmentService.updateWishlist(req.params.id, req.body)
      .then((wishlist) => {
        if(!wishlist){
            res.status(400).json({
                status: 'error',
                message: 'Wishlist not found',
                data: wishlist
            })
        }
        res.status(200).json({
          status: "success",
          message: "wishlist updated successfully",
          data: wishlist,
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


const deleteWishlist = (req, res) => {
    shipmentService.deleteWishlist(req.params.id)
      .then((wishlist) => {
        if(!wishlist){
            res.status(400).json({
                status: 'error',
                message: 'Wishlist not found',
                data: wishlist
            })
        }
        res.status(200).json({
          status: "success",
          message: "wishlist deleted successfully",
          data: wishlist,
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
    getAllWishlist,
    createWishlist,
    updateWishlist,
    deleteWishlist
}

