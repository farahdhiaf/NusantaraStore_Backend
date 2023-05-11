const reviewRepository = require('../repositories/reviewRepository');

const getAllReview = async () => {
    try{
        const review = reviewRepository.getAllReview();
        return review;
    }
    catch(err){
        throw err;
    }
}

const createReview = async (data) => {
    try{
        const review = reviewRepository.createReview(data);
        return review;
    }
    catch(err){
        throw err;
    }
}

const updateReview = async (data, id) => {
    try{
        const review = reviewRepository.updateReview(data, id);
        return review;
    }
    catch(err){
        throw err;
    }
}


const deleteReview = async (id) => {
    try{
        const review = reviewRepository.deleteReview(id);
        return review;
    }
    catch(err){
        throw err;
    }
}

module.exports = {
    getAllReview,
    createReview,
    updateReview,
    deleteReview
}