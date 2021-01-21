import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import AccountCircleRoundedIcon from '@material-ui/icons/AccountCircleRounded';
import LockRoundedIcon from '@material-ui/icons/LockRounded';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        // width: '45%'
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

    /*-------------------------------------------------*/
    const history = useHistory();
    /*-------------------------------------------------*/

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
            <div>
                <div>
                    <Button
                        ref={anchorRef}
                        aria-controls={open ? 'menu-list-grow' : undefined}
                        aria-haspopup="true"
                        onClick={handleToggle}
                        style={fontstyle}
                    >
                        <Avatar alt="Remy Sharp" src={props.src} />
                    </Button>

                    <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                        {({ TransitionProps, placement }) => (
                            <Grow
                                {...TransitionProps}
                                style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                            >
                                <Paper>
                                    <ClickAwayListener onClickAway={handleClose}>
                                        <MenuList autoFocusItem={open} style={{ display: 'flex', flexDirection: 'column', padding: '10px', width: '100%' }} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                            <MenuItem onClick={() => { history.push('/orderpage') }}>
                                                <ListItemIcon>
                                                    <AccountCircleRoundedIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Order Menu" />
                                            </MenuItem>
                                            <MenuItem onClick={() => { history.push('./profile') }}>
                                                <ListItemIcon>
                                                    <AccountCircleRoundedIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Profile" />
                                            </MenuItem>
                                            <MenuItem onClick={props.logout}>
                                                <ListItemIcon>
                                                    <LockRoundedIcon />
                                                </ListItemIcon>
                                                <ListItemText primary="Log Out" />
                                            </MenuItem>
                                        </MenuList>
                                    </ClickAwayListener>
                                </Paper>
                            </Grow>
                        )}
                    </Popper>
                </div>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        id: state.id,
        avatar: state.avatarimg
    };
}

export default connect(mapStateToProps)(DropMenu);