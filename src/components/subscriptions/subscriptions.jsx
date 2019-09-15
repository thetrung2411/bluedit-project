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
        subscriptions: []
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
        // subscriptions: this.state.getSubscribe()
    }

    handleDelete = (index) => {
        let tempArr = this.state.subscriptions.slice();
        tempArr.splice(index, 1);
        this.setState({
            subscriptions: tempArr
        })
        //this.state.unSubscribe();
    }
    

    render() {

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
                )
            })

        return(
            <div>
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