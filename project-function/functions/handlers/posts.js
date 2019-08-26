const { db, admin } = require("../util/admin");
const config = require("../util/config");
const firebase = require("firebase");

exports.post = (req,res) => {
    if(req.body.body.trim() === ''){
        return res.status(400).json({body: 'Post cannot be empty'});
      }
    
      const newPost = {
        body: req.body.body,
        createdAt: new Date().toISOString() 
      };
      
      db.collection('posts')
      .add(newPost)
      .then((doc) => {
        res.json({message: `document ${doc.id} created successfully`});
      })
      .catch((err) => {
        res.status(500).json({error: 'Unexpected failure'});
        console.error(err);
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
            createdAt: doc.data().createdAt
          });
        });
        return res.json(posts);
      })
      .catch(err => console.error(err));
  };