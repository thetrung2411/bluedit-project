import React, {Component} from "react";
import AppBarWithAvatar from "../appBar/AppBarWithAvatar";
import Sidebar from "react-sidebar";
import PropTypes from "prop-types";
import userImage from "../../assets/hehe.png";

import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { changeUserData } from "../../redux/actions/userActions";//getUserData//changeUserData

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
  

class editProfile extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            userName: "",
            bio: "",
            location:"",
        };

      }

      handleChange = e => {
        this.setState({
          [e.target.name]: e.target.value
        });
      };

      handleSubmit = e => {
        //e.preventDefault();
        this.setState({
          loading: true
        });
        const userData = {
          //password: this.state.password,
          userName: this.state.userName,
          bio: this.state.bio,
          location: this.state.location
        };
        // this.props.changeUserData(userData, this.props.history);
        this.props.changeUserData();
      };

    render()
    {
        const { classes, UI: {loading} } = this.props;
        
        return (
                <div>
                {/* <form noValidate onSubmit={this.handleSubmit}> */}
                <table align = "center">
                    <tr>
                        <td>
                            User Name:
                        </td>
                        <td>
                            <TextField
                                id="userName"
                                name="userName"
                                type="userName"
                                value = {this.state.userName}
                                onChange={this.handleChange}
                                className={classes.textField}
                                fullWidth
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Location:
                        </td>
                        <td>
                            <TextField
                                id="location"
                                name="location"
                                type="location"
                                value= {this.state.location}
                                onChange={this.handleChange}
                                className={classes.textField}
                                fullWidth
                            />
                        </td>
                    </tr>

                    <tr>
                        <td>
                            Bio:
                        </td>
                        <td>
                            <TextField
                                id="bio"
                                name="bio"
                                type="bio"
                                value = {this.state.bio}
                                onChange={this.handleChange}
                                className={classes.textField}
                                fullWidth
                            />
                        </td>
                    </tr>

                    <tr>
                        <Link to="/userpage" className= {classes.noDecor}>
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
                </table>
                {/* </form> */}
                </div>
        )
    }
}

editProfile.propTypes = {
    classes: PropTypes.object.isRequired,
    user: PropTypes.object.isRequired,
    UI: PropTypes.object.isRequired,
    changeUserData: PropTypes.func.isRequired
  };

const mapStateToProps = state => ({
    user: state.user,
    UI: state.UI
  });

// const mapActionsToProps = {
//     changeUserData
// };

export default connect(
    mapStateToProps,
    { changeUserData }
    //mapActionsToProps
  )(withStyles(styles)(editProfile));