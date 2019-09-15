import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import Switch from "@material-ui/core/Switch";
import DeleteForeverOutlinedIcon from "@material-ui/icons/DeleteForeverOutlined";

export default function AlertDialog(props) {
  const [open, setOpen] = React.useState(false);

  function handleClickOpen() {
    setOpen(true);
  }

  function handleClose() {
    setOpen(false);
  }
  const action = props.action;
  const reportId = props.reportId;
  let title = "";
  let content = "";
  if (action === "delete") {
    title = "Delete report?";
    content = "This will permanently delete all data at this location.";
  }
  if (action === "setProcessed") {
    title = "Set as Processed?";
    content =
      "This will permanently set the status as Processed and no change allowed after confirm.";
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
          <Button
            onClick={() => props.handleDelete(reportId)}
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
