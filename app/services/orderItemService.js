const orderItemRepository = require('../repositories/orderItemRepository');

const getAllOrderItem = async () => {
    try{
        const order_item = orderItemRepository.getAllOrderItem();
        return order_item;
    }
    catch(err){
        throw err;
    }
}

const createOrderItem = async (data) => {
    try{
        const order_item = orderItemRepository.createOrderItem(data);
        return order_item;
    }
    catch(err){
        throw err;
    }
}

const updateOrderItem = async (data, id) => {
    try{
        const order_item = orderItemRepository.updateOrderItem(data, id);
        return order_item;
    }
    catch(err){
        throw err;
    }
}


const deleteOrderItem = async (id) => {
    try{
        const order_item = orderItemRepository.deleteOrderItem(id);
        return order_item;
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    getAllOrderItem,
    createOrderItem,
    updateOrderItem,
    deleteOrderItem
}