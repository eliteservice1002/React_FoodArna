import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { MainDiv, FontSize } from "./style";
import {
    withStyles,
    makeStyles,
} from '@material-ui/core/styles';
import FixedTextField from '../../../partPage/component/FixedTextField';
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
        marginTop: theme.spacing(8),
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
        margin: theme.spacing(0, 0, 2),
    },
}));

export default function SignUp(props) {
    const classes = useStyles();

    return (
        <MainDiv>
            <Container component="main" maxWidth="xs">
                <form className={classes.form} noValidate>
                    <CssBaseline />
                    <Grid container spacing={1} >
                        <Grid item xs={12} sm={12} lg={12} md={12} style={{ textAlign: 'right' }}>
                            <HighlightOffIcon style={{ cursor: 'pointer' }} onClick={props.onclose} />
                        </Grid>
                        <Grid item xs={1} sm={1}></Grid>
                        <Grid item xs={10} sm={10}>
                            <img src='./images/brand.png' width="100%" style={{ objectFit: 'contain' }} alt='brand' />
                        </Grid>
                        <Grid item xs={12} style={{ paddingTop: '10%' }}>

                            <Typography align="center">
                                <FontSize>
                                    Reset Your Password
                                    </FontSize>
                            </Typography>


                        </Grid>
                        <Grid item xs={12} style={{ paddingTop: '7%' }}>
                            <CssTextField
                                variant="outlined"
                                fullWidth
                                name="password"
                                label="Enter New Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>

                        <Grid item xs={12} style={{ paddingTop: '7%', paddingBottom: '7%' }}>
                            <CssTextField
                                variant="outlined"
                                fullWidth
                                name="password"
                                label="Confirm New Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                            />
                        </Grid>

                        <Grid item xs={1} sm={1}></Grid>
                        <Grid item xs={10} sm={10}>
                            <Button
                                style={{ borderRadius: '20px', backgroundColor: ' #dd354d', border: '2px solid  #dd354d', height: '40px', color: ' #fac947', fontSize: '28px' }}
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                            >
                                Done
                            </Button>
                        </Grid>


                    </Grid>

                </form>
            </Container>
        </MainDiv>

    );
}

