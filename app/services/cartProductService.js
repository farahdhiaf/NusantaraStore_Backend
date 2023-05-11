const cartProductRepository = require("../repositories/cartProductRepository");

const addToCart = async (id_user, id_product) => {
  await cartProductRepository.addToCart(id_user, id_product);
};

const removeFromCart = async (id_user, id_product) => {
  await cartProductRepository.removeFromCart(id_user, id_product);
};

const getAllCartProduct = async () => {
  try{
      const cart_product = cartProductRepository.getAllCartProduct();
      return cart_product;
  }
  catch(err){
      throw err;
  }
}

const createCartProduct = async (data) => {
  try{
      const cart_product = cartProductRepository.createCartProduct(data);
      return cart_product;
  }
  catch(err){
      throw err;
  }
}

const updateCartProduct = async (data, id) => {
  try{
      const cart_product = cartProductRepository.updateCartProduct(data, id);
      return cart_product;
  }
  catch(err){
      throw err;
  }
}


const deleteCartProduct = async (id) => {
  try{
      const cart_product = cartProductRepository.deleteCartProduct(id);
      return cart_product;
  }
  catch(err){
      throw err;
  }
}

module.exports = {
  addToCart,
  removeFromCart,
  getAllCartProduct,
  createCartProduct,
  updateCartProduct,
  deleteCartProduct
};
