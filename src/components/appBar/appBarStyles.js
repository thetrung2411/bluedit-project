import { fade } from "@material-ui/core/styles/colorManipulator";

export const appBarStyles = theme => ({
    root: {
        width: "100%",
        backgroundColor:"#6fdeed"
    },
    grow: {
        flexGrow: 0.5
    },
    noDecor: {
        textDecoration: "none",
        color: "black"
    },
    button: {
        backgroundColor: "white",
    
    },
    title: {
        display: "none",
        [theme.breakpoints.up("sm")]: {
            display: "block"
        }
    },
    search: {
        position: "relative",
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.white, 0.15),
        "&:hover": {
            backgroundColor: fade(theme.palette.common.white, 0.25)
        },
        marginLeft: 0,
        marginRight: 10,
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            marginLeft: theme.spacing(0),
            width: "auto"
        }
    },
    searchIcon: {
        width: theme.spacing(9),
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    
    inputInput: {
        paddingTop: theme.spacing(0),
        paddingRight: theme.spacing(0),
        paddingBottom: theme.spacing(0),
        paddingLeft: theme.spacing(10),
        transition: theme.transitions.create("width"),
        width: "100%",
        [theme.breakpoints.up("sm")]: {
            width: 120,
            "&:focus": {
                width: 200
            }
        }
    }
    
});
