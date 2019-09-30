import React from "react";
//material ui
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

const BookmarkTableHead = props => {
  const bookmarkheader = props.bookmarks.length ? (
    <TableHead>
      <TableRow>
        <TableCell onClick={() => props.handleSort("bookmarkId")}>
          Bookmark ID
        </TableCell>
        <TableCell onClick={() => props.handleSort("createdAt")}>
          Date
        </TableCell>
        <TableCell onClick={() => props.handleSort("postId")}>
          Post Id
        </TableCell>
        <TableCell onClick={() => props.handleSort("postheader")}>
          Post Header
        </TableCell>
        <TableCell onClick={() => props.handleSort("userPosted")}>
          User who Posted
        </TableCell>
        <TableCell onClick={() => props.handleSort("userName")}>
          User who Owned the Bookmark
        </TableCell>
        <TableCell></TableCell>
      </TableRow>
    </TableHead>
  ) : null;

  return bookmarkheader;
};

export default BookmarkTableHead;
