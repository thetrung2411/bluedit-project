const { db} = require("../util/admin");

exports.comment = (req,res) => {
    if(req.body.body.trim() === ''){
        return res.status(400).json({body: 'Comment cannot be empty'});
      }
      const newComment = {
        body: req.body.body,
        postId: req.params.postId,
        userPosted: req.user.userName,
<<<<<<< HEAD
        hidden: false,
=======
>>>>>>> 6b7bac7e40a536dfead5d4ac07fe6bf180237586
        createdAt: new Date().toISOString() 
      };
      db.doc(`/posts/${req.params.postId}`).get()
      .then(doc => {
          if(!doc.exists){
              return res.status(404).json({error: 'Post not found'});
          }  
          return doc.ref.update({commentCount: doc.data().commentCount +1 });
      })
      .then(() => {
        return db.collection('comments').add(newComment);
      })
      .then(ref => {
        return db.collection('comments').doc(ref.id).update({commentId: ref.id})
      })
      .then(() => {
        res.json(newComment);
      })
      .catch((err) => {
          console.log(err);
          res.status(500).json({error: "Unexpected error"});
      });
};
exports.editComment = (req, res) => {
  if(req.body.body.trim() === ''){
    return res.status(400).json({body: 'Comment cannot be empty'});
  }
  console.log(req.params.commentId)
  db.doc(`/comments/${req.params.commentId}`)
  .update({body: req.body.body})
  .then(() => {
    res.json({ message: 'Comment updated successfully' });
  })
  .catch((err) => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
}

exports.deleteComment = (req, res) => {
  const document = db.doc(`comments/${req.params.commentId}`)
  document
  .get()
  .then(doc => {
      if (!doc.exists){
          return res.status(404).json({error: "Comment not found"})
      }
      if (doc.data().userPosted !== req.user.userName){
        return res.status(403).json({error: 'Unauthorized'})
      }
      else{
        return document.delete();
      }
  })
  .then(() =>{
    res.json({message: 'Comment deleted sucessfully'})
  })
  .catch((err) => {
    console.error(err);
    return res.status(500).json({ error: err.code });
  });
}

exports.getAllComments = (req, res) => {
    db.collection("comments")
      .orderBy("createdAt", "desc")
      .get()
      .then(data => {
        let comments = [];
        data.forEach(doc => {
          comments.push({
            commentId: doc.id,
            body: doc.data().body,
            createdAt: doc.data().createdAt
          });
        });
        return res.json(comments);
      })
      .catch(err => console.error(err));
  };

  exports.unhideComment = (req, res) => {
    db.doc(`comments/${req.params.commentId}`)
    .update({hidden: false})
    .then(() => {
      res.json({message: 'Comment is now unhidden'});
    })
    .catch((err)=> {
      console.error(err);
      return res.status(500).json({error: err.code});
    })
  }
  
  exports.hideComment = (req, res) => {
    db.doc(`/comments/${req.params.commentId}`)
    .update({hidden: true})
    .then(() => {
      res.json({message: 'Comment is now hidden'});
    })
    .catch((err)=> {
      console.error(err);
      return res.status(500).json({error: err.code});
    })
  }
  