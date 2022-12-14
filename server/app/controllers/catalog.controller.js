const db = require("../models");
const Product = db.product;
const Purchase = db.purchase;

exports.catalogBoard = async (req, res) => {
  const products = await Product.find();
  res.status(200).json(products);
};

exports.catalogPurchase = async (req, res) => {
  for (let i = 0; i <= req.body.products.length - 1; i++) {
    const product = req.body.products[i];
    product.status = "purchased";
    if (product.amount > 0) {
      product.amount = product.amount - 1;
    }
  }

  const purchase = new Purchase({
    user: req.body.id,
    products: req.body.products,
  });

  purchase.save((err, user) => {
    if (err) {
      console.log(err);
      res.status(500).send({ message: err });
      return;
    }
    res.status(201).send({ message: "purchase created" });
  });
};

exports.catalogId = async (req, res) => {
  const { id } = req.params;
  const product = await Product.findOne({ code: id });
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
