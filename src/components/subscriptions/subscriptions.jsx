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

  };

export class subscriptions extends Component {
    state = {
        subscriptions: [],
        allUsers: []//{userName: "User1"},{userName: "User2"},{userName: "User3"},{userName: "User4"},{userName: "User5"}
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

        axiosConfig
        .get("/allUsers")
        .then(res => {
            console.log(res.data);
            this.setState({
                allUsers: res.data
            });
        })
        .catch(err => console.log(err));

        // subscriptions: this.state.getSubscribe()
    }

    handleDelete = (index) => {
        let tempArr = this.state.subscriptions.slice();
        tempArr.splice(index, 1);
        this.setState({
            subscriptions: tempArr
        })

        let subscribeUser = this.state.allUsers.slice();
        subscribeUser.splice(index, 1);
        this.setState({
            allUsers: subscribeUser
        })
        //this.state.unSubscribe(this.props.subscribeID);
    }
    

    render() {

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
                )
            })

        return(
            <div>
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
//  {unSubscribe}