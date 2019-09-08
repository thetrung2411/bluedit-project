const { db, admin } = require("../util/admin");
const config = require("../util/config");
const firebase = require("firebase");

exports.post = (req, res) => {
  if (req.bookmarks.trim() === "") {
    return res.status(400).json({ bookmarks: "Bookmark was empty" });
  }

  const newBookmark = {
    postID: req.params.postId,
    userId: req.user.userId,
    createdAt: new Date().toISOString()
  };
  db.collection("bookmarks")
    .add(newBookmark)
    .then(doc => {
      res.json({ message: `Bookmark ${doc.id} created successfully` });
    })
    .catch(err => {
      res.status(500).json({ error: "Unexpected failure" });
      console.error(err);
    });
};

exports.getBookmark = (req, res) => {
  let bookmarkContent = {};
  db.doc(`/bookmarks/${req.params.bookmarkId}`)
    .get()
    .then(doc => {
      if (!doc.exists) {
        return res.status(404).json({ error: "Bookmark not found" });
      }
      bookmarkContent = doc.data();
      bookmarkContent.bookmarkId = doc.id;
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ error: "Unexpected failure" });
    });
};
