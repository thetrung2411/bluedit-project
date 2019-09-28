import React, { Component } from "react";
import AppBarWithAvatar from "../appBar/AppBarWithAvatar";
import Paper from "@material-ui/core/Paper";
import Container from "@material-ui/core/Container";
import { connect } from "react-redux";
import axiosConfig from "../../axiosConfig";
import DeleteAlert from "./DeleteAlert";
import { withRouter, Route, Switch } from "react-router-dom";
import CircularProgress from "@material-ui/core/CircularProgress";
import BookmarkTable from "../bookmark/BookmarkTable";

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
    bookmarks: [],
    isSorted: false
  };

  handleDelete = bookmarkId => {
    axiosConfig
      .delete(`/deleteBookmark/${bookmarkId}`)
      .then(res => {
        console.log(res.data);
      })
      .catch(err => console.log(err));

    window.location.reload();
  };
  handleSort = sortKey => {
    let bookmarks = this.state.bookmarks.slice();
    bookmarks.sort((a, b) =>
      this.state.isSorted
        ? a[sortKey].localeCompare(b[sortKey])
        : b[sortKey].localeCompare(a[sortKey])
    );
    this.setState({
      bookmarks,
      isSorted: !this.state.isSorted
    });
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
    let bookmarks = this.state.searchValue
      ? this.state.bookmarks.filter(bookmark => {
          return bookmark.userName === this.user.userName;
        })
      : this.state.bookmarks;

    let showBookmarks = this.state.bookmarks ? (
      <BookmarkTable bookmarks={bookmarks} handleDelete={this.handleDelete} />
    ) : (
      <CircularProgress />
    );
    return (
      <div>
        <AppBarWithAvatar />
        <div>
          <Container>
            <Paper>
              <h1>Bookmarks List</h1>
              {showBookmarks}
            </Paper>
          </Container>
        </div>
      </div>
    );
  }
}
export default withRouter(BookmarkPage);
