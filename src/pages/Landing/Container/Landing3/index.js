import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import styles from './style.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import {Button} from "@material-ui/core";
import styled from 'styled-components';

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

const StyledButton = styled(Button)`
  &:hover {
    background-color: #dd354d ;
  }`;

export default function Landing3() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <CssBaseline />
            <Typography component="div" className={styles.backgroundContainer} style={{backgroundImage:'url(./images/land3.svg)', backgroundSize:'cover'}}>
                <div className={classes.root}>
                    <Grid container>
                        <Grid item md={1} sm={1} xs={1}>
                        </Grid>
                        <Grid item md={8} sm={11} xs={11}>
                            <Grid container style={{width:'100%'}}>
                                <Grid item lg={5} md={8} sm={6} xs={12}>
                                    <Grid container>
                                        <Grid item md={12} sm={12} xs={12} className={styles.fontTitle}>
                                            What Is FOODARNA
                                        </Grid>
                                        <Grid item md={12} sm={12} xs={12} className={styles.fontContent}>
                                            <p>
                                                Foodarna is a social network for people who love food to meet other food lovers
                                            </p>
                                            <p>
                                                Members can exchange food with each other
                                            </p>
                                            <p>
                                                Members can share/gift food to other members
                                            </p>
                                            <p>
                                                Members can buy & sell food to other members
                                            </p>
                                        </Grid>
                                        <Grid item md={12} sm={12} xs={12} style={{paddingRight:'30%', marginTop:'5%'}}>
                                                <StyledButton
                                                    style={{borderRadius:'49px',color:'#FCD652',border:'2px solid #ffffff', width:'100%',minWidth:'150px', height:'68px', fontSize:'32px'}}
                                                    type="submit"
                                                    fullWidth
                                                    variant="outlined"
                                                >
                                                    Explore
                                                </StyledButton>
                                        </Grid>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item md={2}>
                        </Grid>
                    </Grid>
                </div>
            </Typography>
        </React.Fragment>
    );
}