const { db, admin } = require("../util/admin");
const config = require("../util/config");
const firebase = require("firebase");

exports.comment = (req,res) => {
    if(req.body.body.trim() === ''){
        return res.status(400).json({body: 'Comment cannot be empty'});
      }
    
      const newComment = {
        body: req.body.body,
        createdAt: new Date().toISOString() 
      };
      
      db.collection("comments")
      .add(newComment)
      .then((doc) => {
        res.json({message: `document ${doc.id} created successfully`});
      })
      .catch((err) => {
        res.status(500).json({error: 'Unexpected failure'});
        console.error(err);
      });
};



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