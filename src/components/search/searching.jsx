import React from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "../appBar/appBar";

function searching (props) {
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