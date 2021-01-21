import React from 'react';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import {MainDiv} from "./style";
import {
    withStyles,
    makeStyles,
} from '@material-ui/core/styles';

const CssTextField = withStyles({
    root: {
        '& label': {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '22px',
            alignItems: 'center',
            textAlign: 'center',

            color: '#777777',
            transform: 'translate(22px, 16px) scale(1)'
        },

        '& label.Mui-focused': {
            color: 'green',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: '1px solid #dd354d',
                borderRadius: '19px'
            },
            '&:hover fieldset': {
                borderColor: 'yellow',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'green',
            },
        },
    },
})(TextField);

const fontstyle={
    'fontFamily': 'Roboto',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'fontSize': '5vh',
    'textAlign': 'center',

    'color': '  rgba(221,53,77,1)',
    'paddingTop':'1vh'
}

const fontstyle1={
    'fontFamily': 'Montaga',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'fontSize': '4vh',
    'textAlign': 'center',

    'color': '#464646'
}

const buttonStyle={
    borderRadius:'20px',
    backgroundColor:' rgba(221,53,77,1)',
    border:'2px solid #dd354d',
    color:'#ffffff',
    alignSelf:'center',
    height:'8vh'
}

const useStyles = makeStyles((theme) => ({
    form: {
        width: '100%', // Fix IE 11 issue.
    },
    submit: {
        margin: theme.spacing(0, 0, 0),
        width: '268px',
        height: '67px',
        borderRadius: '19px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '32px',
        lineHeight: '37px',
        textAlign: 'center',
        color: '#FFFFFF'
    },
}));

export default function Emergency() {
    const classes = useStyles();

    return (
        <MainDiv style={{borderRadius: '42px'}}>
            <Container component="main" maxWidth="xs" style={{height:'85vh', width:'80%'}}>
                <form className={classes.form} noValidate>
                    <CssBaseline />
                    <Grid container spacing={2} style={{paddingTop: '5vh'}}>
                        <Grid item xs={12} sm={12} style={fontstyle}>
                            Call Us For Any Emergency
                        </Grid>

                        <Grid item xs={12} sm={12} style={fontstyle1}>
                            +9876543210
                        </Grid>

                        <Grid item xs={12} style={{padding:'0% 0%'}}>
                            <CssTextField
                                label="Name"
                                variant="outlined"
                                id="custom-css-outlined-input"
                                style={{width:'100%'}}
                            />
                        </Grid>
                        <Grid item xs={12} style={{marginTop:'3vh', padding:'0% 0%'}}>
                            <CssTextField
                                label="E-Mail Address"
                                variant="outlined"
                                id="custom-css-outlined-input"
                                style={{width:'100%'}}
                            />
                        </Grid>
                        <Grid item xs={12} style={{marginTop:'3vh', padding:'0% 0%'}}>
                            <CssTextField
                                label="Message"
                                variant="outlined"
                                id="custom-css-outlined-input"
                                style={{width:'100%'}}
                                multiline
                                rows={3}
                            />
                        </Grid>

                        <Grid item xs={1} sm={1}></Grid>
                        <Grid item xs={10} sm={10} style={{marginTop:'3vh', display:'flex', justifyContent:'center'}}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                                className={classes.submit}
                                style={buttonStyle}
                            >
                                Submit
                            </Button>
                        </Grid>
                    </Grid>

                </form>
            </Container>
        </MainDiv>

    );
}

