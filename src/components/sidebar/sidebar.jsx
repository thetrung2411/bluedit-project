import React, {Component} from "react";
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

class sidebar extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            sidebarOpen: false,
        };
        this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
      }

      onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
      }



    render()
    {
        const { classes, user: { userDetails = {} } } = this.props;
        
        return (
                <div>

                <Sidebar
                    sidebar={
                    <table>
                        <tbody>
                        <tr>
                            <h1 input>Sidebar</h1>
                        </tr>
                        </tbody>

                        <tbody>
                        <tr>
                            <p>
                            <img style={{width: '90px', height: '90px'}} src={userImage} alt="userImage" />;
                            <h1>{userDetails.userName}</h1>
                            <h3>{userDetails.location}</h3>
                            </p>
                            <p>
                            <h3>{userDetails.bio}</h3>
                            </p>
                        </tr>
                        </tbody>

                    <tbody>
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
                    </tbody>

                    <tbody>
                    <tr>
                        <td>
                            <Link to="/userpost" className= {classes.noDecor}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                >
                                My Subscribed Post
                            </Button>
                            </Link>
                        </td>
                    </tr>
                    </tbody>

                    <tbody>
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
                    </tbody>

                    <tbody>
                    <tr>
                        <td>
                        <Link to="/post" className= {classes.noDecor}>
                            <Button
                                type="submit"
                                variant="contained"
                                color="primary"
                                className={classes.button}
                                >
                                All Post
                            </Button>
                            </Link>
                        </td>
                    </tr>
                    </tbody>

                    <tbody>
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
                    </tbody>               
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
                </div>
        )
    }
}
const mapStateToProps = state => ({
    user: state.user
  });

export default connect(
    mapStateToProps
  )(withStyles(styles)(sidebar));