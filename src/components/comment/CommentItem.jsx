import React from "react";
import {Typography, Grid} from "@material-ui/core";
import {Card, CardHeader, CardContent} from "@material-ui/core";
import UpIcon from "@material-ui/icons/ArrowUpwardTwoTone";
import Fab from "@material-ui/core/Fab";
import {CommentItemStyles} from "./CommentItemStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import Avatar from "@material-ui/core/Avatar";
import TextField from "@material-ui/core/TextField";

function CommentItem (props){
    const { classes } = props;
    function UpVote(){
        console.log("working");
    }
    return (
        <Grid className = {classes.grid}>
        <Card className = {classes.paper}>
            <CardHeader 
        avatar={
                <Avatar>
                 J
                </Avatar>
              }
        action={
          <Fab size="small" className ={classes.fab} onClick = {UpVote}><UpIcon/></Fab>
        }
        titleTypographyProps={{align:"left"}}
        title = "Jotaro"
        subheaderTypographyProps={{align:"left"}}
        subheader="August 15, 2019"/>
        <CardContent>
        <Typography align = "justify"> As to why we still do this, it's just because they spent vast amounts of money making the systems and processes, making them all capable of following the same standards, making them all robust, and building their processes around that. They're known to work (most of the time). Building new systems would be expensive, risky, and they'd have to redo all their processes, and importantly until all the other banks are doing the same thing in the same way and they can all talk to each other, useless.
Yes, of course everything could be (almost) instant. But there's not a big enough push for it to overcome the inertia of the existing system.
        </Typography>
        
        </CardContent>
        
        </Card>
        <TextField variant="filled" fullWidth placeholder="Comment here..."></TextField>  
        </Grid>
    );
}    

export default withStyles (CommentItemStyles)(CommentItem);
