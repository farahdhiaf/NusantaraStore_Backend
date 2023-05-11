const orderItemService = require('../services/orderItemService')

const getAllOrderItem = (req, res) => {
    orderItemService.getAllOrderItem()
    .then(order_item => {
        if(!order_item){
            res.status(400).json({
                status: 'error',
                message: 'Order item not found',
                data: order_item
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Success get all list order item',
            data: order_item
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

const createOrderItem = (req, res) => {
    const data = req.body;
    orderItemService.createOrderItem(data)
    .then(order_item => {
        if(!order_item){
            res.status(400).json({
                status: 'error',
                message: 'Failed create order item',
                data: order_item
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Success create order item',
            data: order_item
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

const updateOrderItem = (req, res) => {
    orderItemService.updateOrderItem(req.params.id, req.body)
      .then((order_item) => {
        if(!order_item){
            res.status(400).json({
                status: 'error',
                message: 'OrderItem not found',
                data: order_item
            })
        }
        res.status(200).json({
          status: "success",
          message: "order_item updated successfully",
          data: order_item,
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


const deleteOrderItem = (req, res) => {
    orderItemService.deleteOrderItem(req.params.id)
      .then((order_item) => {
        if(!order_item){
            res.status(400).json({
                status: 'error',
                message: 'Order item not found',
                data: order_item
            })
        }
        res.status(200).json({
          status: "success",
          message: "order item deleted successfully",
          data: order_item,
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
    getAllOrderItem,
    createOrderItem,
    updateOrderItem,
    deleteOrderItem
}

