const orderRepository = require('../repositories/orderRepository');

const getAllOrder = async () => {
    try{
        const order = orderRepository.getAllOrder();
        return order;
    }
    catch(err){
        throw err;
    }
}

const createOrder = async (data) => {
    try{
        const order = orderRepository.createOrder(data);
        return order;
    }
    catch(err){
        throw err;
    }
}

const updateOrder = async (data, id) => {
    try{
        const order = orderRepository.updateOrder(data, id);
        return order;
    }
    catch(err){
        throw err;
    }
}


const deleteOrder = async (id) => {
    try{
        const order = orderRepository.deleteOrder(id);
        return order;
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    getAllOrder,
    createOrder,
    updateOrder,
    deleteOrder
}