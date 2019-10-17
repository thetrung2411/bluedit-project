import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import { UserItemStyles } from "./UserItemStyles";
import { Button } from "@material-ui/core";
import dayjs from "dayjs";
import { connect } from "react-redux";
import { setOnSubscribe, getSubscribe, getUnsubscribe } from "./../../redux/actions/subscribeAction";



export class SubscribeButton extends Component {

    handleSubscribe = () => {
        const { post: { postId, subscribe } } = this.props;
        console.log("this.props -->", this.props);
        const obj = {
            subscriId: this.props.userDetails.userId,
            subscriber: this.props.userDetails.userName,
            userName: this.props.post.userName,
            createdAt: this.props.post.createdAt,
            userId: this.props.post.createdAt,
            subscribeAt: dayjs().format('YYYY-MM-DD'),
        }
        this.props.setOnSubscribe(obj)
    }

    handleUnSubscribe = () => {
        const { post, subscribes } = this.props;
        console.log("subscribes -->", subscribes);
        var array = [];
        subscribes.forEach(item => {
            if (post.userName === item.userName) {
                array.push(item.subscribeID)
            }
        })
        var obj = {
            userNames: array
        }
        this.props.getUnsubscribe(obj)

    }

    render() {
        const { classes, post } = this.props;

        return (
            <>
                {
                    post.issubfg ? <Button
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
)(withStyles(UserItemStyles)(SubscribeButton));

