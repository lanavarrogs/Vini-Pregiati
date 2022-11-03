exports.catalogBoard = async (req, res) => {
  const { user } = req;
  res.status(200).send('Catalog Board Content');
};

exports.moderatorCatalogBoard = (req, res) => {
  res.status(200).send("Catalog Admin Content.");
};

exports.adminCatalogBoard = (req, res) => {
  res.status(200).send("Catalog Moderator Content.");
};
