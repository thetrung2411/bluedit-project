import React, { useEffect } from "react";
import { deletePost } from "../../redux/actions/postActions";
import { connect } from "react-redux";

import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

const AlertDialog = props => {
  const [open, setOpen] = React.useState(false);
  const [deletedPost, setDeletedPost] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }

  function handleDeleteReport(reportId) {
    props.handleDelete(reportId);
    setOpen(false);
  }

  function handleDeletePost(postId) {
    props.deletePost(postId);
    setOpen(false);
    setDeletedPost(true);
  }

  useEffect(() => {
    if (deletedPost) {
      setTimeout(() => {
        window.location.reload();
      }, 3000);
    }
  }, [deletedPost]);

  //console.log(props);
  const action = props.action;
  const reportId = props.reportId;
  const postId = props.postId;
  let title = "";
  let content = "";
  if (action === "deleteReport") {
    title = "Delete this report?";
    content = "Report will be deleted permanently.";
  }
  if (action === "deletePost") {
    title = "Delete this post?";
    content = "Post will be deleted permanently.";
  }

  return (
    <div>
      {action === "deleteReport" ? (
        <Button onClick={handleClickOpen}>
          <DeleteForeverOutlinedIcon />
        </Button>
      ) : null}
      {action === "deletePost" ? (
        <Button onClick={handleClickOpen}>
          <DeleteForeverOutlinedIcon />
        </Button>
      ) : null}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancle
          </Button>
          {action === "deleteReport" ? (
            <Button
              onClick={() => handleDeleteReport(reportId)}
              color="secondary"
              autoFocus
            >
              Confirm
            </Button>
          ) : null}
          {action === "deletePost" ? (
            <Button
              onClick={() => handleDeletePost(postId)}
              color="secondary"
              autoFocus
            >
              Confirm
            </Button>
          ) : null}
        </DialogActions>
      </Dialog>
    </div>
  );
};

const mapDispatchToProps = {
  deletePost
};

export default connect(
  null,
  mapDispatchToProps
)(AlertDialog);
