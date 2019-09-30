import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Switch from "@material-ui/core/Switch";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

export default function DeleteAlert(props) {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  const action = props.action;
  const bookmarkId = props.bookmarkId;
  let title = "";
  let content = "";
  if (action === "delete") {
    title = "Delete bookmark?";
    content = "This action will delete the located bookmark";
  }
  if (action === "setProcessed") {
    title = "Set as Processed?";
    content =
      "The bookmark was deleting.";
  }

  return (
    <div>
      {action === "delete" ? (
        <Button onClick={handleClickOpen}>
          <DeleteForeverOutlinedIcon />
        </Button>
      ) : (
        <Switch onChange={handleClickOpen} />
      )}

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="delete-alert-title"
        aria-describedby="delete-alert-description"
      >
        <DialogTitle id="delete-alert-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="delete-alert-description">
            {content}
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancle
          </Button>
          <Button
            onClick={() => props.handleDelete(bookmarkId)}
            color="secondary"
            autoFocus
          >
            Confirm
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
