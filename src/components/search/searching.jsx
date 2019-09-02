import React from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "../appBar/appBar";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";
import RecommendationItem from "../post/Recommendation";

function searching(props) {
    

    return (
        <div>
            <AppBar />
            <Grid>           
                                
             
             <Link to="/test">
                        <Button>
                                search
                        </Button>
             </Link> 
             <RecommendationItem />
             </Grid>
       </div>
    );
}

export default searching;