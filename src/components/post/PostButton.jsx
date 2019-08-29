import React from 'react';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { postLayoutStyles } from "./PostLayoutStyle";
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";
import Fab from '@material-ui/core/Fab';
import Grid from "@material-ui/core/Grid";
import EditRounded from '@material-ui/icons/EditRounded';
import SignedInAppBar from '../appBar/AppBarWithAvatar';
import PostItem from "../post/postItems";
import RecommendationItem from "../post/Recommendation";

function PostLayout(props){
  const [open, setOpen] = React.useState(false);
  const {classes} = props;
  function handleClose() {
    setOpen(false);
  }
    return (
        <div>
          <Fab color="primary" onClick={() => {setOpen(true);}}>
        <EditRounded/>
      </Fab>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
        className = {classes.paper}
      >
        <DialogTitle id="responsive-dialog-title" align = "center">Post</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To submit your post please enter the text field below
          </DialogContentText>
                         <TextField
                         id="outlined-multiline-flexible"
                          label="Post here"
                          multiline
                          rows = "7"
                          rowsMax="1000"
                          margin="none"
                          variant="outlined"
                          className = {classes.text}
                        />
                    </DialogContent>
                    <DialogActions>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        onClick={handleClose}
                        color = "secondary"
                    >
                        Cancel
                    </Button>
                    <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        color = "primary"
                        onClick={handleClose}
                    >
                        Submit
                    </Button>
                    
        
        </DialogActions>
      </Dialog>
      
     </div>
    );
}
export default withStyles (postLayoutStyles)(PostLayout);