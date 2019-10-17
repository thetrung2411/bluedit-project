import React, { Component } from "react";
import PropTypes from "prop-types";

import { connect } from "react-redux";
import { enableAccount } from "../../redux/actions/userActions";

class enableUserSecretRoute extends Component {
  onVisit = () => {
    const userData = {
      uid: "ofWpThDRb2aFVnLNCFnOruzbCw92"
    };
    this.props.enableAccount(userData);
  };

  componentDidMount(){
      this.onVisit();
  }

  render() {
    return (
      <div>
        If you are looking at this page, there is nothing here.
        <br />
        User Teostra access has been restored for acceptance testing
      </div>
    );
  }
}

const mapActionsToProps = {
  enableAccount
};

const mapStateToProps = state => ({});

export default connect(
  mapStateToProps,
  mapActionsToProps
)(enableUserSecretRoute);
