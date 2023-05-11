const cartService = require('../services/cartService')

const getAllCart = (req, res) => {
    cartService.getAllCart()
    .then(cart => {
        if(!cart){
            res.status(400).json({
                status: 'error',
                message: 'Cart not found',
                data: cart
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Success get all list cart',
            data: cart
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

const createCart = (req, res) => {
    const data = req.body;
    cartService.createCart(data)
    .then(cart => {
        if(!cart){
            res.status(400).json({
                status: 'error',
                message: 'Failed create cart',
                data: cart
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Success create cart',
            data: cart
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

const updateCart = (req, res) => {
    cartService.updateCart(req.params.id, req.body)
      .then((cart) => {
        if(!cart){
            res.status(400).json({
                status: 'error',
                message: 'Cart not found',
                data: cart
            })
        }
        res.status(200).json({
          status: "success",
          message: "cart updated successfully",
          data: cart,
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


const deleteCart = (req, res) => {
    cartService.deleteCart(req.params.id)
      .then((cart) => {
        if(!cart){
            res.status(400).json({
                status: 'error',
                message: 'Cart not found',
                data: cart
            })
        }
        res.status(200).json({
          status: "success",
          message: "cart deleted successfully",
          data: cart,
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
    getAllCart,
    createCart,
    updateCart,
    deleteCart
}

