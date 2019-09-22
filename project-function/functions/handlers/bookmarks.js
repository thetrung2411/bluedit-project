const { db, admin } = require("../util/admin");
const config = require("../util/config");
const firebase = require("firebase");

exports.bookmark = (req, res) => {
  const newBookmark = {
    createdAt: new Date().toISOString(),
    postheader: req.body,
    postId: req.params.postId,
    userPosted: req.params.userPosted
  };
  db.collection("bookmarks")
    .add(newBookmark)
    .then(doc => {
      res.json({ message: `document ${doc.id} created successfully` });
    })
    .catch(err => {
      console.log(err);
      res.status(500).json({ error: "Unexpected error" });
    });
};

exports.getBookmark = (req, res) => {
  let bookmarkData = {};
  db.doc(`/bookmarks/${req.params.bookmarkId}`)
    .get()
    .then(doc => {
      if (!doc.exists) {
        return res.status(404).json({ error: "Bookmark not found" });
      }
      bookmarkData = doc.data();
      bookmarkData.bookmarkId = doc.id;
      return res.json(bookmarkData);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};

exports.getAllBookmarks = (req, res) => {
  db.collection("bookmarks")
    .orderBy("createdAt", "desc")
    .get()
    .then(data => {
      let bookmarks = [];
      data.forEach(doc => {
        bookmarks.push({
          bookmarkId: doc.id,
          createdAt: doc.data().createdAt,
          postId: doc.data().postId,
          postheader: doc.data().postheader,
          userid: doc.data().userid,
          username: doc.data().username,
          status: doc.data().status
        });
      });
      return res.json(bookmarks);
    })
    .catch(err => console.error(err));
};

exports.changeBookmarkStatus = (req, res) => {
  db.doc(`/bookmarks/${req.params.bookmarkid}`)
    .get()
    .then(doc => {
      if (!doc.exists) {
        return res.status(404).json({ error: "Bookmark not found" });
      }
      return doc.ref.update({ status: "processed" });
    })
    .then(() => {
      res.json({ message: "Status changed successfully" });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ error: err.code });
    });
};

exports.deleteBookmark = (req, res) => {
  const document = db.doc(`/bookmarks/${req.params.bookmarkId}`);
  document
    .get()
    .then(doc => {
      if (!doc.exists) {
        return res.status(404).json({ error: "Bookmark not found" });
      } else {
        return document.delete();
      }
    })
    .then(() => {
      res.json({ message: "Bookmark delete successfully" });
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};
