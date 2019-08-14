import React from "react";
import { Paper, Typography, Grid, CardMedia, Button } from "@material-ui/core";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import UpIcon from "@material-ui/icons/ArrowUpwardRounded"
import DownIcon from "@material-ui/icons/ArrowDownwardRounded"
import Fab from "@material-ui/core/Fab"
const PostItem = props => {
    const { classes } = props;
    return (
        <Paper style={{ padding: 16, width: 440, height: 340}}>
            <Grid container direction="row" spacing={16}>
        <Typography>Username</Typography>
        </Grid>
        <Grid>
        <Typography> ELI5: Why is there so much unpredictability around bank transfers? Why can't they all be instant?
        Salries, bank transfers, cheque deposits, etc all have a huge window of time for when these transactions will be compete. In an age of automation, how is this possible? Why can't everything be instant?
        </Typography>
        </Grid>
        <Grid container direction="row" spacing={16}> 
            <Fab><UpIcon/></Fab>
            <Fab><DownIcon/></Fab>
        </Grid>
        <Grid>
        <Typography>Comment 1 </Typography>
        </Grid>
        <Grid>
        <Typography>Comment 2 </Typography>
        </Grid>
        <Grid>
        <Typography>Comment 3 </Typography>
        </Grid>
        </Paper>
    );
};



export default PostItem;
