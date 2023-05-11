const {cart} = require('../models')

const getAllCart = () => {
    return cart.findAll()
}

const createCart = (data) => {
    return cart.create(data)
}

const updateCart = (id, data) => {
    return cart.update(data, {
        where: {
            id: id
        }
    })
}

const deleteCart = (id) => {
    return cart.destroy({
        where: {
            id: id
        }
    })
}

module.exports = {
    getAllCart,
    createCart,
    updateCart,
    deleteCart
}