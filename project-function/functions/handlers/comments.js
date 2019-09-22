const { db, admin } = require("../util/admin");
const config = require("../util/config");
const firebase = require("firebase");

exports.comment = (req,res) => {
    if(req.body.body.trim() === ''){
        return res.status(400).json({body: 'Comment cannot be empty'});
      }
      const newComment = {
        body: req.body.body,
        postId: req.params.postId,
        userPosted: req.user.userName,
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