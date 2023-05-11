const orderService = require('../services/orderService')

const getAllOrder = (req, res) => {
    orderService.getAllOrder()
    .then(order => {
        if(!order){
            res.status(400).json({
                status: 'error',
                message: 'Order not found',
                data: order
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Success get all list order',
            data: order
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

const createOrder = (req, res) => {
    const data = req.body;
    orderService.createOrder(data)
    .then(order => {
        if(!order){
            res.status(400).json({
                status: 'error',
                message: 'Failed create order',
                data: order
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Success create order',
            data: order
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

const updateOrder = (req, res) => {
    orderService.updateOrder(req.params.id, req.body)
      .then((order) => {
        if(!order){
            res.status(400).json({
                status: 'error',
                message: 'Order not found',
                data: order
            })
        }
        res.status(200).json({
          status: "success",
          message: "order updated successfully",
          data: order,
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


const deleteOrder = (req, res) => {
    orderService.deleteOrder(req.params.id)
      .then((order) => {
        if(!order){
            res.status(400).json({
                status: 'error',
                message: 'Order not found',
                data: order
            })
        }
        res.status(200).json({
          status: "success",
          message: "order deleted successfully",
          data: order,
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
    getAllOrder,
    createOrder,
    updateOrder,
    deleteOrder
}

