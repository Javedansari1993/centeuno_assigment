// server.js
const express = require('express');
const app = express();
const port = 3000;

const ProductController = require('./controllers/productController');
const productController = new ProductController();

app.get('/api/products/list', productController.getList);
app.get('/api/products/:id', productController.getDetail);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
