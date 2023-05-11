const cartRepository = require('../repositories/cartRepository');

const getAllCart = async () => {
    try{
        const cart = cartRepository.getAllCart();
        return cart;
    }
    catch(err){
        throw err;
    }
}

const createCart = async (data) => {
    try{
        const cart = cartRepository.createCart(data);
        return cart;
    }
    catch(err){
        throw err;
    }
}

const updateCart = async (data, id) => {
    try{
        const cart = cartRepository.updateCart(data, id);
        return cart;
    }
    catch(err){
        throw err;
    }
}


const deleteCart = async (id) => {
    try{
        const cart = cartRepository.deleteCart(id);
        return cart;
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    getAllCart,
    createCart,
    updateCart,
    deleteCart
}