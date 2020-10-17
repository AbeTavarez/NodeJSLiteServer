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
//* Update Product
const update = (id, product) => {
  return new Promise((resolve, reject) => {
    //gets index of product by ID
    const index = products.findIndex((p) => p.id === id);
    //replaces product with new data
    products[index] = { id, ...product };
    // write new data with the updatedProduct
    writeDataToFile('./data/products.json', products);
    //sends back our updated product to the client
    resolve(products[index]);
  });
};

module.exports = {
  findAll,
  findById,
  create,
  update,
};
