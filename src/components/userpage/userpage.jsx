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
          sidebarOpen: true
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
      }
    
      onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
      }




    render()
    {
        const { classes } = this.props;
        // const { errors } = this.state;
        
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
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                >
                                My profile
                            </Button>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                >
                                My Subscription
                            </Button>
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


                <table align = "center">
                    <tr>
                        <td>
                            <TextField
                                id="firstName"
                                name="firstName"
                                type="firstName"
                                label="First Name"
                                className={classes.textField}
                                fullWidth
                            />
                        </td>
                        <td>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                >
                                Edit
                            </Button>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <TextField
                                id="lastName"
                                name="lastName"
                                type="lastName"
                                label="Last Name"
                            />
                        </td>
                        <td>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                >
                                Edit
                            </Button>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <TextField
                                id="email"
                                name="email"
                                type="email"
                                label="Email"
                            />
                        </td>
                        <td>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                >
                                Edit
                            </Button>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <TextField
                                id="location"
                                name="location"
                                type="location"
                                label="Location"
                            />
                        </td>
                        <td>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                >
                                Edit
                            </Button>
                        </td>
                    </tr>

                    <tr>
                        <td>
                            <TextField
                                id="createdAt"
                                name="createdAt"
                                type="createdAt"
                                label="Created At"
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
                <p align = "right">
                <table>
                        <tr>
                            <b>Menu</b>
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
                    </p>
                </div>
        )
    }
}
export default withStyles(styles)(userpage);