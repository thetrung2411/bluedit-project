import React from "react";
import BookmarkTableHead from "./BookmarkTableHead";
import DeleteBookmark from "./DeleteAlert";
import { withRouter, Route, Switch } from "react-router-dom";
//material ui
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import Button from "@material-ui/core/Button";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

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
const BookmarkTable = props => {
  const allbookmarks = props.bookmarks.length ? (
    props.bookmarks.map(bookmark => {
      return (
        <TableBody>
          <TableRow>
            <TableCell align="left">{bookmark.bookmarkId}</TableCell>
            <TableCell align="left">{bookmark.createdAt}</TableCell>
            <TableCell align="left">{bookmark.postId}</TableCell>
            <TableCell align="left">{bookmark.postheader}</TableCell>
            <TableCell align="left">{bookmark.userPosted}</TableCell>
            <TableCell align="left">{bookmark.userName}</TableCell>
            <TableCell align="left">
              <DeleteBookmark
                action={"delete"}
                reportId={bookmark.bookmarkId}
                handleDelete={props.handleDelete}
              />
            </TableCell>
          </TableRow>
        </TableBody>
      );
    })
  ) : (
    <p className="canter">No report found at the moment</p>
  );
  return (
    <Table>
      <BookmarkTableHead
        bookmarks={props.bookmarks}
        handleSort={props.handleSort}
      />
      {allbookmarks}
    </Table>
  );
};

export default withRouter(BookmarkTable);
