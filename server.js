const http = require('http');

const product = require('./data/products.json');

const server = http.createServer((req, res) => {
  //* checks url and method from request
  if (req.url === '/api/products' && req.method === 'GET') {
    //* send json data
    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify(product));
  } else {
    //* 404 Not Found
    res.writeHead(404, { 'Content-Type': 'application/json' });
    res.end(JSON.stringify({ message: 'Route Not Found' }));
  }
});

const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
