const { db, admin } = require("../util/admin");
const config = require("../util/config");
const firebase = require("firebase");

exports.mailform = (req, res) => {
  const newmailform = {
    createdAt: new Date().toISOString(),
    Type: req.body.Type,
    Body: req.body.Body,
    userName: req.user.userName
  };
  db.collection("mailforms")
    .add(newmailform)
    .then(doc => {
      res.json({ message: `document ${doc.id} created successfully` });
    })
    .catch(err => {
      res.status(500).json({ error: "Unexpected failure" });
    });
};

exports.getAllMailforms = (req, res) => {
  db.collection("mailforms")
    .orderBy("createdAt", "desc")
    .get()
    .then(data => {
      let mailforms = [];
      data.forEach(doc => {
        mailforms.push({
          mailformId: doc.id,
          createdAt: doc.data().createdAt,
          Type: doc.data().postId,
          Body: doc.data().postheader,
          userName: doc.data().userName
        });
      });
      return res.json(mailforms);
    })
    .catch(err => console.error(err));
};
