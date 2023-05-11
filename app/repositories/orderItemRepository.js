const {order_item} = require('../models')

const getAllOrderItem = () => {
    return order_item.findAll()
}

const createOrderItem = (data) => {
    return order_item.create(data)
}

const updateOrderItem = (id, data) => {
    return order_item.update(data, {
        where: {
            id: id
        }
    })
}

const deleteOrderItem = (id) => {
    return order_item.destroy({
        where: {
            id: id
        }
    })
}

module.exports = {
    getAllOrderItem,
    createOrderItem,
    updateOrderItem,
    deleteOrderItem
}