import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LockOpenRoundedIcon from '@material-ui/icons/LockOpenRounded';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
}));


const fontstyle = {
    'fontFamily': 'Roboto',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'fontSize': '21px',
    'color': '#FFFFFF'
};
function DropMenu(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen((prevOpen) => !prevOpen);
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };


    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }

        prevOpen.current = open;
    }, [open]);



    return (
        <div className={classes.root}>
            <div style={{ margin: 'auto' }}>
                <Button
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    style={fontstyle}
                >
                    <img alt="image1" src={props.src} style={{ marginRight: '10px' }} />
                </Button>

                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                    {({ TransitionProps, placement }) => (
                        <Grow
                            {...TransitionProps}
                            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                        >
                            <Paper>
                                <ClickAwayListener onClickAway={handleClose}>
                                    <MenuList autoFocusItem={open} style={{ display: 'flex', flexDirection: 'column', padding: '10px' }} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                        <MenuItem onClick={props.login}>
                                            <ListItemIcon>
                                                <LockOpenRoundedIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary="Login" />
                                        </MenuItem>
                                        <MenuItem onClick={props.register}>
                                            <ListItemIcon>
                                                <PersonAddRoundedIcon fontSize="small" />
                                            </ListItemIcon>
                                            <ListItemText primary="Register" />
                                        </MenuItem>
                                    </MenuList>
                                </ClickAwayListener>
                            </Paper>
                        </Grow>
                    )}
                </Popper>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        id: state.id
    };
}

export default connect(mapStateToProps)(DropMenu);