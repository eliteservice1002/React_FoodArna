import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import styles from './style.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import LandTitle from '../../Component/LandTitle/index1';
import ImageAndLabel from "../../Component/ImageAndLabel";
import {constants} from "../../Utility/constant";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        zIndex:'3',
        position:'absolute',
        top:0,
        left:0,
        width:'100%',
    },
    fontStyle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '32px',
        lineHeight: '33px',
        color: '#fac947',
    },
    moveStyle:{
        '@media(min-width:960px)':{
            transform: 'translate(0px, 15vh)'
        }
    }
}));

export default function Landing1() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Typography component="div" className={styles.backgroundContainer} style={{backgroundImage:'url(./images/land5.svg)', backgroundSize:'cover', backgroundColor:'white'}}>
                <Typography component="div" className={styles.backgroundCover}>
                </Typography>

                <div className={classes.root}>
                    <Grid container>
                        <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
                        <Grid item lg={10} md={10} sm={10} xs={10}>
                            <Grid container style={{marginTop:'10vh'}}>
                                <Grid item lg={3} md={2}></Grid>
                                <Grid item lg={6} md={8} sm={12} xs={12}>
                                    <LandTitle color=' rgba(221,53,77,1)' fontColor='#fac947' outline='underline' text='Why your freinds love Foodrana?' />
                                    <div className={classes.fontStyle} style={{width:'100%', textAlign:'center', marginTop:'3%'}}>
                                        One stop for home cooked fresh authentic food
                                    </div>
                                </Grid>
                                <Grid item lg={3} md={2}></Grid>
                            </Grid>
                            <Grid container style={{marginTop:'5%'}}>
                                <Grid item lg={4} md={4} sm={12} xs={12} >
                                    <ImageAndLabel src={constants.imageAndlabel[0].src} text={constants.imageAndlabel[0].text} />
                                </Grid>
                                <Grid item lg={4} md={4} sm={12} xs={12} className={classes.moveStyle}>
                                    <ImageAndLabel  src={constants.imageAndlabel[1].src} text={constants.imageAndlabel[1].text} />
                                </Grid>
                                <Grid item lg={4} md={4} sm={12} xs={12}>
                                    <ImageAndLabel src={constants.imageAndlabel[2].src} text={constants.imageAndlabel[2].text} />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={1} md={1} sm={1} xs={1}></Grid>
                    </Grid>
                </div>

            </Typography>
        </React.Fragment>
    );
}