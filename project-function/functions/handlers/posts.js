const { db} = require("../util/admin");

//Post a new post
exports.post = (req, res) => {
  //check if the post body is emty or not
  if (req.body.body.trim() === "") {
    return res.status(400).json({ body: "Post cannot be empty" });
  }
  //Prepare the information contained in the post
  const newPost = {
    body: req.body.body,
    userPosted: req.user.userName,
    createdAt: new Date().toISOString(),
    commentCount: 0,
    hidden: false,
  };
  //Create a new post in database
  db.collection("posts")
    .add(newPost)
    .then(doc => {
      res.json({ message: `document ${doc.id} created successfully` });
    })
    .catch(err => {
      res.status(500).json({ error: "Unexpected failure" });
      console.error(err);
    });
};

//Delete a post in database
exports.deletePost = (req, res) => {
  //find the document in the database by the id then delete
  const document = db.doc(`/posts/${req.params.postId}`);
  document
    .get()
    .then((doc) => {
      if (!doc.exists) {
        return res.status(404).json({ error: 'Post not found' });
      }
      if (doc.data().userPosted !== req.user.userName) {
        return res.status(403).json({ error: 'Unauthorized' });
      } else {
        return document.delete();
      }
    })
    .then(() => {
      res.json({ message: 'Post deleted successfully' });
    })
    .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};

//Get all the posts from the database
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
          hidden: doc.data().hidden,
          createdAt: doc.data().createdAt,
          userPosted: doc.data().userPosted,
        });       
      });
        return res.json(posts);
      })
      .catch(err => console.error(err));
  };

//Get the specific post from the database
exports.getPost = (req, res) => {
  let postContent = {};
  //Find the id of the document in the database then return it
  db.doc(`/posts/${req.params.postId}`)
    .get()
    .then(doc => {
      if (!doc.exists) {
        return res.status(404).json({ error: "Post not found" });
      }
      postContent = doc.data();
      postContent.postId = doc.id;
      return db
        .collection("comments")
        .where("postId", "==", req.params.postId)
        .get();
    })
    .then(data => {
      postContent.comments = [];
      data.forEach(doc => {
        postContent.comments.push(doc.data());
      });
      return res.json(postContent);
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ error: "Unexpected failure" });
    });
};

//Edit the post content
exports.editPost = (req, res) => {
  //Check if the new content is emty or not 
  if(req.body.body.trim() === ''){
    return res.status(400).json({body: 'Post cannot be empty'});
  }
  console.log(req.params.postId)
  //Find the post by its Id to edit it
  db.doc(`/posts/${req.params.postId}`)
  .update({body: req.body.body})
  .then(() => {
    res.json({ message: 'Post updated successfully' });
  })
  .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
}

//Unhide the post 
exports.unhidePost = (req, res) => {
  //Find the document by id and set its hidden property to false
  db.doc(`/posts/${req.params.postId}`)
  .update({hidden: false})
  .then(() => {
    res.json({message: 'Post is now unhidden'});
  })
  .catch((err)=> {
    console.error(err);
    return res.status(500).json({error: err.code});
  })
}

//Hide the post 
exports.hidePost = (req, res) => {
  //Find the document by id and set its hidden property to true
  db.doc(`/posts/${req.params.postId}`)
  .update({hidden: true})
  .then(() => {
    res.json({message: 'Post is now hidden'});
  })
  .catch((err)=> {
    console.error(err);
    return res.status(500).json({error: err.code});
  })
}

exports.getPost1 = (req, res) => {
  let postContent1 = {};
  db.doc(`/posts/${req.params.postId}`)
    .get()
    .then(doc => {
      if (!doc.exists) {
        return res.status(404).json({ error: "Post not found" });
      }
      postContent1 = doc.data();
      postContent1.postId = doc.id;
      return db
        .collection("bookmarks")
        .where("postId", "==", req.params.postId)
        .get();
    })
    .then(data => {
      postContent1.bookmarks = [];
      data.forEach(doc => {
        postContent1.bookmarks.push(doc.data());
      });
      return res.json(postContent1);
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ error: "Unexpected failure" });
    });
};


exports.BlockPosts = (req, res) => {
  let posts = [];
  let dayuposts = [];
  let xiaoyuposts = [];

  db.collection("posts")
    .where("userPosted", '>', req.query.bname)
    .get()
    .then(data => {
      data.forEach(doc => {
        dayuposts.push({
          postId: doc.id,
          body: doc.data().body,
          commentCount: doc.data().commentCount,
          upvoteCount: doc.data().upvoteCount,
          createdAt: doc.data().createdAt,
          userPosted: doc.data().userPosted,
        });
      });
    })
    .catch(err => console.error(err));

  db.collection("posts")
    .where("userPosted", '<', req.query.bname)
    .get()
    .then(data => {
      data.forEach(doc => {
        xiaoyuposts.push({
          postId: doc.id,
          body: doc.data().body,
          commentCount: doc.data().commentCount,
          upvoteCount: doc.data().upvoteCount,
          createdAt: doc.data().createdAt,
          userPosted: doc.data().userPosted,
        });
      });
      return res.json([...dayuposts, ...xiaoyuposts]);
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

exports.getmyposts = (req, res) => {
  db.collection("posts")
  .where('userPosted',"==",req.query.poname)
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
          userPosted: doc.data().userPosted
        });
      });
      return res.json(posts);
    })
    .catch(err => console.error(err));
};