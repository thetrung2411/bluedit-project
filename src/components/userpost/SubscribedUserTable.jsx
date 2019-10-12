import React, { Component } from "react";
import PropTypes from "prop-types";
import { Typography, Grid } from "@material-ui/core";
import { Card, CardHeader, Button } from "@material-ui/core";
import { SubscribedUserTableStyle } from "./SubscribedUserTableStyle";
import withStyles from "@material-ui/core/styles/withStyles";
import Avatar from "@material-ui/core/Avatar";
import axiosConfig from "../../axiosConfig";
import { connect } from "react-redux";
import { getAllPosts, postSubscribe } from "../../redux/actions/postActions";
import { getUserData, } from "../../redux/actions/userActions";
import { getSubscribe } from "./../../redux/actions/subscribeAction";


class SubscribedUserTable extends Component {
    state = {
        allUser: []
    }

    componentDidMount() {
        this.props.getAllPosts();
        this.props.getSubscribe();
        this.props.getUserData();
        axiosConfig
            .get("/allUsers")
            .then(res => {
                this.setState({
                    allUser: res.data
                });
            })
            .catch(err => console.log(err));
    }



    render() {
        const { allUser } = this.state;
        const { classes } = this.props;

        const mySubscribedUser = this.props.post.subscribes.filter(item => item.subscriber === this.props.user.userDetails.userName)
        const mySubscribedUsers = []
        mySubscribedUser.forEach(item => {
            allUser.forEach(allUserItem => {
                if (allUserItem.userName === item.userName) {
                    mySubscribedUsers.push(allUserItem)
                }
            })
        })

        return (
            <Card>
                <Grid cointainer className={classes.grid}>
                    <Typography variant='h5'>Your Subscribed Users</Typography>
                    {
                        mySubscribedUsers.map((user, index) =>
                            <Grid>
                                <Button onClick={() => { window.location.href = '/subscribedUserpage?name=' + user.userName }}>
                                    <Card className={classes.paper}>
                                        <CardHeader avatar={<Avatar> {(user.userName).slice(0, 1)} </Avatar>}
                                            titleTypographyProps={{ align: "left" }}
                                            title={user.userName} />
                                    </Card>
                                </Button>
                            </Grid>
                        )}
                </Grid>
            </Card>
        )
    }
}

SubscribedUserTable.propTypes = {
    getAllPosts: PropTypes.func.isRequired,
    postSubscribe: PropTypes.func.isRequired,
    UI: PropTypes.object.isRequired,
    post: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}

const mapStateToProps = (state) => {
    return {
        UI: state.UI,
        post: state.post,
        subscribes: state.post.subscribes,
        user: state.user
    }
}
const mapActionToProps = {
    getAllPosts,
    postSubscribe,
    getUserData,
    getSubscribe
}
export default connect(mapStateToProps, mapActionToProps)(withStyles(SubscribedUserTableStyle)(SubscribedUserTable));