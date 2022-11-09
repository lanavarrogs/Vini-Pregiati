const db = require("../models");
const Product = db.product;

exports.catalogBoard = async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
};

exports.catalogId = async (req,res) => {
  const { id } = req.params;
  const product = await Product.findOne({'code': id});
  res.status(200).json(product);
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
