const { db, admin } = require("../util/admin");
const config = require("../util/config");
const firebase = require("firebase");
const {
  validatePostData
} = require("../util/dataValidator");


exports.getAllSubscribe = (req, res) => {
  db.collection("Subscribe")
    .orderBy("subscribeAt", "desc")
    .get()
    .then(
      data => {
        let subscribe = [];
        data.forEach(doc => {
          subscribe.push({
            subscribeID: doc.id,
            subscribeAt: doc.data().subscribeAt,
            subscriId: doc.data().subscriId,
            subscriber: doc.data().subscriber,
            userName: doc.data().userName,
            userId: doc.data().userId,
          });
        });
        return res.json(subscribe);
      }
    )
    .catch(err => {
      console.error(err);
    })
}


exports.unSubscribe = (req, res) => {
  var userNames = req.body.userNames
  for (let index = 0; index < userNames.length; index++) {
    const element = userNames[index];
    db.collection("Subscribe").doc(element).delete()
      .then(doc => {
        res.json({ message: "successfully" });
      })
      .catch(err => {
        return res.status(500).json({ error: err.code });
      });
  }
};

exports.poSubscribe = (req, res) => {
  var obj = {
    subscribeAt: req.body.subscribeAt,
    subscriId: req.body.subscriId,
    subscriber: req.body.subscriber,
    userName: req.body.userName,
    userId: req.body.userId,
  }
  db.collection('Subscribe').add(obj)
    .then(function (docRef) {
      res.json({ message: "successfully" });
    })
    .catch(function (error) {
      return res.status(500).json({ error: err.code });
    });
};