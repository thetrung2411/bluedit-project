import React, {Component} from "react";
import AppBarWithAvatar from "../appBar/AppBarWithAvatar";
import Sidebar from "react-sidebar";

import userImage from "../../assets/hehe.png";

import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { getUserData } from "../../redux/actions/userActions";

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

class userpage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: true,
            userName: "UserName",
            email:" Email",
            location:"Location",
            CreatAt:"20/08/2019",
        };
        // this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
      }
    
    // onSetSidebarOpen(open) {
    //     this.setState({ sidebarOpen: open });
    //   }



    render()
    {
        const { classes, user: { userDetails = {} } } = this.props;
        //const { errors } = this.state;
        
        return (
                <div>


                <table align = "center">
                    <tbody>
                    <tr>
                        <td>
                            User Name:
                        </td>
                        <td>
                            <TextField
                                id="userName"
                                name="userName"
                                type="userName"
                                value = {userDetails.userName}
                                className={classes.textField}
                                fullWidth
                            />
                        </td>
                    </tr>
                    </tbody>

                    <tbody>
                    <tr>
                        <td>
                            Email:
                        </td>
                        <td>
                            <TextField
                                id="email"
                                name="email"
                                type="email"
                                value = {userDetails.email}
                                className={classes.textField}
                                fullWidth
                            />
                        </td>
                    </tr>
                    </tbody>

                    <tbody>
                    <tr>
                        <td>
                            Full Name:
                        </td>
                        <td>
                            <TextField
                                id="fullName"
                                name="fullName"
                                type="fullName"
                                value = {userDetails.fullName}
                                className={classes.textField}
                                fullWidth
                            />
                        </td>
                    </tr>
                    </tbody>

                    <tbody>
                    <tr>
                        <td>
                            Location:
                        </td>
                        <td>
                            <TextField
                                id="location"
                                name="location"
                                type="location"
                                value= {userDetails.location}//{this.state.location}
                                className={classes.textField}
                                fullWidth
                            />
                        </td>
                    </tr>
                    </tbody>

                    <tbody>
                    <tr>
                        <td>
                            Bio:
                        </td>
                        <td>
                            <TextField
                                id="Bio"
                                name="Bio"
                                type="Bio"
                                value= {userDetails.bio}
                                className={classes.textField}
                                fullWidth
                            />
                        </td>
                    </tr>
                    </tbody>

                    <tbody>
                    <tr>
                        <td>
                            Date of Birth:
                        </td>
                        <td>
                            <TextField
                                id="dateOfBirth"
                                name="dateOfBirth"
                                type="dateOfBirth"
                                value= {userDetails.dateOfBirth}
                                className={classes.textField}
                                fullWidth
                            />
                        </td>
                    </tr>
                    </tbody>

                    <tbody>
                    <tr>
                        <td>
                            Phone Number:
                        </td>
                        <td>
                            <TextField
                                id="phoneNumber"
                                name="phoneNumber"
                                type="phoneNumber"
                                value= {userDetails.phoneNumber}
                                className={classes.textField}
                                fullWidth
                            />
                        </td>
                    </tr>
                    </tbody>

                    <tbody>
                    <tr>
                        <td>
                            Gender:
                        </td>
                        <td>
                            <TextField
                                id="gender"
                                name="gender"
                                type="gender"
                                value= {userDetails.gender}
                                className={classes.textField}
                                fullWidth
                            />
                        </td>
                    </tr>
                    </tbody>

                    <tbody>
                    <tr>
                        <td>
                            Creat At:
                        </td>
                        <td>
                            <TextField
                                id="createdAt"
                                name="createdAt"
                                type="createdAt"
                                value= {userDetails.createdAt}
                                className={classes.textField}
                                fullWidth
                            />
                        </td>
                    </tr>
                    </tbody>

                    <tbody>
                    <tr>
                        <td>
                        <Link to="/editProfile" className= {classes.noDecor}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                >
                                Edit
                            </Button>
                            </Link>
                        </td>
                        <td>
                            <Link to="/homepage" className= {classes.noDecor}>
                                <Button
                                    type="submit"
                                    variant="contained"
                                    color="primary"
                                    className={classes.button}
                                    >
                                    Delete Account
                                </Button>
                            </Link>
                        </td>
                    </tr>
                    </tbody>
                </table>
                </div>
        )
    }
}

const mapStateToProps = state => ({
    user: state.user
  });

const mapActionsToProps = {
    getUserData
};

export default connect(
    mapStateToProps,
    mapActionsToProps
  )(withStyles(styles)(userpage));