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