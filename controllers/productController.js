// controllers/ProductController.js
const Product = require('../models/Product');
const itemList = require('../item_list.json');

class ProductController {
  getList(req, res) {
    const { size, page } = req.query;
    const startIndex = (page - 1) * size;
    const endIndex = startIndex + parseInt(size);
    const paginatedList = itemList.slice(startIndex, endIndex).map(item => ({
      id: item.id,
      item_name: item.item_name,
      item_image: item.item_image,
      item_price: item.item_price
    }));

    res.json(paginatedList);
  }

  getDetail(req, res) {
    const productId = req.params.id;
    const product = itemList.find(item => item.id === parseInt(productId));

    if (product) {
      res.json(product);
    } else {
      res.status(404).json({ error: 'Product not found' });
    }
  }
}

module.exports = ProductController;
