const productService = require('../services/productService')

const getAllProduct = (req, res) => {
    productService.getAllProduct()
    .then(product => {
        if(!product){
            res.status(400).json({
                status: 'error',
                message: 'Product not found',
                data: product
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Success get all list product',
            data: product
        })
    })
    .catch(err => {
        res.status(500).json({
            status: 'error',
            message: 'internal server error',
            data: err.message
        })
    })
}

const createProduct = (req, res) => {
    const data = req.body;
    productService.createProduct(data)
    .then(product => {
        if(!product){
            res.status(400).json({
                status: 'error',
                message: 'Failed create product',
                data: product
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Success create product',
            data: product
        })
    })
    .catch(err => {
        res.status(500).json({
            status: 'error',
            message: 'internal server error',
            data: err.message
        })
    })
}

const updateProduct = (req, res) => {
    productService.updateProduct(req.params.id, req.body)
      .then((product) => {
        if(!product){
            res.status(400).json({
                status: 'error',
                message: 'Product not found',
                data: product
            })
        }
        res.status(200).json({
          status: "success",
          message: "product updated successfully",
          data: product,
        });
      })
      .catch((error) => {
        res.status(500).json({
          status: "error",
          message: error.message,
        });
      });
  };


const deleteProduct = (req, res) => {
    productService.deleteProduct(req.params.id)
      .then((product) => {
        if(!product){
            res.status(400).json({
                status: 'error',
                message: 'Product not found',
                data: product
            })
        }
        res.status(200).json({
          status: "success",
          message: "product deleted successfully",
          data: product,
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

  const getProductByName = async (req, res) => {
    const category = req.params.category;
    userService
      .getProductByName(category)
      .then((products) => {
        if (!products) {
          res.status(404).send({
            status: 'error',
            message: error.message,
            data: {},
          });
        } else {
          res.status(200).send({
            status: 'success',
            message: 'Successfully retrieved products',
            data: products,
          });
        }
      })
      .catch((error) => {
        res.status(500).send({
          status: 'error',
          message: error.message,
          data: {},
        });
      });
  };

  const getProductByCategory = async (req, res) => {
    const category = req.params.category;
    userService
      .getProductByCategory(category)
      .then((products) => {
        if (!products) {
          res.status(404).send({
            status: 'error',
            message: error.message,
            data: {},
          });
        } else {
          res.status(200).send({
            status: 'success',
            message: 'Successfully retrieved products',
            data: products,
          });
        }
      })
      .catch((error) => {
        res.status(500).send({
          status: 'error',
          message: error.message,
          data: {},
        });
      });
  };

  module.exports = {
    getAllProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductByName,
    getProductByCategory
}

