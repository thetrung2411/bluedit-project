import React, { Component } from "react";
import { UserItemStyles } from "./UserItemStyles";
import withStyles from "@material-ui/core/styles/withStyles";
import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";
import Table from '@material-ui/core/Table';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import SubscribeButton from "./SubscribeButton";
// import SubscribeButton from "../post/SubscrbeButton";


export class SubscribeItem extends Component {
  renderSubscribe = () => {
    const { classes, subscribe: { subscribe } } = this.props;
    if (subscribe) {
      return (
        <div
          className={classes.unSubscribe}
          onClick={() => this.handleSubscribe()}
        >
          Unsubscribe
        </div>
      )
    }

    return (
      <div
        className={classes.subscribe}
        onClick={() => this.handleSubscribe()}
      >
        Subscribe
      </div>
    )
  }

  handleSubscribe = () => {
    const { subscribe: { postId, subscribe } } = this.props;
    this.props.postSubscribe({ subscribe, postId })
  }

  render() {
    dayjs.extend(relativeTime)
    const {subscribe, user, subscribes} = this.props;
    return (
      <div style={{ width: '100%', textAlign: 'left', margin: '0 auto' }}>
        <Table>
          <TableRow>
            <TableCell align="left">{subscribe.userName}</TableCell>
            <TableCell align="right"><SubscribeButton post={subscribe} userDetails={user.userDetails} subscribes={subscribes} /></TableCell>
          </TableRow>
        </Table>
      </div>
    );
  }
}

export default withStyles(UserItemStyles)(SubscribeItem);