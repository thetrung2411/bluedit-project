const { db, admin } = require("../util/admin");
const config = require("../util/config");
const firebase = require("firebase");
const {
  validatePostData
} = require("../util/dataValidator");


exports.getAllSubscribe = (req,res) =>{
    //let subscribe = {};
    db.collection("Subscribe")
    .doc(req.user.userName)
    .getCollection()
      .then(doc =>{
        // return res.json(subscribe);
      })
      .catch(err =>{
        console.error(err);
        // return res.status(500).json({error: err.code})
      })
  }

exports.unSubscribe = (req, res) => {
  db.collection("Subscribe")
  .doc(req.user.userName)
  .collection("User1")
  .get()
    .then(doc =>{
      if (!doc.exists) {
        return res.status(404).json({ error: "Not found" });
      } else {
        return document.delete();
      }
    })
    .catch(err =>{
      console.error(err);
    })
}