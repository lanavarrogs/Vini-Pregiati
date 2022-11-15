const mongoose = require("mongoose");

const Purchase = mongoose.model(
  "Purchase",
  new mongoose.Schema({
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
    products: [Product],
  })
);

module.exports = Purchase;
