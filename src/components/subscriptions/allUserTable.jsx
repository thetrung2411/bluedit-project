import React, {Component} from "react";
import AppBarWithAvatar from "../appBar/AppBarWithAvatar";
import PropTypes from "prop-types";
import Sidebar from "react-sidebar";

import userImage from "../../assets/hehe.png";

import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import { connect } from "react-redux";
import { getSubscribe } from "../../redux/actions/subscribeAction";
import axiosConfig from "../../axiosConfig";


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

export class allUserTable extends Component {
    state = {
        allUser: []
    }

    // handleChange = (e) => {
    //     this.setState({
    //         searchValue: e.target.value,
    //     });
    // }

    handleDelete = (index) => {
        let tempArr = this.state.subscriptions.slice();
        tempArr.splice(index, 1);
        this.setState({
            subscriptions: tempArr
        })
    }

    componentDidMount() 
    {
        axiosConfig
        .get("/allUsers")
        .then(res => {
            console.log(res.data);
            this.setState({
                allUser: res.data
            });
        })
        .catch(err => console.log(err));
    }
    

    render() {

        const { classes } = this.props;


        let allUsers = (<div>allUser</div>);

        allUsers = this.state.allUser.map((allUser, index) => {
        return (
                <div>
                    <Table>
                        <TableRow>
                            <TableCell align="Center">{allUser.userName}</TableCell>
                            <TableCell align="Center">{allUser.email}</TableCell>
                            <TableCell align="Center">{allUser.location}</TableCell>
                            <TableCell align="Center">{allUser.bio}</TableCell>
                            <TableCell align="Center">{allUser.dateOfBirth}</TableCell>                                <TableCell align="Center">{allUser.phoneNumber}</TableCell>
                            <TableCell align="Center">{allUser.gender}</TableCell>
                             <TableCell align="Center">{allUser.createdAt}</TableCell>
                            <TableCell align="Center"><Button onClick={() => this.handleDeleteUser(index)}>Subscribe</Button></TableCell>
                        </TableRow>
                    </Table> 
                 </div>
                )
        })
            

        return(
                <div>
                    <h1>All User</h1>
                    <Table>
                    <TableRow>
                        <TableCell align="Center">Username</TableCell>
                        <TableCell align="Center">Email</TableCell>
                        <TableCell align="Center">Location</TableCell>
                        <TableCell align="Center">BIO</TableCell>
                        <TableCell align="Center">Date of Birth</TableCell>
                        <TableCell align="Center">Phone Number</TableCell>
                        <TableCell align="Center">Gender</TableCell>
                        <TableCell align="Center">CreatedAt</TableCell>
                        <TableCell align="Center">Subscribe</TableCell>
                    </TableRow>
                    </Table> 
                    {allUsers}
                </div> 
        );
    }
}

allUserTable.propTypes = {
    //classes: subscriptions.object.isRequired,

  };
  
  const mapStateToProps = state =>({
    user: state.user,
    UI: state.UI,
    subscriptions : state.getSubscribe
  })
const mapActionsToProps = {
    getSubscribe
};

export default connect(
    mapStateToProps,
    mapActionsToProps
 ) (withStyles(styles)(allUserTable));
