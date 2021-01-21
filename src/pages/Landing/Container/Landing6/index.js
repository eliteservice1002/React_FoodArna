import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import styles from './style.module.css';
import Landing6Label from "../../Component/Landing6Label";
import { constants } from "../../Utility/constant";
import LandTitle from '../../Component/LandTitle';
import CarouselItem from "../../Component/CarouselItem";

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        zIndex: '3',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
    },
});

export default function Landing6() {
    const classes = useStyles();
    const [info, setInfo] = useState([]);

    const init = () => {
        const data = {
            title: ""
        };
        fetch("http://localhost/api/users/findAllClient", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(function (res) {
                console.log(res);
            })
    }

    useEffect(() => {
        // init();
    }, []);
    return (
        <React.Fragment>
            <div className={styles.backgroundContainer} style={{ backgroundImage: 'url(./images/land6.svg', backgroundColor: 'white' }}>
                <div className={classes.root}>
                    <Grid container>
                        <Grid item lg={2} md={1} sm={1} xs={1}></Grid>
                        <Grid item lg={8} md={10} sm={10} xs={10}>
                            <Grid container style={{ marginTop: '5%' }}>
                                {
                                    constants.landing6label.map((val, index) => {
                                        return (
                                            <Grid item lg={3} md={3} sm={6} xs={6} style={{ padding: '0% 1.5%' }} key={index}>
                                                <Landing6Label label1={val.label1} label2={val.label2} key={index + 1}></Landing6Label>
                                            </Grid>
                                        );
                                    })
                                }
                            </Grid>
                            <Grid container style={{ marginTop: '12%' }}>
                                <Grid item lg={4} md={4} sm={2} xs={2}></Grid>
                                <Grid item lg={4} md={4} sm={8} xs={8}>
                                    <LandTitle color='#fac947' fontColor='#dd354d' outline='underline' text='Testimonials'></LandTitle>
                                </Grid>
                                <Grid item lg={4} md={4} sm={2} xs={2}></Grid>
                            </Grid>
                            <Grid container style={{ marginTop: '8%' }}>
                                <Grid item lg={1} md={1} xs={1} sm={1}>
                                    <div className={styles.borderContainerL} style={{ margin: 'auto' }}></div>
                                </Grid>
                                <Grid item lg={10} md={10} xs={10} sm={10}>
                                    <CarouselItem />
                                </Grid>
                                <Grid item lg={1} md={1} xs={1} sm={1}>
                                    <div className={styles.borderContainerR} style={{ margin: 'auto' }}></div>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item lg={2} md={1} sm={1} xs={1}></Grid>
                    </Grid>
                </div>
            </div>
        </React.Fragment>
    );
}