import React, { Component } from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { disableAccount } from "../../redux/actions/userActions";
import ConfirmDialog from  "./ConfirmDialog"

import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";

const styles = {
  typography: {
    useNextVariants: true
  },
  pageTitle: {
    margin: "10px auto 10px auto"
  },
  button: {
    marginTop: 20,
    position: "relative"
  },
  progress: {
    position: "absolute"
  }
};

class DisableAccount extends Component {
  state = {};

  handleDisable = () => {
    this.props.disableAccount(this.props.history);
  };

  render() {
    const {
      classes,
      UI: { loading },
      user: {userDetails}
    } = this.props;

    return (
      <div>
        <Typography variant="h6" className={classes.pageTitle}>
          Disable Account
        </Typography>
        <small>
          By clicking on this button, your account will be disable and you will
          be logged out. <br />
          When an account is disabled, the user will not be able to login using
          their email. <br />
          You cannot also not be able to signup using that email. <br />
          Disable account does not mean delete an account. <br />
          To regain access to disabled account, please contact site admin.
        </small>
        <br />
        <ConfirmDialog userName={userDetails.userName} history={this.props.history}/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  UI: state.UI,
  user: state.user
});

const mapActionsToProps = {
  disableAccount
};

DisableAccount.propTypes = {
  disableAccount: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired
};

export default connect(
  mapStateToProps,
  mapActionsToProps
)(withStyles(styles)(DisableAccount));
