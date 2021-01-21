import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import styles from './style.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Emergency from "../../Component/Emergency";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        zIndex:'3',
        position:'absolute',
        top:'8%',
        left:0,
        width:'100%',
    },
}));

export default function Landing7() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Typography component="div" className={styles.backgroundContainer} style={{backgroundImage:'url(./images/land7.svg)', backgroundSize:'cover'}}>
                <div className={classes.root}>
                    <Grid container>
                        <Grid item lg={1}></Grid>
                        <Grid item lg={4} md={12} sm={12} xs={12} style={{display:'flex', justifyContent:'center'}}>
                            <Emergency />
                        </Grid>
                    </Grid>
                </div>
            </Typography>
        </React.Fragment>
    );
}