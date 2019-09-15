const { db, admin } = require("../util/admin");
const config = require("../util/config");
const firebase = require("firebase");
const {
  validatePostData
} = require("../util/dataValidator");


exports.getAllSubscribe = (req,res) =>{
    db.collection("Subscribe")
    .orderBy("subscribeAt","desc")
    .get()
    .then(
      data => {
      let subscribe = [];
      data.forEach(doc => {
        subscribe.push({
          subscribeID: doc.id,
          subscribeAt: doc.data().subscribeAt,
          subscriber: doc.data().subscriber,
          subscriptionsType: doc.data().subscriptionsType,
          userName: doc.data().userName
        });
      });
      return res.json(subscribe);
  }
    )
    .catch(err =>{        
      console.error(err);
    })
}


exports.unSubscribe = (req, res) => {
  db
    .doc(`/users/${req.params.userName}`)
    .get()
    .then(doc => {
      if (!doc.exists) {
        return res.status(404).json({ error: "Not Subscribe" });
      } else {
        return document.delete();
      }
    })
    .then(() => {
      res.json({ message: "UnSubscribe successfully" });
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};

////.collection("Subscribe")
    //.doc(req.params.subscribeID)