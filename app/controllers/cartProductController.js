const cart_product = require('../models/cart_product');
const cartProductService = require('../services/cartProductService');

const addToCart = async (req, res) => {
  const { id_user, id_product } = req.body;

  try {
    await cartProductService.addToCart(id_user, id_product);

    return res.status(200).json({
      status: 'success',
      message: 'Product added to cart',
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      error: error.message,
    });
  }
};

const removeFromCart = async (req, res) => {
  const { id_user, id_product } = req.body;

  try {
    await cartProductService.removeFromCart(id_user, id_product);

    return res.status(200).json({
      status: 'success',
      message: 'Product removed from cart',
    });
  } catch (error) {
    return res.status(500).json({
      status: 'error',
      error: error.message,
    });
  }
};

const getAllCartProduct = (req, res) => {
  cartProductService.getAllCartProduct()
  .then(cart_product => {
      if(!cart_product){
          res.status(400).json({
              status: 'error',
              message: 'Cart not found',
              data: {}
          })
      }
      res.status(200).json({
          status: 'success',
          message: 'Success get all list cart',
          data: cart_product
      })
  .catch(err => {
      res.status(500).json({
          status: 'error',
          message: 'internal server error',
          data: err
      })
  })
})
}

const createCartProduct = (req, res) => {
  const data = req.body;
  cartProductService.createCartProduct(data)
  .then(cart_product => {
      if(!cart_product){
          res.status(400).json({
              status: 'error',
              message: 'Failed create cart',
              data: {}
          })
      }
      res.status(200).json({
          status: 'success',
          message: 'Success create cart_product',
          data: cart_product
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

const updateCartProduct = (req, res) => {
  cartProductService.updateCartProduct(req.params.id, req.body)
    .then((cart_product) => {
      if(!cart){
          res.status(400).json({
              status: 'error',
              message: 'Cart_product not found',
              data: {}
          })
      }
      res.status(200).json({
        status: "success",
        message: "cart_product updated successfully",
        data: cart_product,
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


const deleteCartProduct = (req, res) => {
  cartProductService.deleteCartProduct(req.params.id)
    .then((cart_product) => {
      if(!cart_product){
          res.status(400).json({
              status: 'error',
              message: 'Cart_product not found',
              data: {}
          })
      }
      res.status(200).json({
        status: "success",
        message: "cart deleted successfully",
        data: cart_product,
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
  addToCart,
  removeFromCart,
  getAllCartProduct,
  createCartProduct,
  updateCartProduct,
  deleteCartProduct
};
