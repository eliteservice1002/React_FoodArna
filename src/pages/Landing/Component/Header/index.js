import React, { useState, useEffect } from 'react';
import Modal from '@material-ui/core/Modal';
import face from '../../../../assets/images/contact.png';
import { StyledHeader } from '../Header/style';
import { makeStyles } from '@material-ui/core/styles';
import brand from '../../../../assets/images/logo.svg';
import { useHistory } from 'react-router-dom';
import DropMenuAfter from '../DropMenu/loginafter';
import DropMenuBefore from '../DropMenu/loginbefore';
import Grid from '@material-ui/core/Grid';
import DropMenuCart from '../DropMenu/cartdrop';
import { connect } from 'react-redux';
import $ from 'jquery';
import ApiConfig from '../../../../config/api_config';
import { ChangeAvatarImg } from "../../../../reducers/action";

const fontstyle = {
    'fontFamily': 'Roboto',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'fontSize': '17px',
    'color': '#DD354D',
    'display': 'flex',
    'alignItems': 'center',
    'textDecoration': 'none',
    'outline': 'none',
    'cursor': 'pointer',
    display: 'flex',
    flexWrap: 'wrap'
}

const fontstyle1 = {
    'fontFamily': 'Roboto',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'fontSize': '17px',
    'color': '#DD354D',
    'display': 'flex',
    'alignItems': 'center',
    'textDecoration': 'none',
    'outline': 'none',
    'cursor': 'pointer',
    'width': '10%',
    justifyContent: 'flex-end'
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: 300,
        flexGrow: 1,
        minWidth: 300,
        transform: 'translateZ(0)',
        '@media all and (-ms-high-contrast: none)': {
            display: 'none',
        },
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '0'
    },
    paper: {
        outline: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '400px',
        height: '630px',
        backgroundColor: theme.palette.background.paper,
        borderRadius: '42px',
        padding: '0'
    },
}));

const stickyStyle = {
    backgroundColor: '#464646',
    opacity: '0.7',
    zIndex: '10',
    position: 'absolute',
    top: '0',
    left: '0',
    width: '100%',
    height: '80px',

}
const stickyContent = {
    alignSelf: 'center',
    width: '100%',
    zIndex: '15',

    display: 'flex',
    justifyContent: 'space-between'
}

function Header(props) {

    let localState = localStorage.getItem('user');
    if (localState && typeof JSON.parse(localState) === 'object') {
        localState = JSON.parse(localState);
    }

    const classes = useStyles();
    const [lastScrollY, setLastScrollY] = useState(0);
    const [imagepreveurl, setImagePreviewUrl] = React.useState("");

    useEffect(() => {
        var settings = {
            "url": ApiConfig.url + "/api/user/image",
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json",
                "Authorization": localState.authToken
            },
        };

        $.ajax(settings).done(function (response) {
            setImagePreviewUrl(response);
            props.ChangeAvatarImg(response);
        });
    });// , [imagepreveurl]

    const handleScroll = () => {
        setLastScrollY(window.scrollY);
    }
    useEffect(() => {
        window.addEventListener('scroll', handleScroll, true);
        return function cleanup() {
            window.removeEventListener('scroll', handleScroll);
        }
    });

    const history = useHistory();
    return (
        <>
            {lastScrollY < 100 ? (
                <StyledHeader id="head">
                    <Grid item xs={12} style={{ display: 'flex', flexWrap: 'wrap' }}>
                        <Grid item xs={6} style={fontstyle}>
                            <img src='./images/phn_hnd1.png' alt="alt" />
                            <p>Get the App</p>
                        </Grid>
                        <Grid item xs={6} style={fontstyle1}>
                            {/* <img alt="face" src={face}></img> */}
                            {
                                props.logState ? (<>
                                    <DropMenuCart />
                                    <DropMenuAfter src={imagepreveurl} logout={props.hadleLogOut} />
                                </>) : (<>
                                    <DropMenuBefore src={face} login={props.handle2Open} register={props.handle1Open} />
                                </>)
                            }
                            <Modal
                                style={{ 'outline': 'none', 'display': 'flex' }}
                                open={props.open}
                                onClose={props.handleClose}
                                aria-labelledby="simple-modal-title"
                                aria-describedby="simple-modal-description"
                                className={classes.modal}
                            >
                                <div className={classes.paper}>
                                    {props.body}
                                </div>
                            </Modal>
                        </Grid>
                    </Grid>
                </StyledHeader>) : (
                    <StyledHeader style={{ paddingTop: '0px' }}>
                        <div style={stickyStyle}></div>
                        <div style={stickyContent}>
                            <div style={fontstyle}>
                                <img src='./images/phn_hnd1.png' alt="alt" />
                                <p>Get the App</p>
                            </div>
                            <div style={{ paddingTop: '10px' }}>
                                <img src={brand} style={{ height: '60px' }} alt="alt" />
                            </div>
                            <div style={fontstyle1}>
                                {
                                    props.logState ? (<>
                                        <DropMenuCart />
                                        <DropMenuAfter src={imagepreveurl} logout={props.hadleLogOut} />
                                    </>) : (<>
                                        <DropMenuBefore src={face} login={props.handle2Open} register={props.handle1Open} />
                                    </>)
                                }
                                <Modal
                                    style={{ 'outline': 'none', 'display': 'flex' }}
                                    open={props.open}
                                    onClose={props.handleClose}
                                    aria-labelledby="simple-modal-title"
                                    aria-describedby="simple-modal-description"
                                    className={classes.modal}
                                >
                                    <div className={classes.paper}>
                                        {props.body}
                                    </div>
                                </Modal>
                            </div>
                        </div>
                    </StyledHeader>)
            }
        </>
    )
}


function mapStateToProps(state) {
    return {
        id: state.id,
        avatar: state.avatarimg
    };
}
const mapDispatchToProps = {
    ChangeAvatarImg
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);