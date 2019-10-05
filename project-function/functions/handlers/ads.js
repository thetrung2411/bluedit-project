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
    return res.status(400).json({ body: "Must not be empty" });
  }

  const defaultImg = "AD-default.png";

  const newAd = {
    name: req.body.name,
    imageUrl: `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${defaultImg}?alt=media`,
    link: req.body.link,
    uploadAt: new Date().toISOString()
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
          uploadAt: doc.data().uploadAt
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

//Upload ad image
exports.uploadImage = (req, res) => {
  const BusBoy = require("busboy");
  const path = require("path");
  const os = require("os");
  const fs = require("fs");

  const busboy = new BusBoy({ headers: req.headers });

  let imageToBeUploaded = {};
  let imageFileName;

  busboy.on("file", (fieldname, file, filename, encoding, mimetype) => {
    console.log(fieldname, file, filename, encoding, mimetype);
    if (mimetype !== "image/jpeg" && mimetype !== "image/png") {
      return res.status(400).json({ error: "Wrong file type submitted" });
    }
    // my.image.png => ['my', 'image', 'png']
    const imageExtension = filename.split(".")[filename.split(".").length - 1];
    imageFileName = `AD-${req.params.adId}-${Math.round(
      Math.random() * 1000
    )}.${imageExtension}`;
    const filepath = path.join(os.tmpdir(), imageFileName);
    imageToBeUploaded = { filepath, mimetype };
    file.pipe(fs.createWriteStream(filepath));
  });
  busboy.on("finish", () => {
    admin
      .storage()
      .bucket()
      .upload(imageToBeUploaded.filepath, {
        resumable: false,
        metadata: {
          metadata: {
            contentType: imageToBeUploaded.mimetype
          }
        }
      })
      .then(() => {
        const imageUrl = `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${imageFileName}?alt=media`;
        return db.doc(`/ads/${req.params.adId}`).update({ imageUrl });
      })
      .then(() => {
        return res.json({ message: "image uploaded successfully" });
      })
      .catch(err => {
        console.error(err);
        return res.status(500).json({ error: "something went wrong" });
      });
  });
  busboy.end(req.rawBody);
};
