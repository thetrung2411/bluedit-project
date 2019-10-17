import React from "react";
import { Typography, Grid } from "@material-ui/core";
import { Card, CardHeader } from "@material-ui/core";
import { RecommendationStyles } from "./RecommendationStyle";
import withStyles from "@material-ui/core/styles/withStyles";
import Avatar from "@material-ui/core/Avatar";
import ArrowDropUpOutlinedIcon from "@material-ui/icons/ArrowDropUpOutlined";
import IconButton from "@material-ui/core/IconButton";
function RecommendationItem(props) {
  const { classes } = props;
  return (
    <Card className={classes.grid}>
      <Grid container className={classes.grid}>
        <Typography variant="h5" className={classes.typo} >Top user's post</Typography>
        <Card className={classes.paper}>
          <CardHeader
            avatar={<Avatar>R</Avatar>}
            action={
              <IconButton>
                <ArrowDropUpOutlinedIcon
                  fontSize="large"
                  className={classes.color}
                ></ArrowDropUpOutlinedIcon>
              </IconButton>
            }
            titleTypographyProps={{ align: "left" }}
            title="Username"
          />
        </Card>

        
          <Card className={classes.paper}>
            <CardHeader
              avatar={<Avatar>S</Avatar>}
              action={
                <IconButton>
                  <ArrowDropUpOutlinedIcon
                    fontSize="large"
                    className={classes.color}
                  ></ArrowDropUpOutlinedIcon>
                </IconButton>
              }
              titleTypographyProps={{ align: "left" }}
              title="SuddenlyGay"
            />
          </Card>
        
        
          <Card className={classes.paper}>
            <CardHeader
              avatar={<Avatar>J</Avatar>}
              action={
                <IconButton>
                  <ArrowDropUpOutlinedIcon
                    fontSize="large"
                    className={classes.color}
                  ></ArrowDropUpOutlinedIcon>
                </IconButton>
              }
              titleTypographyProps={{ align: "left" }}
              title="Jotaro"
            />
          </Card>
        
      </Grid>
    </Card>
  );
}
export default withStyles(RecommendationStyles)(RecommendationItem);
