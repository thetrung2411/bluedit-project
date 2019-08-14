import React from "react";
import AppBar from "../appBar/appBar";
import PostItem from "../post/postItems";
function homePageLayout(props) {
    const { classes } = props;
    return (
        <div>
            <AppBar />
            <br></br>
            <PostItem/>
            </div>
       
    );
}
export default homePageLayout;
