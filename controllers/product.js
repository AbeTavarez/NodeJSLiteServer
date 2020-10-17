//* Product Model
const Product = require('../models/product');
const { getPostData } = require('../utils/getPostdata');

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

//* @desc Create a Product
//* @route POST /api/products
const createProduct = async (req, res, id) => {
  try {
    // gets our parse req body
    const body = await getPostData(req);

    const { title, description, price } = JSON.parse(body);

    // create new product with req data
    const product = {
      title,
      description,
      price,
    };

    //await for the Model to create the data with create
    const newProduct = await Product.create(product);

    res.writeHead(201, { 'Content-Tyepe': 'application/json' });
    return res.end(JSON.stringify(newProduct));
  } catch (err) {
    console.error(err);
  }
};
module.exports = {
  getProducts,
  getProduct,
  createProduct,
};
