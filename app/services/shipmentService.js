const shipmentRepository = require('../repositories/shipmentRepository');

const getAllShipment = async () => {
    try{
        const shipment = shipmentRepository.getAllShipment();
        return shipment;
    }
    catch(err){
        throw err;
    }
}

const createShipment = async (data) => {
    try{
        const shipment = shipmentRepository.createShipment(data);
        return shipment;
    }
    catch(err){
        throw err;
    }
}

const updateShipment = async (data, id) => {
    try{
        const shipment = shipmentRepository.updateShipment(data, id);
        return shipment;
    }
    catch(err){
        throw err;
    }
}


const deleteShipment = async (id) => {
    try{
        const shipment = shipmentRepository.deleteShipment(id);
        return shipment;
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    getAllShipment,
    createShipment,
    updateShipment,
    deleteShipment
}