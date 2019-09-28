import React, {Component} from "react";
import AppBarWithAvatar from "../appBar/AppBarWithAvatar";
import PropTypes from "prop-types";
import Sidebar from "react-sidebar";
import withStyles from "@material-ui/core/styles/withStyles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import SearchIcon from '@material-ui/icons/Search';
import Table from '@material-ui/core/Table';
import TableHead from "@material-ui/core/TableHead";
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Container from '@material-ui/core/Container';
import { connect } from "react-redux";
import axiosConfig from "../../axiosConfig";
import DeleteAlert from "./DeleteAlert";
import { withRouter, Route, Switch } from "react-router-dom";
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

export class BookmarkPage extends Component {
  state = {
      bookmarks: []
  }

  handleDelete = bookmarkId => {
    axiosConfig
      .delete(`/deleteBookmark/${bookmarkId}`)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));

    window.location.reload();
  };

  componentDidMount() {
    axiosConfig
      .get("/getAllBookmarks")
      .then(response => {
        console.log(response.data);
        this.setState({
          bookmarks: response.data
        });
      })
      .catch(err => console.log(err));
  }

  render() {

      const { classes } = this.props;

      let bookmark = (<div>Bookmark Page</div>);

      bookmark = this.state.bookmarks.map((bookmarks, index) => {
              return (
                    <Table>
                      <TableHead>
                          <TableRow>
                              <TableCell align="Left">{bookmarks.createdAt}</TableCell>
                              <TableCell align="Left">{bookmarks.postid}</TableCell>
                              <TableCell align="Left">{bookmarks.postheader}</TableCell>
                              <TableCell align="Left">{bookmarks.userid}</TableCell>
                              <TableCell align="Left">{bookmarks.username}</TableCell>
              <DeleteAlert
                action={"delete"}
                bookmarkId={bookmark.bookmarkId}
                handleDelete
              />
                              </TableRow>
                      </TableHead> 
                      </Table>
              )
          })

      return(
          <div>
              <AppBarWithAvatar />
              <div>
                  <h1>Bookmarks</h1>
                  <Table>
                  <TableBody>
                  <TableRow>
                    <TableCell align="Right">createdAt</TableCell>
                      <TableCell align="Right">postid</TableCell>
                      <TableCell align="Right">postheader</TableCell>
                      <TableCell align="Right">userid</TableCell>
                      <TableCell align="Right">username</TableCell>
                  </TableRow>
                  </TableBody>
                  </Table>
              </div>
              {bookmark}
          </div>
      );
  }
}
export default withRouter(BookmarkPage);