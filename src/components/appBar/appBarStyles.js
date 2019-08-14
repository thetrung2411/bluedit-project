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
            marginLeft: theme.spacing.unit,
            width: "auto"
        }
    },
    searchIcon: {
        width: theme.spacing.unit * 9,
        height: "100%",
        position: "absolute",
        pointerEvents: "none",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
    },
    inputRoot: {
        color: "black",
        width: "100%"
    },
    inputInput: {
        paddingTop: theme.spacing.unit,
        paddingRight: theme.spacing.unit,
        paddingBottom: theme.spacing.unit,
        paddingLeft: theme.spacing.unit * 10,
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
