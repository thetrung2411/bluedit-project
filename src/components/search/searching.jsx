import React from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "../appBar/appBar";
import SearchPost from "..search/SearchPost";

function searching(props) {
    return (
        <div>
            <AppBar />
            <Grid container spacing = {3} >
            <Grid item xs={8}><SearchItem/></Grid>
            <Grid item xs={4}><SearchPost/></Grid>
            </Grid>
            
        </div>
        
       
    );
}
export default searching;