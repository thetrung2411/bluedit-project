const functions = require("firebase-functions");
const app = require("express")();
const {signup, login, getCurrentUser, changeUserPassword} = require("./handlers/users");
const {post, getAllPosts, getPost} = require("./handlers/posts");
const {comment, getAllComments} = require("./handlers/comments");
const FBAuth = require("./util/fbAuth");
const cors = require("cors");

app.use(cors());
//User route
app.post("/signup", signup);
app.post("/login", login);
app.get("/user", FBAuth, getCurrentUser);
app.post("/changePassword", FBAuth, changeUserPassword);

//Post
app.post("/post", FBAuth, post);
app.get("/getAllPosts", getAllPosts);
app.get("/post/:postId", getPost);
app.post("/post/:postId/comment", FBAuth, comment);
app.get("/getAllComments", getAllComments);

exports.api = functions.https.onRequest(app);