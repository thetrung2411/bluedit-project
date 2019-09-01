import React, {Component} from "react";
import AppBarWithAvatar from "../appBar/AppBarWithAvatar";
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
import Paper from '@material-ui/core/Paper';
import Container from '@material-ui/core/Container';


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

export class subscriptions extends Component {
    state = {
        subscriptions: [
            {id: "1", Username: "User1", SubscriptionsType: "Persnoal"},
            {id: "2", Username: "User2", SubscriptionsType: "Persnoal"},
            {id: "3", Username: "User3", SubscriptionsType: "Persnoal"},
            {id: "4", Username: "User4", SubscriptionsType: "Persnoal"},
            {id: "5", Username: "User5", SubscriptionsType: "Persnoal"},
            {id: "6", Username: "User6", SubscriptionsType: "Business"},
            {id: "7", Username: "User7", SubscriptionsType: "Persnoal"},
            {id: "8", Username: "User8", SubscriptionsType: "Persnoal"},
            {id: "9", Username: "User9", SubscriptionsType: "Persnoal"},
            {id: "10", Username: "User10", SubscriptionsType: "Persnoal"},
            {id: "11", Username: "User11", SubscriptionsType: "Persnoal"},
            {id: "12", Username: "User12", SubscriptionsType: "Persnoal"},

        ],
        searchValue: '',
        sidebarOpen: true
    }
    onSetSidebarOpen(open) {
        this.setState({ sidebarOpen: open });
      }

    handleChange = (e) => {
        this.setState({
            searchValue: e.target.value,
        });
    }

    handleDelete = (index) => {
        let tempArr = this.state.subscriptions.slice();
        tempArr.splice(index, 1);
        this.setState({
            subscriptions: tempArr
        })
    }

    render() {




        let subscriptions = (<div>subscriptions</div>);
            subscriptions = this.state.subscriptions.map((subscriptions, index) => {
                return (
                    <div>
                        <Table>
                            <TableRow>
                                <TableCell align="Center">{subscriptions.id}</TableCell>
                                <TableCell align="Center">{subscriptions.Username}</TableCell>
                                <TableCell align="Center">{subscriptions.SubscriptionsType}</TableCell>
                                <TableCell align="Center"><Button onClick={() => this.handleDelete(index)}>Unsubscribe</Button></TableCell>
                                </TableRow>
                        </Table> 
                </div>
                )
            })
            

        return(
            <div>
                <AppBarWithAvatar />
                <div>
                    <h1>Subscriptions</h1>
                    <Table>
                    <TableRow>
                        <TableCell align="Center">User ID</TableCell>
                        <TableCell align="Center">Username</TableCell>
                        <TableCell align="Center">Subscriptions Type</TableCell>
                        <TableCell align="Center">Unsubscribe</TableCell>
                    </TableRow>
                     </Table> 
                </div>
                {subscriptions}
            </div>
        );
    }
}
export default withStyles(styles)(subscriptions);