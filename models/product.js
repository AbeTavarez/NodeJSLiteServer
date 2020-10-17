//* DATA
const products = require('../data/products.json');
const { v4: uuidv4 } = require('uuid');
const { writeDataToFile } = require('../utils/writeDataToFile');

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
    // creates new product with new ID
    const newProduct = { id: uuidv4(), ...product };
    //adds new product to arr products data
    products.push(newProduct);

    // write new data with the newProduct
    writeDataToFile('./data/products.json', products);

    //sends back our new product to the client
    resolve(newProduct);
  });
};

module.exports = {
  findAll,
  findById,
  create,
};
