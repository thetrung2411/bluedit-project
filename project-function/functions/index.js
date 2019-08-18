const functions = require("firebase-functions");
const app = require("express")();
const admin = require("firebase-admin");

admin.initializeApp();

const config = {
  apiKey: "AIzaSyAPFSzPzfOfr0JvAEmbDWUE5tStlJ_6HkA",
  authDomain: "renfi-69a94.firebaseapp.com",
  databaseURL: "https://renfi-69a94.firebaseio.com",
  projectId: "renfi-69a94",
  storageBucket: "renfi-69a94.appspot.com",
  messagingSenderId: "1056006554254",
  appId: "1:1056006554254:web:7bcceef89991a7a8"
};

const firebase = require("firebase");
firebase.initializeApp(config);

//Signup route
app.post("/signup", (req, res) => {
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    userName: req.body.userName
  };

  firebase
    .auth()
    .createUserWithEmailAndPassword(newUser.email, newUser.password)
    .then(data => {
      return res
        .status(201)
        .json({ message: `user ${data.user.uid} signed up successfully` });
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
});

exports.api = functions.https.onRequest(app);
