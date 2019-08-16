import React from "react";
import {Typography, Grid } from "@material-ui/core";
import {Card, CardHeader} from "@material-ui/core";
import {RecommendationStyles} from "./RecommendationStyle";
import withStyles from "@material-ui/core/styles/withStyles";
import Avatar from "@material-ui/core/Avatar";

function RecommendationItem (props){
    const { classes } = props;
    return (
        <Card>
        <Grid cointainer className = {classes.grid}>
        <Typography>Top user's post</Typography>
        <Card className = {classes.paper}>
            <CardHeader 
        avatar={
                <Avatar>
                  R
                </Avatar>
              }
        titleTypographyProps={{align:"left"}}
        title = "Username"/>
        </Card>
        <Grid> 
            <Card className = {classes.paper}>
            <CardHeader 
        avatar={
                <Avatar>
                 T
                </Avatar>
              }
        titleTypographyProps={{align:"left"}}
        title = "Thetrung2411"/>
        </Card> 
        </Grid>
        <Grid> 
            <Card className = {classes.paper}>
            <CardHeader 
        avatar={
                <Avatar>
                 S
                </Avatar>
              }
        titleTypographyProps={{align:"left"}}
        title = "SuddenlyGay"/>
        </Card> 
        </Grid>
        <Grid> 
            <Card className = {classes.paper}>
            <CardHeader 
        avatar={
                <Avatar>
                 J
                </Avatar>
              }
        titleTypographyProps={{align:"left"}}
        title = "Jotaro"/>
        </Card> 
        </Grid>
        <Grid> 
            <Card className = {classes.paper}>
            <CardHeader 
        avatar={
                <Avatar>
                 P
                </Avatar>
              }
        titleTypographyProps={{align:"left"}}
        title = "PhineasNFerb"/>
        </Card> 
        </Grid> 
       </Grid>
       </Card>
    );
}
export default withStyles (RecommendationStyles)(RecommendationItem);
