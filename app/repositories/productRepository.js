const {product} = require('../models')

const getAllProduct = () => {
    return product.findAll()
}

const createProduct = (data) => {
    return product.create(data)
}

const updateProduct = (id, data) => {
    return product.update(data, {
        where: {
            id: id
        }
    })
}

const deleteProduct = (id) => {
    return product.destroy({
        where: {
            id: id
        }
    })
}

const getProductByName = async (name) => {
    const products = await product.findAll({
      where: {
        name: {
          [Op.like]: `%${name}%`,
        },
      },
    });
    return products;
  };

module.exports = {
    getAllProduct,
    createProduct,
    updateProduct,
    deleteProduct,
    getProductByName
}