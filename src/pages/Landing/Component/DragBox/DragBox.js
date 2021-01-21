import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import Draggable from 'react-draggable'
import { connect } from 'react-redux';
import Snack from "../../../partPage/component/snackbar2";
import './index.css';
import $ from 'jquery';
import ApiConfig from '../../../../config/api_config';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import {
    makeStyles,
} from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    paper: {

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {

        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
    },
    submit: {
        margin: theme.spacing(0, 0, 0),
    },
}));

var center = 150

const DragFoodEat = (props) => {
    const classes = useStyles();
    let alert = "";
    center = 105;
    const [chefstatus, setChefStatus] = useState("");
    let localState = localStorage.getItem('user');
    if (localState && typeof JSON.parse(localState) === 'object') {
        localState = JSON.parse(localState);
    }
    useEffect(() => {
        var settings = {
            "url": ApiConfig.url + "/api/user/" + localState.data.userId,
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json",
                "Authorization": localState.authToken,
            },
        };

        $.ajax(settings).done(function (response) {
            setChefStatus(response.chefData.status);
        })
    }, []);
    const history = useHistory()
    const [deltaPosition, setDeltaPosition] = useState({ x: center, y: -20 })
    // const [alert, setalert] = useState("");
    const handleDrag = (e, ui) => {
        const { x, y } = deltaPosition
        setDeltaPosition({
            x: x + ui.deltaX,
            y: y,
        })
    }
    const onStart = (e, ui) => {
        if (ui.x !== center) return false
    }

    const onStop = (e, ui) => {
        let curX = ui.x
        if (curX > center) {
            let gotoEat = setInterval(() => {

                if (curX + 10 >= center * 2) {
                    setDeltaPosition({
                        x: center * 2,
                        y: -20,
                    })
                    clearInterval(gotoEat)
                    // if (localState.authToken !== "") {
                        history.push('/mainMenu');
                    // }
                    // else {
                    //     document.getElementById('snack_error1').click();
                    //     setDeltaPosition({ x: center, y: -20 });
                    //     setTimeout(function () {
                    //         props.handle2Open()
                    //     }, 1500);
                    // }
                } else {
                    curX = curX + 10
                    setDeltaPosition({
                        x: curX,
                        y: -20,
                    })
                }

            }, 10)
        } else if (curX < center) {
            let gotoFood = setInterval(() => {
                if (curX - 10 <= 0) {
                    setDeltaPosition({
                        x: 0,
                        y: -20,
                    })
                    clearInterval(gotoFood)
                    if (localState.authToken !== "") {
                        if (localState.data.chef === true && chefstatus === "ACTIVE") {
                            history.push('/sellMenu');
                        }
                        else {
                            // alert = "You do not have chef authority!";
                            // document.getElementById('snack_error2').click();
                            document.getElementById('dlg_btn').click();
                            setDeltaPosition({ x: center, y: -20 });
                            // history.push('/')
                        }
                    }
                    else {
                        document.getElementById('snack_error1').click();
                        setDeltaPosition({ x: center, y: -20 });
                        setTimeout(function () {
                            props.handle2Open()
                        }, 1500);
                    }
                } else {
                    curX = curX - 10
                    setDeltaPosition({
                        x: curX,
                        y: -20,
                    })
                }
            }, 10)
        }
    }

    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <>
            <div>
                <Button variant="outlined" color="primary" onClick={handleClickOpen} id="dlg_btn" style={{ display: 'none' }}>
                    Open alert dialog
                </Button>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                    style={{ height: '35vh', width: '50vw', position: 'absolute', top: '30vh', left: '25vw' }}
                >
                    <DialogTitle id="alert-dialog-title">{"Do you want to be a cook?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            Click the Agree button to become a Chef, or click the Disagree button to not be a Chef.
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button
                            style={{ borderRadius: '20px', backgroundColor: ' #dd354d', border: '2px solid  #dd354d', height: '3vh', color: '#fac947', fontSize: '23px' }}
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={() => { history.push('profile') }}
                        >
                            Agree
                        </Button>
                        <Button
                            style={{ borderRadius: '20px', backgroundColor: ' #dd354d', border: '2px solid  #dd354d', height: '3vh', color: '#fac947', fontSize: '23px' }}
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={handleClose}
                        >
                            Disagree
                        </Button>
                    </DialogActions>
                </Dialog>
            </div>
            <div className="drag-box" style={{ margin: 'auto' }}>
                <Snack alert={"You do not have chef authority!"} />
                <Draggable bounds="parent"
                    axis="x"
                    position={deltaPosition}
                    scale={1}
                    onStart={onStart}
                    onDrag={handleDrag}
                    onStop={onStop}
                >
                    <div className="drag-target" />
                </Draggable>
            </div>
        </>
    )
}

function mapStateToProps(state) {
    return {
        id: state.id,
        autho: state.authen
    };
}
export default connect(mapStateToProps)(DragFoodEat);