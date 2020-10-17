const http = require('http');
const {
  getProducts,
  getProduct,
  createProduct,
} = require('./controllers/product');

const server = http.createServer((req, res) => {
  //* checks url and method from request
  if (req.url === '/api/products' && req.method === 'GET') {
    //* takes both req and res objects
    getProducts(req, res); //gets all products
  } else if (
    //*regex extracts id if it matches the url with any number
    req.url.match(/\/api\/products\/([0-9]+)/) &&
    req.method === 'GET'
  ) {
    //* extracts id from url
    const id = req.url.split('/')[3];
    getProduct(req, res, id); //gets single product
  } else if (req.url === '/api/products' && req.method === 'POST') {
    createProduct(req, res);
  } else {
    //* 404 Not Found
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route Not Found' }));
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
