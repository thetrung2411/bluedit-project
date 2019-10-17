import React, { Component } from "react";
import PropTypes from "prop-types";
import { Redirect } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import AppBarWithAvatar from "../appBar/AppBarWithAvatar";
import Sidebar from "../sidebar/sidebar";
import SubscribeItem from "./SubscribeItem";
import axiosConfig from "../../axiosConfig";
import { connect } from "react-redux";
import { getAllPosts, postSubscribe } from "../../redux/actions/postActions";
import { getUserData, } from "../../redux/actions/userActions";
import { getSubscribe, getUnsubscribe } from "./../../redux/actions/subscribeAction";
import { UserItemStyles } from "./UserItemStyles";

export class subscriptions extends Component {
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
        const { subscribes, loading} = this.props.post;
        const { user } = this.props;
        const { allUser } = this.state;
        const {user: { authenticated }} = this.props;

        const notLoginUser = allUser.filter(item => item.userName !== user.userDetails.userName)
        notLoginUser.forEach(item => {
            subscribes.forEach(subscribesItem => {
                if (subscribesItem.userName === item.userName) {
                    item.issubfg = true;
                }
            })
        })
        const subscribedUser = notLoginUser.filter(function(index) {
            return index.issubfg
        });
        const notSubscribedUser = notLoginUser.filter(function(index) {
            return !index.issubfg
        });

        if (!authenticated) return <Redirect to="/home" />
        let allSubscribedUser = !loading ? (
            subscribedUser.map(item => <SubscribeItem key={item.userName} user={user} subscribes={subscribes}  postSubscribe={this.props.postSubscribe}  subscribe={item} />)
        ) : (
            <CircularProgress color="inherit" />
        );

        let allNotSubscribedUser = !loading ? (
            notSubscribedUser.map(item => <SubscribeItem key={item.userName} user={user} subscribes={subscribes} postSubscribe={this.props.postSubscribe} subscribe={item} />)
        ) : (
            <CircularProgress color="inherit" />
        );

        return (
            <div>
              <Sidebar />
              <AppBarWithAvatar />
              <div style={{ width: '50%', textAlign: 'left', margin: '0 auto' }}>
                <h2 className="h2">All Subscribed Users</h2>
                {allSubscribedUser}
                <h2 className="h3">View All Not Subscribed Users</h2>
                {allNotSubscribedUser}
              </div>
            </div>
        );
    }
}
subscriptions.propTypes = {
    getSubscribe: PropTypes.func.isRequired,
    getUnsubscribe: PropTypes.func.isRequired,
    postSubscribe: PropTypes.func.isRequired,
    post: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    post: state.post,
    user: state.user
})
const mapActionToProps = {
    getAllPosts,
    postSubscribe,
    getUserData,
    getSubscribe,
    getUnsubscribe
}

export default connect(mapStateToProps, mapActionToProps)(subscriptions);
