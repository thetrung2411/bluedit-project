import React, {Component} from "react";
import Sidebar from "react-sidebar";
import PropTypes from "prop-types";
import userImage from "../../assets/hehe.png";

import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

import { connect } from "react-redux";
import { changeUserData } from "../../redux/actions/userActions";


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
            bio: "",
            location:"",
            gender:"",
            phoneNumber:"",
            dateOfBirth:"",
            fullName:""
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
          gender:this.state.gender,
          phoneNumber:this.state.phoneNumber,
          dateOfBirth:this.state.dateOfBirth,
          fullName:this.state.fullName
        };
        this.props.changeUserData(userData);
      };


    render()
    {
        const { classes, UI: {loading} } = this.props;
        
        return (
                <div>
                <table align = "center">
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
                                value = {this.state.fullName}
                                onChange={this.handleChange}
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
                                value= {this.state.location}
                                onChange={this.handleChange}
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
                                value = {this.state.dateOfBirth}
                                onChange={this.handleChange}
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
                                value = {this.state.phoneNumber}
                                onChange={this.handleChange}
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
                                value = {this.state.gender}
                                onChange={this.handleChange}
                                className={classes.textField}
                                fullWidth
                            />
                        </td>
                    </tr>
                    </tbody>
                    <tbody>
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
                    </tbody>
                </table>
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

export default connect(
    mapStateToProps,
    { changeUserData }
  )(withStyles(styles)(editProfile));