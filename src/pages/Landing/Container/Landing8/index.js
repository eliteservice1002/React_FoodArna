import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from './style.module.css';
import logo from '../../../../assets/images/logo.svg';
import locIcon from '../../../../assets/images/loc_icon.svg';
import msgIcon from '../../../../assets/images/msg_icon.svg';
import phoneIcon from '../../../../assets/images/phone_icon.svg';
import facebook from '../../../../assets/images/facebook.png';
import Linkedin from '../../../../assets/images/linkedin.png';
import Twitter from '../../../../assets/images/twitter.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        zIndex:'3',
        position:'absolute',
        top:0,
        left:0,
        width:'100%',
    },
    paper: {
        padding: theme.spacing(3),
        textAlign:'left',
        color:'white',
       
    },
    paper1 : {
        textAlign:'left',
        color:'white'
    }
}));

const contentStyle = {
    width: '100%',
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: '24px',
    color: '#464646',
    paddingTop: '20px',
    textAlign: 'left',
    textDecoration: 'none',
}

export default function Landing8() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={styles.backgroundContainer} style={{backgroundImage:'url(./images/land8.svg', backgroundColor:'white'}}>
                <div className={classes.root}>
                    <Grid container style={{padding:'8vh 2%'}}>
                        <Grid item lg={12} md={12}>
                            <Grid container>
                                <Grid item lg={4} md={12} sm={12} xs={12} className={classes.paper}>
                                    <Grid container style={{height:'64px'}}>
                                        <img alt="imayte" src={logo} height="100%" />
                                    </Grid>
                                    <Grid container style={contentStyle}>
                                        Foodarna is a social network for people who love food to meet other food lovers Foodarna will pick food from the sender’s home kitchen or Cloud Kitchen, do a Instant Quick Freezing (IQF) and deliver it to friends and family all across the world for a specific fee. Foodarna works against food waste. We “save” unwanted and overproduced food in members
                                    </Grid>
                                </Grid>
                                <Grid item lg={3} md={12} sm={12} xs={12} className={classes.paper}>
                                    <Grid container className={styles.titleStyle}>
                                        Contact Us
                                    </Grid>
                                    <Grid container style={contentStyle}>
                                        <Grid container className={styles.contactItem}>
                                            <div style={{marginRight:'3%'}}><img alt="imayte" src={locIcon}  /></div><div>Office No - 115,<br></br>Street No - 05,<br></br> NY, USA</div>
                                        </Grid>
                                        <Grid container className={styles.contactItem}>
                                            <div style={{marginRight:'3%'}}><img alt="imayte" src={msgIcon}  /></div><div>example@email.com</div>
                                        </Grid>

                                        <Grid container className={styles.contactItem}>
                                            <div style={{marginRight:'3%'}}><img alt="imayte" src={phoneIcon}  /></div><div>+9876543210</div>
                                        </Grid>

                                    </Grid>
                                </Grid>
                                <Grid item lg={2} md={12} sm={12} xs={12} className={classes.paper} >
                                    <Grid container className={styles.titleStyle}>
                                        About Us
                                    </Grid>
                                    <Grid container style={contentStyle}>
                                        <Grid item lg={12} md={2} sm={3} xs={3} className={styles.contactItem}>
                                            <a href="/" style={{textDecoration:'none', color:'black'}}>Home</a>
                                        </Grid>
                                        <Grid item lg={12} md={3} sm={3} xs={3} className={styles.contactItem}>
                                            <a href="/" style={{textDecoration:'none', color:'black'}}>About Us</a>
                                        </Grid>
                                        <Grid item lg={12} md={3} sm={3} xs={3} className={styles.contactItem}>
                                            <a href="/" style={{textDecoration:'none', color:'black'}}>Features</a>
                                        </Grid>
                                        <Grid item lg={12} md={3} sm={3} xs={3} className={styles.contactItem}>
                                            <a href="/" style={{textDecoration:'none', color:'black'}}>Services</a>
                                        </Grid>
                                        <Grid item lg={12} md={2} sm={3} xs={2} className={styles.contactItem}>
                                            <a href="/" style={{textDecoration:'none', color:'black'}}>Contact</a>
                                        </Grid>
                                    </Grid>
                                </Grid>
                                <Grid item lg={3} md={12} sm={12} xs={12} className={classes.paper} >
                                    <Grid container className={styles.titleStyle}>
                                        Stay With Us
                                    </Grid>
                                    <Grid container style={contentStyle}>

                                        <Grid item lg={4} md={1} sm={2} xs={2} >
                                            <a href="/"><img alt="imayte" src={facebook} style={{width:'100%', maxWidth:'50px'}} /></a>
                                        </Grid>

                                        <Grid item lg={4} md={1} sm={2} xs={2} >
                                            <a href="/"><img alt="imayte" src={Linkedin} style={{width:'100%', maxWidth:'50px'}} /></a>
                                        </Grid>

                                        <Grid item lg={4} md={1} sm={2} xs={2} >
                                            <a href="/"><img alt="imayte" src={Twitter} style={{width:'100%', maxWidth:'50px'}} /></a>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </div>
        </React.Fragment>
    );
}