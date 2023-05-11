const cart_product = require('../models/cart_product');
const addToCart = async (id_cart, id_product) => {
  const Cart_product = await cart_product.findOne({ id_cart });
  if (!cart_product) {
    // Create new cart_product if it doesn't exist
    const newCart = new cart_product({
      id_cart,
      products: [id_product], ///??? ga memenuhi normalisasi ???
    });
    await newCart.save();
  } else {
    // Add product to existing cart_product
    Cart_product.products.push(id_product);
    await cart_product.save();
  }
};

const removeFromCart = async (id_user, id_product) => {
  const Cart_product = await cart_product.findOne({ id_user });

  if (!cart_product) {
    throw new Error('Cart_product not found');
  }

  const productIndex = Cart_product.products.indexOf(id_product);
  if (productIndex === -1) {
    throw new Error('Product not found in cart_product');
  }

  Cart_product.products.splice(productIndex, 1);
  await Cart_product.save();
};

const getAllCartProduct = () => {
  return cart_product.findAll()
}

const createCartProduct = (data) => {
  return cart_product.create(data)
}

const updateCartProduct = (id, data) => {
  return cart_product.update(data, {
      where: {
          id: id
      }
  })
}

const deleteCartProduct = (id) => {
  return cart_product.destroy({
      where: {
          id: id
      }
  })
}

module.exports = {
  addToCart,
  removeFromCart,
  getAllCartProduct,
  createCartProduct,
  updateCartProduct,
  deleteCartProduct
};
