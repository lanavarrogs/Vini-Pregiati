const db = require("../models");
const Comment = db.comment;

exports.readComments = async (req, res) => {
  const comments = [];
  Comment.find().toArray(function (err, result) {
    if (err) throw err;
    comments = result;
    db.close();
  });

  res.status(200).send(comments);
};

exports.createComment = async (req, res) => {
  const comment = new Comment({
    user: req.body.id,
    description: req.body.description,
    date: new Date(),
  });

  comment.save((err, user) => {
    if (err) {
      res.status(500).send({ message: err });
      return;
    }
    res.status(201).send({ message: "comment created" });
  });
};
