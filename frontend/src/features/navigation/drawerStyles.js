const { makeStyles } = require("@material-ui/core");

const drawerWidth = 280;

const useDrawerStyles = makeStyles((theme) => ({
    root: {
        display: "flex",
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
    },
    appBarShift: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    menuButton: {
        marginRight: 36,
    },
    hide: {
        display: "none",
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: "nowrap",
    },
    drawerOpen: {
        width: drawerWidth,
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    },
    drawerClose: {
        transition: theme.transitions.create("width", {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.leavingScreen,
        }),
        overflowX: "hidden",
        width: theme.spacing(7),
        [theme.breakpoints.up("sm")]: {
            width: theme.spacing(9),
        },
    },
    toolbar: {
        display: "flex",
        alignItems: "center",
        padding: theme.spacing(1, 2),
        // necessary for content to be below app bar
        ...theme.mixins.toolbar,
        "& img": {
            width: "60%",
        },
    },
    accordion: {
        boxShadow: "none",
        "&:not(:last-child)": {
            borderBottom: 0,
        },
        "&:before": {
            display: "none",
        },
        "&$expanded": {
            margin: "auto",
        },
    },
    accordionSummary: {
        padding: 0,
        marginBottom: -1,
        minHeight: 56,
        "&$expanded": {
            minHeight: "56px !important",
            margin: "12px 0 !important",
        },
    },
    listItemIcon: {
        minWidth: 36,
    },
    listItem: {
        paddingRight: 0,
    },
    hiddenExpandButton: {
        display: "none",
    },
}));

export default useDrawerStyles;
