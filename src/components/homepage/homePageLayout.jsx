import React from "react";
import AppBar from "../appBar/appBar";
import PostItem from "../post/postItems";
import Grid from "@material-ui/core/Grid";
import RecommendationItem from "../post/Recommendation";
function homePageLayout(props) {
    return (
        <div>
            <AppBar />
            <Grid container spacing = {3} >
            <Grid item xs={8}><PostItem/></Grid>
            <Grid item xs={4}><RecommendationItem/></Grid>
            </Grid>
            
        </div>
        
       
    );
}
export default homePageLayout;
