import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import Snack from '../../../partPage/component/snackbar';
import InputAdornment from '@material-ui/core/InputAdornment';
import Linkui from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import {
    withStyles,
    makeStyles,
} from '@material-ui/core/styles';
import google from '../../../../assets/images/google.svg';
import fb from '../../../../assets/images/fb.svg';
import styles from './style.module.css';
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

        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: '100%', // Fix IE 11 issue.
    },
    submit: {
        margin: theme.spacing(0, 0, 0),
    },
}));



export default function SignUp(props) {
    const classes = useStyles();
    const registerData1 = {
        full_name: '',
        birthday: '',
        e_mail: '',
        password: '',
        repeatpassword: '',
        register: false,
        error: false,
    };

    const [registerData, setRegisterData] = useState(registerData1);
    const [alert, setAlert] = React.useState("");

    const handleOnChangeFirstName = e => {
        setRegisterData({ ...registerData, full_name: e.target.value });
    };

    const handleOnChangeLastName = e => {
        setRegisterData({ ...registerData, birthday: e.target.value });
    };

    const handleOnChangeUserName = e => {
        setRegisterData({ ...registerData, e_mail: e.target.value });
    };

    const handleOnChangePassword = e => {
        setRegisterData({ ...registerData, password: e.target.value });
    };

    const handleOnChangerepeatPassword = e => {
        setRegisterData({ ...registerData, repeatpassword: e.target.value });
    };

    // useEffect(()=> {

    const submit = () => {
        if (registerData['e_mail'] !== "") {
            if (registerData['password'] !== registerData['repeatpassword']) {
                setAlert("Those passwords didn't match. Try again.");
                document.getElementById('snack_warning').click();
                setRegisterData({ ...registerData, repeatpassword: "" });
                document.getElementById('repeatPassword').focus();
            }
            else {
                const data = {
                    name: registerData['full_name'],
                    phone: "46" + registerData['birthday'],
                    email: registerData['e_mail'],
                    password: registerData['password'],
                    repeatPassword: registerData['repeatpassword'],
                    source: "FOODARNA",
                }

                fetch(ApiConfig.url + "/api/registration", {
                    method: 'POST',
                    headers: {
                        'accept': '*/*',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data),
                })
                    .then(res => res.json())
                    .then(function (res) {
                        // setAlert(res.message);
                        if (res.message !== "Validation Failed") {
                            setAlert("Please check your mail box.");
                            document.getElementById('snack_info').click();
                            setRegisterData({
                                ...registerData,
                                full_name: '',
                                birthday: '',
                                e_mail: '',
                                password: '',
                                register: true,
                                error: false,
                                repeatpassword: ''
                            });
                            document.getElementById('mdl_cls').click();
                        }
                        else {
                            setAlert("Please input a valid email. Try again.");
                            document.getElementById('snack_warning').click();
                            setRegisterData({
                                ...registerData,
                                full_name: '',
                                birthday: '',
                                e_mail: '',
                                password: '',
                                register: true,
                                error: false,
                                repeatpassword: ''
                            });
                            document.getElementById('email').focus();
                        }
                    })
            }
        }
        else {
            setAlert("Please input a valid email. Try again.");
            document.getElementById('snack_warning').click();
            setRegisterData({ ...registerData, e_mail: "" });
            document.getElementById('email').focus();
            // document.getElementById('mdl_cls').click();
            props.onclose();
        }
    }

    return (
        <form className={classes.form} noValidate>
            <Snack alert={alert} />
            <Grid container spacing={1}>
                <Grid item xs={12} sm={12} lg={12} md={12} style={{ textAlign: 'right' }} id="mdl_cls" onClick={props.onclose}>
                    <HighlightOffIcon style={{ cursor: 'pointer' }} onClick={props.onclose} />
                </Grid>
                <Grid item xs={6} sm={6} lg={6} md={6} >
                    <Button
                        style={{ borderRadius: '25px', backgroundColor: '#ffffff', color: '#dd354d', border: '2px solid #dd354d', width: '160px', height: '6vh', fontSize: '23px' }}
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                        onClick={props.onclick}
                    >
                        LogIn
                            </Button>
                </Grid>
                <Grid item xs={6} sm={6} md={6} lg={6}>
                    <Button
                        style={{ borderRadius: '25px', backgroundColor: '#dd354d', color: '#fac947', border: '2px solid #dd354d', width: '160px', height: '6vh', fontSize: '23px' }}
                        type="submit"
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                    </Button>
                </Grid>
                <Grid item xs={1} sm={1}></Grid>
                <Grid item xs={10} sm={10}>
                    <img src='./images/brand.png' width="100%" style={{ objectFit: 'contain', height: '10vh' }} alt='brand' />
                </Grid>



                <Grid item xs={6}>
                    <CssTextField
                        variant="outlined"
                        required
                        fullWidth
                        id="full_name"
                        label="Full Name"
                        name="full_name"
                        autoComplete="full-name"
                        value={registerData['full_name']}
                        onChange={handleOnChangeFirstName}
                    />
                </Grid>
                <Grid item xs={6}>
                    <CssTextField
                        variant="outlined"
                        required
                        fullWidth
                        name="birthday"
                        label="Phone"
                        id="birthday"
                        autoComplete=""
                        InputProps={{
                            startAdornment: <InputAdornment position="start">+46</InputAdornment>,
                        }}
                        placeholder="765195442"
                        value={registerData['birthday']}
                        onChange={handleOnChangeLastName}
                    />
                </Grid>
                <Grid item xs={6}>
                    <CssTextField
                        variant="outlined"
                        required
                        fullWidth
                        name="email"
                        label="E-mail"
                        type="email"
                        id="email"
                        autoComplete=""
                        value={registerData['e_mail']}
                        onChange={handleOnChangeUserName}
                    />
                </Grid>
                <Grid item xs={6}>
                    <CssTextField
                        variant="outlined"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        autoComplete="current-password"
                        value={registerData['password']}
                        onChange={handleOnChangePassword}
                    />
                </Grid>
                <Grid item xs={12}>
                    <CssTextField
                        variant="outlined"
                        required
                        fullWidth
                        name="repeatPassword"
                        label="RepeatPassword"
                        type="password"
                        id="repeatPassword"
                        autoComplete="current-password"
                        value={registerData['repeatpassword']}
                        onChange={handleOnChangerepeatPassword}
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
                <Grid item xs={10} sm={10} style={{ marginTop: '-5px' }}>
                    <Button
                        style={{ borderRadius: '20px', backgroundColor: ' #dd354d', border: '2px solid  #dd354d', height: '6vh', color: '#fac947', fontSize: '23px' }}
                        onClick={submit}
                        fullWidth
                        variant="contained"
                        color="primary"
                        className={classes.submit}
                    >
                        Sign Up
                            </Button>
                </Grid>
                <Grid container justify="center">
                    <Grid item>
                        <Linkui href="#" variant="body2" onClick={props.onclick} style={{ color: '#464646' }}>
                            Already have an account? LOGIN
                                </Linkui>
                    </Grid>
                </Grid>

            </Grid>

        </form >

    );
}

