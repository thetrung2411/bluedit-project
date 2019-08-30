const functions = require("firebase-functions");
const app = require("express")();
const {signup, login, getCurrentUser} = require("./handlers/users");
const {post, getAllPosts, getPost} = require("./handlers/posts");
const {comment, getAllComments} = require("./handlers/comments");
const FBAuth = require("./util/fbAuth");

//Login, register, get current user detail
app.post("/signup", signup);
app.post("/login", login);
app.get("/user", FBAuth, getCurrentUser);

//Post
app.post("/post", FBAuth, post);
app.get("/getAllPosts", getAllPosts);
app.get("/post/:postId", getPost);
app.post("/post/:postId/comment", FBAuth ,comment);
app.get("/getAllComments", getAllComments);

exports.api = functions.https.onRequest(app);