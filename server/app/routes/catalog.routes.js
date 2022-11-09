const { authJwt } = require("../middlewares");
const controller = require("../controllers/catalog.controller");

module.exports = function (app) {
  app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Headers", "Origin, Content-Type, Accept");
    next();
  });

  app.get("/api/catalog", controller.catalogBoard);

  app.get(
    "/api/catalog/mod",
    [authJwt.verifyToken, authJwt.isModerator],
    controller.moderatorCatalogBoard
  );

  app.get("/api/catalog/:id",controller.catalogId);

  app.get(
    "/api/catalog/admin",
    [authJwt.verifyToken, authJwt.isAdmin],
    controller.adminCatalogBoard
  );
};
