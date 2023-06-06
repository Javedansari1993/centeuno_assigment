// models/Product.js
class Product {
    constructor(id, item_name, item_image, import_date, expiration_date, item_price, item_quantity, item_weight, item_tax, item_availability) {
      this.id = id;
      this.item_name = item_name;
      this.item_image = item_image;
      this.import_date = import_date;
      this.expiration_date = expiration_date;
      this.item_price = item_price;
      this.item_quantity = item_quantity;
      this.item_weight = item_weight;
      this.item_tax = item_tax;
      this.item_availability = item_availability;
    }
  }
  
  module.exports = Product;
  