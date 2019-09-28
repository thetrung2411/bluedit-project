const functions = require("firebase-functions");
const app = require("express")();
<<<<<<< HEAD
const {signup, login, getCurrentUser,changeUserPassword, editProfile, getAllUsers, disableUser} = require("./handlers/users");
const {post, getAllPosts, getPost,SearchPost, deletePost, editPost, hidePost, unhidePost} = require("./handlers/posts");
const {comment, getAllComments, deleteComment, editComment, hideComment, unhideComment} = require("./handlers/comments");
=======
const {signup, login, getCurrentUser,changeUserPassword} = require("./handlers/users");
const {post, getAllPosts, getPost, SearchPost, BlackPosts} = require("./handlers/posts");
const {comment, getAllComments} = require("./handlers/comments");
>>>>>>> 6b7bac7e40a536dfead5d4ac07fe6bf180237586
const FBAuth = require("./util/fbAuth");
const cors = require("cors");
const {  getAllReports,  getReport,  changeReportStatus,  deleteReport} = require("./handlers/reports");
const {bookmark,getAllBookmarks,getBookmark,deleteBookmark} = require("./handlers/bookmarks");
<<<<<<< HEAD
const {getAllSubscribe, unSubscribe} = require("./handlers/subscribe");
=======
>>>>>>> 6b7bac7e40a536dfead5d4ac07fe6bf180237586

app.use(cors());
//User route
app.post("/signup", signup);
app.post("/login", login);
app.get("/user", FBAuth, getCurrentUser);
app.post("/changePassword", FBAuth, changeUserPassword);
<<<<<<< HEAD
app.post("/editProfile", FBAuth, editProfile);
=======
>>>>>>> 6b7bac7e40a536dfead5d4ac07fe6bf180237586

//Subscribe
app.get("/allSubscribe", getAllSubscribe);
app.get("/allUsers", getAllUsers);
app.post("/unSubscribe", unSubscribe);
app.post("/disableUser", FBAuth, disableUser);

//Comment
app.post("/post/:postId/comment", FBAuth, comment);
app.get("/getAllComments", getAllComments);
app.delete("/post/:postId/comment/:commentId", FBAuth, deleteComment);
app.post("/post/:postId/comment/:commentId/edit", FBAuth, editComment);
app.post("/post/:postId/comment/:commentId/hide", FBAuth, hideComment);
app.post("/post/:postId/comment/:commentId/unhide", FBAuth, unhideComment);
//Post
app.post("/post", FBAuth, post);
app.post("/post/:postId/edit", FBAuth, editPost);
app.get("/getAllPosts", getAllPosts);
app.get("/post/:postId", getPost);
<<<<<<< HEAD
app.delete("/post/:postId", FBAuth, deletePost);
app.post("/post/:postId/hide", FBAuth, hidePost);
app.post("/post/:postId/unhide", FBAuth, unhidePost);
=======
app.post("/post/:postId/comment", FBAuth, comment);
app.get("/getAllComments", getAllComments);
app.get("/searchPost", SearchPost);
app.get("/blackuser", BlackPosts);

>>>>>>> 6b7bac7e40a536dfead5d4ac07fe6bf180237586
//Report
app.get("/getAllReports", getAllReports);
app.get("/getReport/:reportId", getReport);
app.post("/changeStatus/:reportId", changeReportStatus);
app.delete("/deleteReport/:reportId", deleteReport);
<<<<<<< HEAD
=======

>>>>>>> 6b7bac7e40a536dfead5d4ac07fe6bf180237586
//Bookmark
app.post("/bookmark", FBAuth, bookmark);
app.get("/getAllBookmarks", getAllBookmarks);
app.get("/getBookmark/:bookmarkid", getBookmark);
app.delete("/deleteBookmark/:bookmarkid", deleteBookmark);
//app.get("/SearchPost/:body", SearchPost);

exports.api = functions.https.onRequest(app);
<<<<<<< HEAD
=======

>>>>>>> 6b7bac7e40a536dfead5d4ac07fe6bf180237586
