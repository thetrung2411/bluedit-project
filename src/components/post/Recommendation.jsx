import React from "react";
import {Typography, Grid } from "@material-ui/core";
import {Card, CardHeader} from "@material-ui/core";
import {RecommendationStyles} from "./RecommendationStyle";
import withStyles from "@material-ui/core/styles/withStyles";
import Avatar from "@material-ui/core/Avatar";
import ArrowDropUpOutlinedIcon from '@material-ui/icons/ArrowDropUpOutlined';
import ArrowDropDownOutlinedIcon from '@material-ui/icons/ArrowDropDownOutlined';
import IconButton from "@material-ui/core/IconButton";
function RecommendationItem (props){
    const { classes } = props;
    return (
        <Card>
        <Grid container className = {classes.grid}>
        <Typography variant = 'h5'>Top user's post</Typography>
        <Card className = {classes.paper}>
            <CardHeader 
        avatar={
                <Avatar>
                  R
                </Avatar>
              }
        action={
         <IconButton><ArrowDropUpOutlinedIcon fontSize="large" className = {classes.color}></ArrowDropUpOutlinedIcon></IconButton>
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
        action={
                <IconButton><ArrowDropDownOutlinedIcon fontSize="large" className = {classes.red}></ArrowDropDownOutlinedIcon></IconButton>
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
        action={
                <IconButton><ArrowDropUpOutlinedIcon fontSize="large" className = {classes.color}></ArrowDropUpOutlinedIcon></IconButton>
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
        action={
                <IconButton><ArrowDropUpOutlinedIcon fontSize="large" className = {classes.color}></ArrowDropUpOutlinedIcon></IconButton>
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
              action={
                <IconButton><ArrowDropDownOutlinedIcon fontSize="large" className = {classes.red}></ArrowDropDownOutlinedIcon></IconButton>
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
