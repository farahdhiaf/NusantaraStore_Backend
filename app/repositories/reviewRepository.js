const {review} = require('../models')

const getAllReview = () => {
    return review.findAll()
}

const createReview = (data) => {
    return review.create(data)
}

const updateReview = (id, data) => {
    return review.update(data, {
        where: {
            id: id
        }
    })
}

const deleteReview = (id) => {
    return review.destroy({
        where: {
            id: id
        }
    })
}

module.exports = {
    getAllReview,
    createReview,
    updateReview,
    deleteReview
}