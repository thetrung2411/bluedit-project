 // components/Search.js
 import React, { useState } from "react";
 import AppBar from "@material-ui/core/AppBar";
 import Button from "@material-ui/core/Button";
 import IconButton from "@material-ui/core/IconButton";
 import InputBase from "@material-ui/core/InputBase";
 import HomeIcon from "@material-ui/icons/HomeRounded";
 import SearchIcon from "@material-ui/icons/Search";
 import Toolbar from "@material-ui/core/Toolbar";
 import Typography from "@material-ui/core/Typography";
 import { Link } from "react-router-dom";
 import { appBarStyles } from "./appBarStyles";
 import withStyles from "@material-ui/core/styles/withStyles";
 import axiosConfig from "../../axiosConfig";
 import { connect } from 'react-redux';
 import { SearchPost,BlackPost } from "../../redux/actions/postActions";
 
 
 
 export class seatch extends React.Component {
     state = {
         value: "",
         name: "",
         blackname: "",
     };
 
     inputchange1 = (e) => {
         this.setState({
             name: e.target.value
         });
     }
 
     inputchange2 = (e) => {
         this.setState({
             value: e.target.value
         });
     }
 
     inputchange3 = (e) => {
         this.setState({
             blackname: e.target.value
         });
     }
 
     searchHand = () => {
         const { value, name } = this.state;
         if (!value && !name) {
             return;
         }
         this.props.SearchPost(value.replace(/(^\s*)|(\s*$)/g, ""), name.replace(/(^\s*)|(\s*$)/g, ""));
     }
 
     blacknameHand = () => {
         const { blackname } = this.state;
         if (!blackname) {
             return;
         }
         this.props.BlackPost(blackname.replace(/(^\s*)|(\s*$)/g, ""));
     }
 
 
 
     render() {
         const { classes } = this.props;
         return (
             <div>
                 <AppBar position="static" className={classes.root} >
                     <Toolbar>
                         <Link to="/">
                             <IconButton classname={classes.button}>
                                 <HomeIcon />
                             </IconButton>
                         </Link>
                         <Typography
                             variant="h5"
                         >
                             Bluedit
                     </Typography>
                         <div />
                         <div className={classes.grow}></div>
                         <div className={classes.search}>
                             <InputBase
                                 placeholder="name Search…"
                                 classes={{
                                     root: classes.inputRoot,
                                     input: classes.inputInput
                                 }}
                                 onChange={(e) => this.inputchange1(e)}
                             />
                             <InputBase
                                 placeholder="body Search…"
                                 classes={{
                                     root: classes.inputRoot,
                                     input: classes.inputInput
                                 }}
                                 onChange={(e) => this.inputchange2(e)}
                             />
                             <Button variant="contained" onClick={() => this.searchHand()}>
                                 Search
                         </Button>
                         </div>
                         <div className={classes.search}>
                             <InputBase
                                 placeholder="input black name"
                                 classes={{
                                     root: classes.inputRoot,
                                     input: classes.inputInput
                                 }}
                                 onChange={(e) => this.inputchange3(e)}
                             />
                             <Button variant="contained" onClick={() => this.blacknameHand()}>
                                 Black
                         </Button>
                         </div>
 
 
                         <div className={classes.grow}></div>
                         <div>
                             <Link to="/Login" className={classes.noDecor}>
                                 <Button variant="contained" className={classes.button}>
                                     Login
                         </Button>
                             </Link>
                         </div>
                     </Toolbar>
                 </AppBar>
             </div>
         )
     }
 }
 
 
 const mapStateToProps = state => ({
 
 });
 
 const mapActionsToProps = {
     SearchPost,
     BlackPost
 };
 
 export default connect(
     mapStateToProps,
     mapActionsToProps
 )(withStyles(appBarStyles)(search));
 
//  import React, { Component } from "react";
// import AppBar from "../appBar/appBar";
// import PostItems from "../post/PostItems";
// import Grid from "@material-ui/core/Grid";
// import RecommendationItem from "../post/Recommendation";
// import CircularProgress from "@material-ui/core/CircularProgress";
// import axiosConfig from "../../axiosConfig";
// import { connect } from 'react-redux';
// import { getAllPosts } from '../../redux/actions/postActions';

// export class HomePageLayout extends Component {
//   state = {
//     post: null
//   };
//   componentDidMount() {
//     this.props.getAllPosts();
//   }
//   render() {

//     const { post, posts } = this.props;
//     let postMarkUp = post.length ? (
//       post.map(item => <PostItems post={item} />)
//     ) : posts.length ? (
//       posts.map(item => <PostItems post={item} />)
//     ) : <CircularProgress color="inherit" />;
//     return (
//       <div>
//         <AppBar />
//         <Grid container spacing={3}>
//           <Grid item xs={8}>
//             {postMarkUp}
//           </Grid>
//           <Grid item xs={4}>
//             <RecommendationItem />
//           </Grid>
//         </Grid>
//       </div>
//     );
//   }
// }

// const mapStateToProps = state => {
//   console.log('state', state)
//   return {
//     post: state.post.post,
//     posts: state.post.posts,
//   };
// };

// const mapActionsToProps = {
//   getAllPosts
// };

// export default connect(
//   mapStateToProps,
//   mapActionsToProps
// )(HomePageLayout);
