const db = require("../models");
const Product = db.product;

exports.catalogBoard = async (req, res) => {
  const products = [];
  Product.find().toArray(function (err, result) {
    if (err) throw err;
    products = result;
    db.close();
  });

  res.status(200).send(products);
};

exports.moderatorCatalogBoard = (req, res) => {
  const { user } = req;
  const products = [];
  Product.find().toArray(function (err, result) {
    if (err) throw err;
    products = result;
    db.close();
  });

  res.status(200).send(products);
};

exports.adminCatalogBoard = (req, res) => {
  const { user } = req;
  const products = [];
  Product.find().toArray(function (err, result) {
    if (err) throw err;
    products = result;
    db.close();
  });

  res.status(200).send(products);
};
