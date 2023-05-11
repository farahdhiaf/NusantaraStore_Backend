const {wishlist} = require('../models')

const getAllWishlist = () => {
    return wishlist.findAll()
}

const createWishlist = (data) => {
    return wishlist.create(data)
}

const updateWishlist = (id, data) => {
    return wishlist.update(data, {
        where: {
            id: id
        }
    })
}

const deleteWishlist = (id) => {
    return wishlist.destroy({
        where: {
            id: id
        }
    })
}

module.exports = {
    getAllWishlist,
    createWishlist,
    updateWishlist,
    deleteWishlist
}