import React, { Component } from "react";
import Sidebar from "react-sidebar";
import PropTypes from "prop-types";
import userImage from "../../assets/hehe.png";

import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { connect } from "react-redux";

const styles = {
  form: {
    textAlign: "center"
  },
  textField: {
    textAlign: "center",
    margin: "20px auto 10px auto"
  },
  button: {
    marginTop: 20,
    marginBottom: 20
  },
  sidebarButton: {
    marginTop: 90
  },
  root: {
    backgroundImage: `../../assets/UserpageAssets/bgImage.jpg`
  }
};

class Mailform extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bio: "",
      location: "",
      gender: "",
      phoneNumber: "",
      dateOfBirth: "",
      userName: ""
    };
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    const userData = {
      bio: this.state.bio,
      location: this.state.location,
      gender: this.state.gender,
      phoneNumber: this.state.phoneNumber,
      dateOfBirth: this.state.dateOfBirth,
      userName: this.state.userName
    };
  };

  render() {
    const {
      classes,
      UI: { loading }
    } = this.props;

    return (
      <div>
        <table align="center">
          <tbody>
            <tr>
              <td>User Name: </td>
              <td>
                <TextField
                  id="userName"
                  name="userName"
                  type="userName"
                  value={this.state.userName}
                  onChange=""
                  className={classes.textField}
                  fullWidth
                />
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>Type: </td>
              <td>
                <TextField
                  id="type"
                  name="type"
                  type="type"
                  value={this.state.type}
                  onChange={"currency"}
                  className={classes.textField}
                  fullWidth
                  SelectProps={{
                    native: true,
                    MenuProps: {
                      className: classes.menu
                    }
                  }}
                  helperText="Please select your question type"
                  margin="normal"
                />
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <td>Body: </td>
              <td>
                <TextField
                  id="body"
                  name="body"
                  type="body"
                  value={this.state.body}
                  onChange=""
                  className={classes.textField}
                  fullWidth
                />
              </td>
            </tr>
          </tbody>

          <tbody>
            <tr>
              <Link to="/userpage" className={classes.noDecor}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  disabled={loading}
                  className={classes.button}
                  onClick={this.handleSubmit}
                >
                  Save
                </Button>
              </Link>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

Mailform.propTypes = {
  classes: PropTypes.object.isRequired,
  user: PropTypes.object.isRequired,
  UI: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  user: state.user,
  UI: state.UI
});

export default connect(mapStateToProps)(withStyles(styles)(Mailform));
