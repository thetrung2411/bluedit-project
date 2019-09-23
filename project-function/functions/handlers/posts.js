const { db, admin } = require("../util/admin");
const config = require("../util/config");
const firebase = require("firebase");
const {
  validatePostData
} = require("../util/dataValidator");

exports.post = (req, res) => {
  if (req.body.body.trim() === '') {
    return res.status(400).json({ body: 'Post cannot be empty' });
  }
  const newPost = {
    body: req.body.body,
    userPosted: req.user.userName,
    createdAt: new Date().toISOString(),
    upvoteCount: 0,
    commentCount: 0
  };

  db.collection('posts')
    .add(newPost)
    .then((doc) => {
      res.json({ message: `document ${doc.id} created successfully` });
    })
    .catch((err) => {
      res.status(500).json({ error: 'Unexpected failure' });
      console.error(err);
    });
};

exports.getPost = (req, res) => {
  let postContent = {};
  db.doc(`/posts/${req.params.postId}`).get()
    .then(doc => {
      if (!doc.exists) {
        return res.status(404).json({ error: 'Post not found' });
      }
      postContent = doc.data();
      postContent.postId = doc.id;
      return db.collection('comments').where('postId', '==', req.params.postId).get();
    })
    .then((data) => {
      postContent.comments = [];
      data.forEach((doc) => {
        postContent.comments.push(doc.data());
      });
      return res.json(postContent);
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({ error: 'Unexpected failure' });
    });
};

exports.getAllPosts = (req, res) => {
  db.collection("posts")
    .orderBy("createdAt", "desc")
    .get()
    .then(data => {
      let posts = [];
      data.forEach(doc => {
        posts.push({
          postId: doc.id,
          body: doc.data().body,
          commentCount: doc.data().commentCount,
          upvoteCount: doc.data().upvoteCount,
          createdAt: doc.data().createdAt,
          userPosted: doc.data().userPosted,
        });
      });
      return res.json(posts);
    })
    .catch(err => console.error(err));
};

exports.SearchPost = (req, res) => {
  console.log(999999, req)
  if (req.query.body) {
    db.collection("posts")
      .where("body", '==', req.query.body)
      .get()
      .then(data => {
        let posts = [];
        data.forEach(doc => {
          posts.push({
            postId: doc.id,
            body: doc.data().body,
            commentCount: doc.data().commentCount,
            upvoteCount: doc.data().upvoteCount,
            createdAt: doc.data().createdAt,
            userPosted: doc.data().userPosted,
          });
        });
        return res.json(posts);
      })
      .catch(err => console.error(err));
  }
  if (req.query.fbname) {
    db.collection("posts")
      .where("userPosted", '==', req.query.fbname)
      .get()
      .then(data => {
        let posts = [];
        data.forEach(doc => {
          posts.push({
            postId: doc.id,
            body: doc.data().body,
            commentCount: doc.data().commentCount,
            upvoteCount: doc.data().upvoteCount,
            createdAt: doc.data().createdAt,
            userPosted: doc.data().userPosted,
          });
        });
        return res.json(posts);
      })
      .catch(err => console.error(err));
  }
  if (req.query.fbname && req.query.body) {
    db.collection("posts")
      .where("userPosted", '==', req.query.fbname)
      .where("body", '==', req.query.body)
      .get()
      .then(data => {
        let posts = [];
        data.forEach(doc => {
          posts.push({
            postId: doc.id,
            body: doc.data().body,
            commentCount: doc.data().commentCount,
            upvoteCount: doc.data().upvoteCount,
            createdAt: doc.data().createdAt,
            userPosted: doc.data().userPosted,
          });
        });
        return res.json(posts);
      })
      .catch(err => console.error(err));
  }





};