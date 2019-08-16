import React from "react";
import {Typography, Grid, CardMedia} from "@material-ui/core";
import {Card, CardHeader, CardContent, CardActions} from "@material-ui/core";
import UpIcon from "@material-ui/icons/ArrowUpwardTwoTone";
import DownIcon from "@material-ui/icons/ArrowDownwardTwoTone";
import IconButton from "@material-ui/core/IconButton";
import Fab from "@material-ui/core/Fab";
import {postItemStyles} from "./postItemsStyles";
import MoreIcon from "@material-ui/icons/MoreVert";
import withStyles from "@material-ui/core/styles/withStyles";
import Avatar from "@material-ui/core/Avatar";
import imagePost from "../../assets/hehe.png";
function PostItem (props){
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
                  R
                </Avatar>
              }
        action={
          <IconButton aria-label="settings">
            <MoreIcon/>
          </IconButton>
        }
        titleTypographyProps={{align:"left"}}
        title = "Username"
        subheaderTypographyProps={{align:"left"}}
        subheader="August 14, 2019"/>
        <CardMedia className ={classes.media} image = {imagePost}/>
        <CardContent>
        <Typography align = "justify"> ELI5: Why is there so much unpredictability around bank transfers? Why can't they all be instant?
        Salries, bank transfers, cheque deposits, etc all have a huge window of time for when these transactions will be compete. In an age of automation, how is this possible? Why can't everything be instant?
        </Typography>
        </CardContent>
        <CardContent><Typography color="secondary" align="left">1,5k upvotes</Typography></CardContent>
        <CardActions > 
        <Fab size="small" className ={classes.fab} onClick = {UpVote}><UpIcon/></Fab>
        <Fab size="small" className ={classes.fab} onClick = {UpVote}><DownIcon/></Fab>
        </CardActions>
        <Grid>
        <Typography>Comment 1 </Typography>
        </Grid>
        <Grid>
        <Typography>Comment 2 </Typography>
        </Grid>
        <Grid>
        <Typography>Comment 3 </Typography>
        </Grid>
        </Card>
        </Grid>
    );
}
export default withStyles (postItemStyles)(PostItem);
