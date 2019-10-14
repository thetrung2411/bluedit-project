import React, {Component} from "react";
import AppBarWithAvatar from "../appBar/AppBarWithAvatar";
import PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import { connect } from "react-redux";
import { getSubscribe, unSubscribe } from "../../redux/actions/subscribeAction";
import axiosConfig from "../../axiosConfig";
<<<<<<< HEAD
import Sidebar from "../sidebar/sidebar";


const styles = {
    tableSubscribe: {
        // marginLeft: '0.8rem'
    },
    subscribe: {
        marginLeft: 5,
        padding: 5,
        lineHeight: '50px',
        color: 'green'
    },
    unSubscribe: {
        marginLeft: 5,
        padding: 5,
        lineHeight: '50px',
        color: 'red'
    }
=======


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
>>>>>>> master

  };

export class subscriptions extends Component {
    state = {
<<<<<<< HEAD
        subscriptions: [],
        allUsers: []//{userName: "User1"},{userName: "User2"},{userName: "User3"},{userName: "User4"},{userName: "User5"}
=======
        subscriptions: []
>>>>>>> master
    }

    componentDidMount() 
    {
        axiosConfig
        .get("/allSubscribe")
        .then(res => {
            console.log(res.data);
            this.setState({
                subscriptions: res.data
            });
        })
        .catch(err => console.log(err));
<<<<<<< HEAD

        axiosConfig
        .get("/allUsers")
        .then(res => {
            console.log(res.data);
            this.setState({
                allUsers: res.data
            });
        })
        .catch(err => console.log(err));

=======
>>>>>>> master
        // subscriptions: this.state.getSubscribe()
    }

    handleDelete = (index) => {
        let tempArr = this.state.subscriptions.slice();
        tempArr.splice(index, 1);
        this.setState({
            subscriptions: tempArr
        })
<<<<<<< HEAD

        let subscribeUser = this.state.allUsers.slice();
        subscribeUser.splice(index, 1);
        this.setState({
            allUsers: subscribeUser
        })
        //this.state.unSubscribe(this.props.subscribeID);
=======
        //this.state.unSubscribe();
>>>>>>> master
    }
    

    render() {

<<<<<<< HEAD
        const { classes, subscribeID, userName} = this.props;

        let subscription = (<div style={{ width: '50%', textAlign: 'left', margin: '0 auto' }}>subscriptions</div>);
        let allUser = (<div style={{ width: '50%', textAlign: 'left', margin: '0 auto' }}>allUsers</div>);

        subscription = this.state.subscriptions.map((subscriptions, index) => {
                return (
                    <div style={{ width: '50%', textAlign: 'left', margin: '0 auto' }}>
                        <Table className={classes.tableSubscribe}>
                            <TableRow>
                                <TableCell align="left">{subscriptions.userName}</TableCell>
                                <TableCell align="center">{subscriptions.subscribeAt}</TableCell>
                                <TableCell align="right" ><Button className={classes.unSubscribe} onClick={() => this.handleDelete(index)}>Unsubscribe</Button></TableCell>
                            </TableRow>
                        </Table> 
                    </div>
                )
            })

        allUser = this.state.allUsers.map((allUsers, index) => {
                return (
                    <div style={{ width: '50%', textAlign: 'left', margin: '0 auto' }}>
                        <Table>
                            <TableRow>
                                <TableCell align="left">{allUsers.userName}</TableCell>
                                <TableCell align="right"><Button className={classes.subscribe} onClick={() => this.handleDelete(index)}>Subscribe</Button></TableCell>
                            </TableRow>
                        </Table> 
                    </div>
=======
        const { classes } = this.props;

        let subscription = (<div>subscriptions</div>);

        subscription = this.state.subscriptions.map((subscriptions, index) => {
                return (
                    <div>
                        <Table>
                            <TableRow>
                                <TableCell align="Center">{subscriptions.userName}</TableCell>
                                <TableCell align="Center">{subscriptions.subscriptionsType}</TableCell>
                                <TableCell align="Center">{subscriptions.subscribeAt}</TableCell>
                                <TableCell align="Center"><Button onClick={() => this.handleDelete(index)}>Unsubscribe</Button></TableCell>
                            </TableRow>
                        </Table> 
                </div>
>>>>>>> master
                )
            })

        return(
            <div>
<<<<<<< HEAD
                <Sidebar />
                <AppBarWithAvatar />
                <div>
                    <div style={{ width: '50%', textAlign: 'left', margin: '0 auto' }}>
                    <h1>Manage Subscriptions: </h1>
                    <Table>
                    <TableRow>
                        <TableCell align="left">Username</TableCell>
                        <TableCell align="center">subscribeAt</TableCell>
                        <TableCell align="right">Unsubscribe</TableCell>
                    </TableRow>
                    </Table> 
                    </div>
                    {subscription}
                </div>

                <div> 
                    <h1>     </h1>
                </div>

                <div>
                    <div style={{ width: '50%', textAlign: 'left', margin: '0 auto' }}>
                    <h1>View All User: </h1>
                    <Table>
                    <TableRow>
                        <TableCell align="left">Username</TableCell>
                        <TableCell align="right">Subscribe</TableCell>
                    </TableRow>
                    </Table> 
                    </div>
                    {allUser}
                </div>
 
=======
                <AppBarWithAvatar />
                <div>
                    <h1>Manage Subscriptions</h1>
                    <Table>
                    <TableRow>
                        <TableCell align="Center">Username</TableCell>
                        <TableCell align="Center">Subscriptions Type</TableCell>
                        <TableCell align="Center">subscribeAt</TableCell>
                        <TableCell align="Center">Unsubscribe</TableCell>
                    </TableRow>
                    </Table> 
                </div>
                {subscription}
>>>>>>> master
            </div>

        );
    }
}

// subscriptions.propTypes = {
//     //classes: subscriptions.object.isRequired,
//     //user: subscriptions.object.isRequired,
//     //UI: subscriptions.object.isRequired,
//     // getSubscribe: subscriptions.func.isRequired
//     // unSubscribe: subscriptions.func.isRequired
//   };
  
  const mapStateToProps = state =>({
    user: state.user,
    UI: state.UI,
    // subscriptions : state.getSubscribe
  })

// const mapActionsToProps = {
//     getSubscribe
// };

export default connect(
    mapStateToProps
 ) (withStyles(styles)(subscriptions));
 //mapActionsToProps,
<<<<<<< HEAD
//  {unSubscribe}
=======
//  {unSubscribe}
>>>>>>> master
