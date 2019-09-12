const { db, admin } = require("../util/admin");

const config = require("../util/config");

const firebase = require("firebase");
firebase.initializeApp(config);

const {
  validateSignupData,
  validateLoginData
} = require("../util/dataValidator");

exports.signup = (req, res) => {
  //get input from request
  const newUser = {
    email: req.body.email,
    password: req.body.password,
    confirmPassword: req.body.confirmPassword,
    userName: req.body.userName
  };

  //validate data, if data is invalid, response with error messages
  const { valid, errors } = validateSignupData(newUser);
  if (!valid) return res.status(400).json(errors);

  const noImg = "no-img.png";

  let token, userId;

  //look into the db and check if userName document exist or not, if yes, response with error message, if no, create an account
  db.doc("/users/" + newUser.userName)
    .get()
    .then(doc => {
      if (doc.exists) {
        return res.status(400).json({
          userName: "This user name is already taken"
        });
      } else {
        return firebase
          .auth()
          .createUserWithEmailAndPassword(newUser.email, newUser.password);
      }
    })
    //get userId (uid) from value returned above and get token
    .then(data => {
      userId = data.user.uid;
      return data.user.getIdToken();
    })
    //save the token and create a new document under the name of userName and save user data there
    .then(idToken => {
      token = idToken;
      const userCredentials = {
        userName: newUser.userName,
        email: newUser.email,
        createdAt: new Date().toISOString(),
        imageUrl: `https://firebasestorage.googleapis.com/v0/b/${config.storageBucket}/o/${noImg}?alt=media`,
        userId,
        isAdmin: false
      };
      return db.doc(`/users/${newUser.userName}`).set(userCredentials);
    })
    //return the token for authentication
    .then(() => {
      return res.status(201).json({ token });
    })
    //catch any error and response those errors
    .catch(err => {
      console.error(err);
      if (err.code === "auth/email-already-in-use") {
        return res.status(400).json({ email: "Email is already in use" });
      } else {
        return res
          .status(500)
          .json({ general: "Something went wrong, please try again" });
      }
    });
};

exports.login = (req, res) => {
  //get data from request
  const user = {
    email: req.body.email,
    password: req.body.password
  };

  //validate data, if data is invalid, response with error messages
  const { valid, errors } = validateLoginData(user);
  if (!valid) return res.status(400).json(errors);

  //login with inputted data and return a token for authenication
  firebase
    .auth()
    .signInWithEmailAndPassword(user.email, user.password)
    .then(data => {
      return data.user.getIdToken();
    })
    .then(token => {
      return res.json({ token });
    })
    //catch any errors and response with a general message
    .catch(err => {
      console.error(err);
      return res
        .status(403)
        .json({ general: "Wrong user detail, please try again" });
    });
};

exports.getCurrentUser = (req,res) =>{
  let userData = {};
  db.doc(`/users/${req.user.userName}`)
    .get()
    .then(doc =>{
      if (doc.exists){
        userData.userDetails = doc.data();
      }
      return res.json(userData);
    })
    .catch(err =>{
      console.error(err);
      return res.status(500).json({error: err.code})
    })
}

exports.changeUserDetail = (req,res) =>{

  const user = {
    userName: req.body.userName,
    bio: req.body.bio,
    location: req.body.location
  };

  // let userData = {};
  // db.doc(`/users/${req.user.userName}`)
  //   .get()
  //   .then(doc =>{
  //     if (doc.exists){
  //       userData.userDetails = user.data();
  //     }
  //     return res.json(userData);
  //   })
  //   .catch(err =>{
  //     console.error(err);
  //     return res.status(500).json({error: err.code})
  //   })
  
  var currentuser = db.auth().currentUser;

  currentuser.updateProfile(
              {
                userName: user.userName,
                bio: user.bio,
                location: user.location
              }
            )
            .then()
            .catch(err =>{
              console.error(err);
              return res.status(500).json({error: err.code})
            })
}

exports.deleteUser = (req,res) =>{
  var user = firebase.auth().currentUser;

  user.delete().then(function() {
    // User deleted.
  }).catch(function(error) {
    // An error happened.
  });
}