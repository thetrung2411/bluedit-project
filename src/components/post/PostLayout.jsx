import React from 'react';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import {Typography, FormControl, FormControlLabel} from '@material-ui/core';
function PostLayout(props){
    return (
        <div>
       <FormControl>
        <TextField
        id="outlined-multiline-flexible"
        label="Post here"
        multiline
        rowsMax="1000"
        margin="normal"
        variant="outlined"
      />
      </FormControl>
       
       <Button variant="contained" color="primary">
        Submit
      </Button>
     </div>
    );
}
export default PostLayout;