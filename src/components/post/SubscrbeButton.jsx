import React, { Component } from "react";
import {Button} from "@material-ui/core";
import { PostItemStyles } from "./PostItemsStyles";
import { UserItemStyles } from "../subscriptions/UserItemStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import dayjs from "dayjs";
import { connect } from "react-redux";
import { setOnSubscribe, getSubscribe, getUnsubscribe } from "./../../redux/actions/subscribeAction";



export class SubscrbeButton extends Component {

    handleSubscribe = () => {
        const obj = {
            subscriId: this.props.userDetails.userId,
            subscriber: this.props.userDetails.userName,
            userName: this.props.post.userPosted,
            userId: this.props.post.postId,
            subscribeAt: dayjs().format('YYYY-MM-DD'),
        }
        this.props.setOnSubscribe(obj)
    }

    handleUnSubscribe = () => {
        const { post, subscribes } = this.props;
        var array = [];
        subscribes.forEach(item => {
            if (post.userPosted === item.userName) {
                array.push(item.subscribeID)
            }
        })
        var obj = {
            userNames: array,
        }
        this.props.getUnsubscribe(obj);

    }

    render() {
        const { classes, post } = this.props;
        return (
            <>
                {
                    post.isSub? <Button
                        className={classes.unSubscribe}
                        onClick={() => this.handleUnSubscribe()}
                        >
                            Unsubscribe
                        </Button> 
                        : 
                        <Button
                            className={classes.subscribe}
                            onClick={() => this.handleSubscribe()}
                        >
                            Subscribe
                        </Button>
                }
            </>
        );
    }
}
const mapStateToProps = state => {
    return {}
}

const mapActionsToProps = {
    setOnSubscribe,
    getSubscribe,
    getUnsubscribe,
};

export default connect(
    mapStateToProps,
    mapActionsToProps
)(withStyles(PostItemStyles)(SubscrbeButton));