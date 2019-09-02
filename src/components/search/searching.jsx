import React from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "../appBar/appBar";
import Button from "@material-ui/core/Button";


function searching(props) {
    

    return (
        <div>
            <AppBar />
            <Grid>           
                                
             
            {/* <Link to="/test"> */}
                        <Button onClick = "../search/test">
                                search
                        </Button>
             {/* </Link> */}
             </Grid>
       </div>
    );
}

export default searching;