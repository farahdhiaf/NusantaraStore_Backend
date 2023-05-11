const {order} = require('../models')

const getAllOrder = () => {
    return order.findAll()
}

const createOrder = (data) => {
    return order.create(data)
}

const updateOrder = (id, data) => {
    return order.update(data, {
        where: {
            id: id
        }
    })
}

const deleteOrder = (id) => {
    return order.destroy({
        where: {
            id: id
        }
    })
}

module.exports = {
    getAllOrder,
    createOrder,
    updateOrder,
    deleteOrder
}