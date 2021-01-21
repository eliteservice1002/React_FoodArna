import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import SearchIcon from "@material-ui/icons/Search";
import InputBase from "@material-ui/core/InputBase";
import Divider from "@material-ui/core/Divider";
import React from "react";

const useStyles = makeStyles((theme) => ({
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: 400,
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
}));

export default function Search() {
    const classes = useStyles();
    return (
        <Paper component="form" className={classes.root} style={{height: '65%'}}>
            <IconButton type="submit" className={classes.iconButton} aria-label="search">
                <SearchIcon />
            </IconButton>
            <InputBase
                className={classes.input}
                placeholder="Search..."
                inputProps={{ 'aria-label': 'search google maps' }}
            />

            <Divider className={classes.divider} orientation="vertical" />
        </Paper>
    );
}
