import React, {Component} from "react";
import AppBarWithAvatar from "../appBar/AppBarWithAvatar";
import Sidebar from "react-sidebar";

import userImage from "../../assets/hehe.png";

import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

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
            firstName: "First Name",
            lastName:"Last Name",
            email:" Email",
            location:"Location",
            CreatAt:"20/08/2019",
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
      }
    
    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
      }

    Edit() {
        this.setState({
            firstNameValue: "",
        })
    }


    ChangeFirstname = e => {
        this.setState({
            firstName: e.target.value,
        });
      };

      ChangeLastName = e => {
        this.setState({
            lastName: e.target.value,
        });
      };

      ChangeEmail = e => {
        this.setState({
            email: e.target.value,
        });
      };

      ChangeLocation = e => {
        this.setState({
            location: e.target.value,
        });
      };
      
    handleSubmit = e => {
        this.setState({
            firstName: "First Name",
            lastName:"Last Nmae",
            email:" Email",
            location:"Location",
            firstNameValue:""
        })
    };






    render()
    {
        const { classes } = this.props;
        //const { errors } = this.state;
        
        return (
                <div>

                <Sidebar
                    sidebar={
                    <table>
                        <tr>
                            <h1>Sidebar</h1>
                        </tr>

                        <tr>
                            <p>
                            <img style={{width: '90px', height: '90px'}} src={userImage} alt="userImage" />;
                            <h1>Username</h1>
                            <h3>Sydney, NSW</h3>
                            </p>

                            <p>
                            <h3>"Bio.................."</h3>
                            </p>
                        </tr>

                    <tr>
                        <td>
                            <Link to="/userpage" className= {classes.noDecor}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                >
                                My profile
                            </Button>
                            </Link>
                        </td>
                    </tr>

                    <tr>
                        <td>
                        <Link to="/subscriptions" className= {classes.noDecor}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                >
                                My Subscription
                            </Button>
                            </Link>
                        </td>
                    </tr>

                    <tr>
                        <td>
                        <Link to="/post" className= {classes.noDecor}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                >
                                Post
                            </Button>
                            </Link>
                        </td>
                    </tr>

                    <tr>
                        <td>
                        <Link to="/homepage" className= {classes.noDecor}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                >
                                Logout
                            </Button>
                        </Link>
                        </td>
                    </tr>                    
                    </table>
                
                
                }
                    open={this.state.sidebarOpen}
                    onSetOpen={this.onSetSidebarOpen}
                    styles={{ sidebar: { background: "blue" } }}
                >
                <p align = "left">
                <button className={classes.sidebarButton} onClick={() => this.onSetSidebarOpen(true) } >Open sidebar</button>
                </p>
                </Sidebar>


                <AppBarWithAvatar position="static" />
                <h1 className = "">User Page</h1>
                <h2 className = "">Edit Profile</h2>


                <table align = "center">
                    <tr>
                        <td>
                            <TextField
                                id="firstName"
                                name="firstName"
                                type="firstName"
                                //label = {this.state.firstName}//{this.state.firstName}//"First Name"
                                value = {this.state.firstName}
                                className={classes.textField}
                                onChange={this.ChangeFirstname.bind(this)}
                                
                            />
                        </td>
                        <td>
                            <TextField
                                className={classes.textField}
                                onChange={this.ChangeFirstname.bind(this)}
                                // fullWidth
                            />
                        </td>
                        {/* <td>
                            <Button
                                onClick={this.Edit}
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                >
                                Edit
                            </Button>
                        </td> */}
                    </tr>

                    <tr>
                        <td>
                            <TextField
                                id="lastName"
                                name="lastName"
                                type="lastName"
                                // label={this.state.lastName}
                                value = {this.state.lastName}
                               
                            />
                        </td>
                        <td>
                            <TextField
                                className={classes.textField}
                                onChange={this.ChangeLastName.bind(this)}
                                
                            />
                        </td>
                        {/* <td>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                >
                                Edit
                            </Button>
                        </td> */}
                    </tr>

                    <tr>
                        <td>
                            <TextField
                                id="email"
                                name="email"
                                type="email"
                                value = {this.state.email}
                                className={classes.textField}
                               
                            />
                        </td>
                        <td>
                            <TextField
                                className={classes.textField}
                                onChange={this.ChangeEmail.bind(this)}
                               
                            />
                        </td>
                        {/* <td>
                            <Button
                                onClick={this.Edit}
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                >
                                Edit
                            </Button>
                        </td> */}
                        {/* </td> */}
                    </tr>

                    <tr>
                        <td>
                            <TextField
                                id="location"
                                name="location"
                                type="location"
                                value={this.state.location}
                               
                            />
                        </td>
                        <td>
                            <TextField
                                className={classes.textField}
                                onChange={this.ChangeLocation.bind(this)}
                               
                            />
                        </td>
                        <td>
                            {/* <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                >
                                Edit
                            </Button> */}
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <TextField
                                id="createdAt"
                                name="createdAt"
                                type="createdAt"
                                label="Created At"
                                value={this.state.CreatAt}
                            />
                        </td>
                        <td>
                        </td>
                    </tr>
                </table>

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
                </div>
        )
    }
}
export default withStyles(styles)(userpage);