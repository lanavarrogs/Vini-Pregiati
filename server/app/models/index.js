const mongoose = require("mongoose");
mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.user = require("./user.model");
db.role = require("./role.model");
db.product = require("./catalog.model");
db.comment = require("./comment.model");
db.purchase = require("./purchase.model");

db.ROLES = ["user", "admin", "moderator"];

module.exports = db;
