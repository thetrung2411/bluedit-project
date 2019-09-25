const functions = require("firebase-functions");
const app = require("express")();
const {signup, login, getCurrentUser,changeUserPassword, editProfile, getAllUsers} = require("./handlers/users");
const {post, getAllPosts, getPost,SearchPost, deletePost, editPost, setHidden} = require("./handlers/posts");
const {comment, getAllComments, deleteComment, editComment} = require("./handlers/comments");
const FBAuth = require("./util/fbAuth");
const cors = require("cors");
const {  getAllReports,  getReport,  changeReportStatus,  deleteReport} = require("./handlers/reports");
const {bookmark,getAllBookmarks,getBookmark,deleteBookmark} = require("./handlers/bookmarks");
const {getAllSubscribe, unSubscribe} = require("./handlers/subscribe");

app.use(cors());
//User route
app.post("/signup", signup);
app.post("/login", login);
app.get("/user", FBAuth, getCurrentUser);
app.post("/changePassword", FBAuth, changeUserPassword);
app.post("/editProfile", FBAuth, editProfile);

//Subscribe
app.get("/allSubscribe", getAllSubscribe);
app.get("/allUsers", getAllUsers);
app.post("/unSubscribe", unSubscribe);

//Comment
app.post("/post/:postId/comment", FBAuth, comment);
app.get("/getAllComments", getAllComments);
app.delete("/post/:postId/comment/:commentId", FBAuth, deleteComment);
app.post("/post/:postId/comment/:commentId/edit", FBAuth, editComment);
//Post
app.post("/post", FBAuth, post);
app.post("/post/:postId/edit", FBAuth, editPost)
app.get("/getAllPosts", getAllPosts);
app.get("/post/:postId", getPost);
app.delete("/post/:postId", FBAuth, deletePost);
app.post("/post/:postId/setHidden", FBAuth, setHidden);
//Report
app.get("/getAllReports", getAllReports);
app.get("/getReport/:reportId", getReport);
app.post("/changeStatus/:reportId", changeReportStatus);
app.delete("/deleteReport/:reportId", deleteReport);
//Bookmark
app.post("/bookmark", FBAuth, bookmark);
app.get("/getAllBookmarks", getAllBookmarks);
app.get("/getBookmark/:bookmarkid", getBookmark);
app.delete("/deleteBookmark/:bookmarkid", deleteBookmark);
//app.get("/SearchPost/:body", SearchPost);

exports.api = functions.https.onRequest(app);

