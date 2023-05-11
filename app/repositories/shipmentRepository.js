const {shipment} = require('../models')

const getAllShipment = () => {
    return shipment.findAll()
}

const createShipment = (data) => {
    return shipment.create(data)
}

const updateShipment = (id, data) => {
    return shipment.update(data, {
        where: {
            id: id
        }
    })
}

const deleteShipment = (id) => {
    return shipment.destroy({
        where: {
            id: id
        }
    })
}

module.exports = {
    getAllShipment,
    createShipment,
    updateShipment,
    deleteShipment
}