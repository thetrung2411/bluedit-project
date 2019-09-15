const functions = require("firebase-functions");
const app = require("express")();
const {signup, login, getCurrentUser} = require("./handlers/users");
const {post, getAllPosts, getPost} = require("./handlers/posts");
const {comment, getAllComments} = require("./handlers/comments");
const FBAuth = require("./util/fbAuth");
const cors = require("cors");

app.use(cors());
//Login, SignUp
app.post("/signup", signup);
app.post("/login", login);
app.get("/user", FBAuth, getCurrentUser);

//Post
app.post("/post", FBAuth, post);
app.get("/getAllPosts", getAllPosts);
app.get("/post/:postId", getPost);
app.post("/post/:postId/comment", FBAuth, comment);
app.get("/getAllComments", getAllComments);
app.get("/SearchPost", SearchPost);
exports.api = functions.https.onRequest(app);