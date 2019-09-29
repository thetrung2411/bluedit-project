const { db, admin } = require("../util/admin");
const config = require("../util/config");
const firebase = require("firebase");

//Upload one ad
exports.uploadAd = (req, res) => {
  if (
    req.body.name.trim() === "" ||
    req.body.imageUrl === "" ||
    req.body.link === ""
  ) {
    return res.status(400).json({ body: "Post cannot be empty" });
  }
  const newAd = {
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    link: req.body.link,
    uploadAt: new Date().toISOString(),
    isShowing: true
  };

  db.collection("ads")
    .add(newAd)
    .then(doc => {
      const resAd = newAd;
      resAd.adId = doc.id;
      res.json(resAd);
    })
    .catch(err => {
      res.status(500).json({ error: "upload failed" });
      console.error(err);
    });
};

//Edit an existing ad
exports.editAd = (req, res) => {
  if (
    req.body.name.trim() === "" ||
    req.body.imageUrl.trim() === "" ||
    req.body.link.trim() === ""
  ) {
    return res.status(400).json({ message: "Must not be empty" });
  }
  let newAd = {
    name: req.body.name,
    imageUrl: req.body.imageUrl,
    link: req.body.link
  };
  db.doc(`/ads/${req.params.adId}`)
    .update(newAd)
    .then(() => {
      res.json({ message: "Edited successfully" });
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({ err: err.code });
    });
};

//Get all ads info
exports.getAllAds = (req, res) => {
  db.collection("ads")
    .orderBy("uploadAt", "desc")
    .get()
    .then(data => {
      let ads = [];
      data.forEach(doc => {
        ads.push({
          adId: doc.id,
          name: doc.data().name,
          imageUrl: doc.data().imageUrl,
          link: doc.data().link,
          uploadAt: doc.data().uploadAt,
          isShowing: doc.data().isShowing
        });
      });
      return res.json(ads);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};

//Get single ad info
exports.getAd = (req, res) => {
  let ad = {};
  db.doc(`/ads/${req.params.adId}`)
    .get()
    .then(doc => {
      if (!doc.exists) {
        return res.status(404).json({ error: "Ad not found" });
      }
      ad = doc.data();
      ad.adId = doc.id;
      return res.json(ad);
    })
    .catch(err => {
      console.error(err);
      res.status(500).json({ error: err.code });
    });
};

//Delete ad
exports.deleteAd = (req, res) => {
  const document = db.doc(`/ads/${req.params.adId}`);
  document
    .get()
    .then(doc => {
      if (!doc.exists) {
        return res.status(404).json({ error: "Ad not found" });
      }
      return document.delete();
    })
    .then(() => {
      res.json({ message: "Ad deleted successfully" });
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};

//Set display to true or false
exports.setDisplay = (req, res) => {
  db.doc(`/ads/${req.params.adId}`)
    .get()
    .then(doc => {
      if (!doc.exists) {
        return res.status(404).json({ error: "Ad not found" });
      }
      return doc.ref.update({ isShowing: !doc.data().isShowing });
    })
    .then(() => {
      res.json({ message: "Status changed successfully" });
    })
    .catch(err => {
      console.log(err);
      return res.status(500).json({ error: err.code });
    });
};
