const productRepository = require("../repositories/productRepository");

const getAllProduct = async () => {
  try {
    const product = productRepository.getAllProduct();
    return product;
  } catch (err) {
    throw err;
  }
};

const createProduct = async (data) => {
  try {
    const product = productRepository.createProduct(data);
    return product;
  } catch (err) {
    throw err;
  }
};

const updateProduct = async (data, id) => {
  try {
    const product = productRepository.updateProduct(data, id);
    return product;
  } catch (err) {
    throw err;
  }
};

const deleteProduct = async (id) => {
  try {
    const product = productRepository.deleteProduct(id);
    return product;
  } catch (err) {
    throw err;
  }
};

const getProductByName = async (name) => {
  try {
    const products = await userRepository.getProductByName(name);
    return products;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllProduct,
  createProduct,
  updateProduct,
  deleteProduct,
  getProductByName,
};
