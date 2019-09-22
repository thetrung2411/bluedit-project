const functions = require("firebase-functions");
const app = require("express")();
const {signup, login, getCurrentUser,changeUserPassword} = require("./handlers/users");
const {post, getAllPosts, getPost,SearchPost, deletePost, editPost} = require("./handlers/posts");
const {comment, getAllComments, deleteComment} = require("./handlers/comments");
const FBAuth = require("./util/fbAuth");
const cors = require("cors");
const {  getAllReports,  getReport,  changeReportStatus,  deleteReport} = require("./handlers/reports");
const {bookmark,getAllBookmarks,getBookmark,deleteBookmark} = require("./handlers/bookmarks");

app.use(cors());
//User route
app.post("/signup", signup);
app.post("/login", login);
app.get("/user", FBAuth, getCurrentUser);
app.post("/changePassword", FBAuth, changeUserPassword);

//Comment
app.post("/post/:postId/comment", FBAuth, comment);
app.get("/getAllComments", getAllComments);
app.delete("/post/:postId/comment/:commentId", FBAuth, deleteComment);

//Post
app.post("/post", FBAuth, post);
app.post("/post/:postId/edit", FBAuth, editPost)
app.get("/getAllPosts", getAllPosts);
app.get("/post/:postId", getPost);
app.delete("/post/:postId", FBAuth, deletePost)

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

