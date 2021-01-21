import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from './style.module.css';
import LandTitle from '../../Component/LandTitle';
import AudienceLabel from '../../Component/AudienceLabel';
import {constants} from "../../Utility/constant";
import {Button} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        zIndex:'3',
        position:'absolute',
        top:0,
        left:0,
        width:'100%',
    },
}));

export default function Landing4() {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div className={styles.backgroundContainer} style={{backgroundImage:'url(./images/land4.svg', backgroundColor:'white'}}>
                <div className={classes.root}>
                    <Grid container style={{paddingTop:'5vh'}}>
                        <Grid item lg={4} md={3} sm={2} xs={1}></Grid>
                        <Grid item lg={4} md={6} sm={8} xs={10} style={{padding:'0% 5%'}}>
                            <LandTitle color='' fontColor='#dd354d' outline='' text='Target Audience'></LandTitle>
                        </Grid>
                        <Grid item lg={4} md={3} sm={2} xs={1}></Grid>
                        {
                            constants.audienceLabel.map((val, index)=>{
                                if(index===0 || index===2)
                                    return(
                                        <>
                                            <Grid item lg={1} md={1} sm={1} xs={1} key={index}>
                                            </Grid>
                                            <Grid item lg={6} md={6} sm={10} xs={10} style={{display:'flex', marginTop:'3vh'}} key={index+1}>
                                                <AudienceLabel text={val} key={index+2} />
                                            </Grid>
                                            <Grid item lg={5} md={5} sm={1} xs={1} key={index+3}>
                                            </Grid>
                                        </>
                                    );
                                else
                                    return(
                                        <>
                                            <Grid item lg={5} md={5} sm={1} xs={1} key={index+5}>
                                            </Grid>
                                            <Grid item lg={6} md={6} sm={10} xs={10} style={{display:'flex', marginTop:'3vh'}} key={index+9}>
                                                <AudienceLabel text={val} key={index+7} />
                                            </Grid>
                                            <Grid item lg={1} md={1} sm={1} xs={1} key={index+8}>
                                            </Grid>
                                        </>
                                    );
                            })
                        }

                        <Grid item  md={4} sm={3} xs={3}></Grid>
                        <Grid item  md={4} sm={6} xs={6} style={{display:'flex',justifyContent:'center',alignItems:'center', marginTop:'3vh', padding:'0% 5%'}}>
                            {/*<LandingButton backColor='#dd354d' border='#dd354d' fontColor='#fac947' text='Know More'></LandingButton>*/}
                            <Button
                                style={{borderRadius:'49px',backgroundColor:' rgba(221,53,77,1)',color:'#fac947',border:'2px solid #dd354d', width:'100%', height:'68px', fontSize:'32px'}}
                                type="submit"
                                fullWidth
                                variant="contained"
                            >
                                Know More
                            </Button>
                        </Grid>
                        <Grid item md={4} sm={3} xs={3}></Grid>
                    </Grid>
                </div>
            </div>
        </React.Fragment>
    );
}