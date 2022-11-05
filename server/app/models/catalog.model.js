const mongoose = require("mongoose");

const Product = mongoose.model(
  "Product",
  new mongoose.Schema({
    name: String,
    code: String,
    description: String,
    price: Number,
    category: Number,
    stock: Number,
  })
);

module.exports = Product;
