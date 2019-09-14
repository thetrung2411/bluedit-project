const functions = require("firebase-functions");
const app = require("express")();
const {signup, login, getCurrentUser, editProfile} = require("./handlers/users");
const {post, getAllPosts, getPost} = require("./handlers/posts");
const {comment, getAllComments} = require("./handlers/comments");
const {getAllSubscribe} = require("./handlers/subscribe");
const FBAuth = require("./util/fbAuth");
const cors = require("cors");

app.use(cors());
//Login, SignUp
app.post("/signup", signup);
app.post("/login", login);
app.get("/user", FBAuth, getCurrentUser);
app.post("/editProfile", FBAuth, editProfile);
//app.get("/allSubscribe", getAllSubscribe);

//Post
app.post("/post", FBAuth, post);
app.get("/getAllPosts", getAllPosts);
app.get("/post/:postId", getPost);
app.post("/post/:postId/comment", FBAuth, comment);
app.get("/getAllComments", getAllComments);

exports.api = functions.https.onRequest(app);