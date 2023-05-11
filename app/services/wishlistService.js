const wishlistRepository = require('../repositories/wishlistRepository');

const getAllWishlist = async () => {
    try{
        const wishlist = wishlistRepository.getAllWishlist();
        return wishlist;
    }
    catch(err){
        throw err;
    }
}

const createWishlist = async (data) => {
    try{
        const wishlist = wishlistRepository.createWishlist(data);
        return wishlist;
    }
    catch(err){
        throw err;
    }
}

const updateWishlist = async (data, id) => {
    try{
        const wishlist = wishlistRepository.updateWishlist(data, id);
        return wishlist;
    }
    catch(err){
        throw err;
    }
}


const deleteWishlist = async (id) => {
    try{
        const wishlist = wishlistRepository.deleteWishlist(id);
        return wishlist;
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    getAllWishlist,
    createWishlist,
    updateWishlist,
    deleteWishlist
}