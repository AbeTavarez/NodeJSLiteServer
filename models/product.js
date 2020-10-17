//* DATA
const products = require('../data/products.json');

const { v4: uuid } = require('uuid');

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

//* Create Product
const create = (product) => {
  return new Promise((resolve, reject) => {
    const newProduct = { id: uuidv4(), ...product };
    products.push(newProduct);
  });
};

module.exports = {
  findAll,
  findById,
};
