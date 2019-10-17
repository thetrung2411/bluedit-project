const { db, admin } = require("../util/admin");

const config = require("../util/config");

const firebase = require("firebase");
firebase.initializeApp(config);

const {
  validateSignupData,
  validateLoginData,
  validateNewPasswordData
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
      if (err.code === "auth/user-disabled")
        return res
          .status(403)
          .json({ general: "Account has been disable, please contact Admin" });
      else
        return res
          .status(403)
          .json({ general: "Wrong user detail, please try again" });
    });
};

exports.changeUserPassword = (req, res) => {
  let userData = {
    newPassword: req.body.newPassword,
    confirmPassword: req.body.confirmPassword
  };

  const { valid, errors } = validateNewPasswordData(userData);
  if (!valid) return res.status(400).json(errors);

  //change user password by using data from request
  admin
    .auth()
    .updateUser(req.user.uid, {
      password: userData.newPassword
    })
    //response with a message in case of success or return an error
    .then(() => {
      return res.json({ general: "Change password successfully" });
    })
    .catch(err => {
      console.error(err);
      return res
        .status(500)
        .json({ general: "Something went wrong, please try again" });
    });
};

exports.enableUser = (req, res) => {
  admin
    .auth()
    .updateUser(req.body.uid, {
      disabled: false
    })
    .then(() => {
      return res.json({ general: "User enabled successfully" });
    })
    .catch(err => {
      console.error(err);
      return res
        .status(500)
        .json({ general: "Something went wrong, please try again" });
    });
};

exports.disableUser = (req, res) => {
  admin
    .auth()
    .updateUser(req.user.uid, {
      disabled: true
    })
    .then(() => {
      return res.json({ general: "User disabled successfully" });
    })
    .catch(err => {
      console.error(err);
      return res
        .status(500)
        .json({ general: "Something went wrong, please try again" });
    });
};

exports.getCurrentUser = (req, res) => {
  let userData = {};
  //get user detail based on the userName taken from FBAuth
  db.doc(`/users/${req.user.userName}`)
    .get()
    .then(doc => {
      if (doc.exists) {
        userData.userDetails = doc.data();
      }
      return res.json(userData);
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};

exports.editProfile = (req, res) => {
  db.doc(`/users/${req.user.userName}`)
    .update(req.body)
    .then(() => {
      return res.json({ message: "profile edit successfully" });
    })
    .catch(err => {
      console.error(err);
      return res.status(500).json({ error: err.code });
    });
};

exports.getAllUsers = (req, res) => {
  db.collection("users")
    .orderBy("userName", "desc")
    .get()
    .then(data => {
      let user = [];
      data.forEach(doc => {
        user.push({
          email: doc.data().email,
          createdAt: doc.data().createdAt,
          location: doc.data().location,
          userName: doc.data().userName,
          phoneNumber: doc.data().phoneNumber,
          gender: doc.data().gender,
          dateOfBirth: doc.data().dateOfBirth
        });
      });
      return res.json(user);
    })
    .catch(err => {
      console.error(err);
    });
};
