import { withStyles, Button } from "@material-ui/core";

const InfoButton = withStyles((theme) => ({
    root: {
        borderColor: theme.palette.info.main,
        color: theme.palette.info.main,
    },
}))(Button);

export default InfoButton;
