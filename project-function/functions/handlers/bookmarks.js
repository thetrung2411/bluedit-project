const { db, admin } = require("../util/admin");
const config = require("../util/config");
const firebase = require("firebase");

exports.bookmark = (req, res) => {
  const newBookmark = {
    /*     createdAt: new Date().toISOString(),
    postheader: req.body,
    postId: req.params.postId,
    userName: req.user.userName,
    userPosted: req.params.userPosted */

    createdAt: new Date().toISOString(),
    postheader: "abcabcabc",
    postId: "wVr66mnV6aZ3y7naJ22D",
    userPosted: "lokkwing",
    userName: req.user.userName
  };
  db.collection("bookmarks")
    .add(newBookmark)
    .then(doc => {
      res.json({ message: `document ${doc.id} created successfully` });
    })
    .catch(err => {
      res.status(500).json({ error: "Unexpected failure" });
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
          userName: doc.data().userName,
          userPosted: doc.data().userPosted
        });
      });
      return res.json(bookmarks);
    })
    .catch(err => console.error(err));
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
      alert("An error was occur" & err);
      return res.status(500).json({ error: err.code });
    });
};
