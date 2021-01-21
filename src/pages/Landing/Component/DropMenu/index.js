import React from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Snack from '../../../partPage/component/snackbar1'
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    paper: {
        marginRight: theme.spacing(2),
    },
}));

const iconstyle = {
    'marginLeft': '5px'
}

const fontstyle = {
    'fontFamily': 'Roboto',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'fontSize': '21px',
    'color': '#FFFFFF'
};
function DropMenu(props) {
    let localState = localStorage.getItem('user');
    if (localState && typeof JSON.parse(localState) === 'object') {
        localState = JSON.parse(localState);
    }

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);
    const [alert, setAlert] = React.useState("");

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
    const handleClose1 = (event) => {
        if (localState.authToken !== "")
            history.push('/authenticFood');
        else {
            setAlert("Please proceed to Login!");
            document.getElementById('snack_error1').click();
        }
    };
    const handleClose2 = (event) => {
        if (localState.authToken !== "")
            history.push('/orderOnline');
        else {
            setAlert("Please proceed to Login!");
            document.getElementById('snack_error1').click();
        }
    };
    const handleClose3 = (event) => {
        if (localState.authToken !== "")
            history.push('/onlineCookery');
        else {
            setAlert("Please proceed to Login!");
            document.getElementById('snack_error1').click();
        }
    };
    const handleClose4 = (event) => {
        if (localState.authToken !== "")
            history.push('/tryCook');
        else {
            setAlert("Please proceed to Login!");
            document.getElementById('snack_error1').click();
        }
    };
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
            <Snack alert={"Please proceed to Login!"} />
            <div style={{ margin: 'auto' }}>
                <Button
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle}
                    style={fontstyle}
                >
                    <img alt="image1" src={props.src} style={{ marginRight: '10px' }} />
                    {props.title}
                    <FontAwesomeIcon style={iconstyle} icon={faAngleDown} />
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
                                        <MenuItem onClick={handleClose1}>Learn</MenuItem>
                                        <MenuItem onClick={handleClose2}>Order Online</MenuItem>
                                        <MenuItem onClick={handleClose3}>Cooking Date</MenuItem>
                                        <MenuItem onClick={handleClose4}>Cultural Experience</MenuItem>
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