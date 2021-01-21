import React, { useState } from 'react';
import axios from 'axios';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Linkui from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Snack from '../../../partPage/component/snackbar';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { connect } from 'react-redux';
import Backdrop from '../../../partPage/component/backdrop';
import {
    withStyles,
    makeStyles,
} from '@material-ui/core/styles';
import fb from "../../../../assets/images/fb.svg";
import google from "../../../../assets/images/google.svg";
import styles from "./style.module.css";
import $ from 'jquery';
import { ChangeEmail, ChangeID, ChangeUserName, ChangeAuthen, ChangeAddress, ChangeCity, ChangeCountry, ChangePostCode, ChangeAvatarImg } from './../../../../reducers/action'
import FixedTextField from '../../../partPage/component/FixedTextField';
import ApiConfig from '../../../../config/api_config';

const CssTextField = withStyles({
    root: {
        '& label': {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '22px',
            alignItems: 'center',
            textAlign: 'center',

            color: 'rgba(221,53,77,1)',
            transform: 'translate(22px, 16px) scale(1)'
        },

        '& label.Mui-focused': {
            color: 'green',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'rgba(221,53,77,1)',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: '1px solid rgba(221,53,77,1)',
                borderRadius: '19px'
            },
            '&:hover fieldset': {
                borderColor: 'rgba(221,53,77,1)',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgba(221,53,77,1)',
            },
        },
    },
})(FixedTextField);

const useStyles = makeStyles((theme) => ({
    paper: {

        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing(0),
    },
    submit: {
        margin: theme.spacing(0, 0, 0),
    },
}));

function SignUp(props) {
    const classes = useStyles();
    const loginData1 = {
        email: '',
        pass: '',
        error: false,
        loginSuccess: false,
    };

    const [loginData, setLoginData] = useState(loginData1);
    const [btndisableflag, setBtndisableflag] = useState(false);
    let alerg = "";
    const handleOnChangeEMail = (e) => {
        setLoginData({ ...loginData, email: e.target.value });
    };

    const handleOnChangePassword = (e) => {
        setLoginData({ ...loginData, pass: e.target.value });
    };

    const handleKeyDown = (e) => {
        if (e.key === 'Enter')
            login();
    }

    const make_base_auth = (user, password) => {
        const tok = user + ':' + password;
        const hash = new Buffer(tok).toString('base64');
        return 'Basic ' + hash;
    }

    const login = () => {
        setBtndisableflag(true);
        document.getElementById('btn_backdrop').click();
        const basicauth = make_base_auth(
            loginData['email'],
            loginData['pass']
        );

        var axios = require('axios');
        var config = {
            method: 'post',
            url: ApiConfig.url + '/login',
            headers: {
                'Authorization': basicauth
            }
        };

        axios(config)
            .then(function (res) {
                console.log(JSON.stringify(res.data));
                if (res.status == 200) {
                    let user = {
                        authToken: res.headers['authorization'],
                        data: res.data
                    };
                    localStorage.setItem('user', JSON.stringify(user));
                    setLoginData({ ...loginData, loginSuccess: true, error: false });
                    props.logged();
                    props.onclose();
                    setBtndisableflag(false);
                }
            })
            .catch(function (error) {
                console.log(error);
                setBtndisableflag(false);
                alerg = "Unauthorized";
                document.getElementById('snack_info').click();
            });


        // var settings = {
        //     "url": ApiConfig.url + "/login",
        //     "method": "POST",
        //     "timeout": 0,
        //     "headers": {
        //         "Authorization": basicauth
        //     },
        // };

        // $.ajax(settings).done(function (response) {
        //     console.log(response);
        //     if (res.status == 200) {
        //         let user = {
        //             authToken: res.headers['authorization'],
        //             data: res.data
        //         };
        //         localStorage.setItem('user', JSON.stringify(user));
        //         setLoginData({ ...loginData, loginSuccess: true, error: false });
        //         props.logged();
        //         props.onclose();
        //         setBtndisableflag(false);
        //     }
        // });
    }

    return (
        <>
            <Backdrop />
            <Snack alert={"Unauthorized"} />
            <div className={classes.form}>
                <CssBaseline />
                <Grid container spacing={2} style={{ paddingTop: '2vh' }}>
                    <Grid item xs={12} sm={12} lg={12} md={12} style={{ textAlign: 'right' }}>
                        <HighlightOffIcon style={{ cursor: 'pointer' }} onClick={props.onclose} />
                    </Grid>
                    <Grid item xs={6} sm={6} lg={6} md={6} >
                        <Button
                            style={{ borderRadius: '25px', backgroundColor: '#dd354d', color: '#fac947', border: '2px solid #dd354d', width: '160px', height: '6vh', fontSize: '23px' }}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}

                        >
                            LogIn
                            </Button>
                    </Grid>
                    <Grid item xs={6} sm={6} lg={6} md={6} >
                        <Button
                            style={{ borderRadius: '25px', backgroundColor: '#ffffff', color: '#dd354d', border: '2px solid #dd354d', width: '160px', height: '6vh', fontSize: '23px' }}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={props.onclick1}
                        >
                            Sign Up
                            </Button>
                    </Grid>
                    <Grid item xs={1} sm={1}></Grid>
                    <Grid item xs={10} sm={10} style={{ paddingTop: '2vh' }}>
                        <img src='./images/brand.png' width="100%" style={{ objectFit: 'contain' }} alt='brand' />
                    </Grid>
                    <Grid item xs={12} style={{ paddingTop: '3vh' }}>
                        <CssTextField
                            variant="outlined"
                            required
                            fullWidth
                            name="email"
                            label="Email"
                            type="email"
                            id="password"
                            autoComplete=""
                            onChange={handleOnChangeEMail}
                        />
                    </Grid>
                    <Grid item xs={12} style={{ paddingTop: '3vh' }}>
                        <CssTextField
                            variant="outlined"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            onChange={handleOnChangePassword}
                            onKeyDown={handleKeyDown}
                        />
                    </Grid>
                    <Grid item xs={12}>
                        <Grid container>
                            <Grid item xs={5} style={{ fontSize: '20px', textAlign: 'center', color: '#777777', paddingTop: '2%' }}>
                                <hr />
                            </Grid>
                            <Grid item xs={2} style={{ fontSize: '20px', textAlign: 'center', color: '#777777' }}>
                                or
                                </Grid>
                            <Grid item xs={5} style={{ fontSize: '20px', textAlign: 'center', color: '#777777', paddingTop: '2%' }}>
                                <hr />
                            </Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={1}></Grid>
                            <Grid item xs={10}>
                                <Grid container>
                                    <Grid item xs={1}></Grid>
                                    <Grid item xs={6} style={{ fontSize: '18px', color: '#777777' }}>
                                        Continue With:
                                        </Grid>
                                    <Grid item xs={2} style={{ marginLeft: '2%' }}>
                                        <img className={styles.imgStyle} src={fb} width="60%" alt="alt" />
                                    </Grid>
                                    <Grid item xs={2}>
                                        <img className={styles.imgStyle} src={google} width="60%" alt="alt" />
                                    </Grid>
                                    <Grid item xs={1}></Grid>
                                </Grid>
                            </Grid>
                            <Grid item xs={1}></Grid>
                        </Grid>
                        <Grid container>
                            <Grid item xs={12} style={{ fontSize: '10px', color: '#777777', textAlign: 'center' }}>
                                By logging in, you agree to Foodarna's Terms of Service, Cookie Policy, Privacy Policy and Content Policies
                                </Grid>
                        </Grid>
                    </Grid>
                    <Grid item xs={1} sm={1}></Grid>
                    <Grid item xs={10} sm={10}>
                        <Button
                            style={{ borderRadius: '20px', backgroundColor: ' #dd354d', border: '2px solid  #dd354d', height: '40px', color: ' #fac947', fontSize: '28px' }}
                            fullWidth
                            variant="contained"
                            color="primary"
                            className={classes.submit}
                            onClick={login}
                            disabled={btndisableflag}
                        >
                            Log In
                        </Button>
                    </Grid>
                    <Grid container justify="center">
                        <Grid item>
                            <Linkui href="#" variant="body2" onClick={props.onclick} style={{ color: '#464646' }}>
                                Forgot Password ?
                                </Linkui>
                        </Grid>
                    </Grid>
                </Grid>
            </div>
        </>
    );
}

function mapStateToProps(state) {
    return {
        email: state.email,
    };
}

const mapDispatchToProps = {
    ChangeEmail,
    ChangeID,
    ChangeUserName,
    ChangeAddress,
    ChangeCity,
    ChangeCountry,
    ChangePostCode,
    ChangeAuthen,
    ChangeAvatarImg
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);