//* Product Model
const Product = require('../models/product');

//* @desc Gets All Products
//* @route GET /api/products
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

//* @desc Gets Single Product
//* @route GET /api/products/:id
const getProduct = async (req, res, id) => {
  try {
    const product = await Product.findById(id);

    if (!product) {
      //* send json error data
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ message: 'Product Not Found' }));
    } else {
      //* Send JSON Product Data
      res.writeHead(200, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify(product));
    }
  } catch (err) {
    console.error(err);
  }
};

module.exports = {
  getProducts,
  getProduct,
};
