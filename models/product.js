const products = require('../data/products.json');

//* Finds All Products
const findAll = () => {
  return new Promise((resolve, reject) => resolve(products));
};

//* Find Product by ID
const findById = (id) => {
  return new Promise((resolve, reject) => {
    const product = products.find((p) => p.id === id);
    resolve(product);
  });
};

module.exports = {
  findAll,
  findById,
};
