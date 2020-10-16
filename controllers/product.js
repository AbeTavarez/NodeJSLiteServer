//* Product Model
const Product = require('../models/product');

const getProducts = async (req, res) => {
  try {
    //* calls func from the product model
    const products = await Product.findAll();

    //* send json data
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(products));
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getProducts,
};
