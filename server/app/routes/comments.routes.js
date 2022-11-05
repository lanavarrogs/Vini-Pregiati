const { authJwt } = require("../middlewares");
const controller = require("../controllers/comments.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  app.get("/api/comments", controller.readComments);
  app.post("/api/comments", controller.createComment);
};
