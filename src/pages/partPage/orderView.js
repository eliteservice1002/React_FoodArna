import React from 'react';
import Container from '@material-ui/core/Container';
import State from './component/state';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    paper: {
        color: "red",
        margin: "auto",
        textAlign: "center",
        paddingTop:"5%",
    },
    paper1: {
        color: "red",
        margin: "auto",
        textAlign: "center",
    },
    paper2: {
        color: "#464646",
        marginLeft: "auto",
        textAlign: "center",
    },
    txt1:{
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "55px",
        lineHeight: "64px",
        textDecorationLine: "underline",
        color: "#DD354D",
        paddingBottom:"2%",
    },
    txt2:{
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "36px",
        lineHeight: "47px",
        color: "#DD354D",
        paddingBottom:"10%",
    },
    txt3:{
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "30px",
        lineHeight: "35px",
        color: "rgba(0, 0, 0, 0.6)",
        padding:'2%',
    },
    txt4:{
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "27px",
        lineHeight: "32px",
        color: "#464646",
    },
    txt5:{
        fontFamily: "Roboto",
        fontStyle: "normal",
        fontWeight: "normal",
        fontSize: "20px",
        lineHeight: "23px",
        color: "#464646",

    },
    img:{
        // paddingBottom:'15%',
    }
  }));

export default function Order(){
    const classes = useStyles();
    return(
        <Container fixed>
            <Grid item xs={4} className={classes.paper}>
                <div className={classes.txt1}>Order Status</div>
                <div className={classes.txt2}>Total Offering : 10 plates</div>
            </Grid>
            <State n_order="Order1" v_order="17:00 pm" n_name="Name" v_name="Time Holmen" n_location="Location" v_location="Kaista" n_quantity="Order Quantity" v_quantity="2 Plates"/>
            <State n_order="Order2" v_order="17:25 pm" n_name="Name" v_name="Suresh Tripathi" n_location="Location" v_location="Tyresso" n_quantity="Order Quantity" v_quantity="5 Plates"/>
            <Grid item xs={4} className={classes.paper1}>
                <div className={classes.txt3}>Waiting for more orders...</div>
                <div className={classes.txt4}>Available Balance : 3 Plates</div>
            </Grid>
            <Grid item xs={2} className={classes.paper2}>
                <div className={classes.txt5}>Go Live to Share</div>
                <div className={classes.img}><img src="./images/partPage/camera.svg" alt="camera" /></div>
            </Grid>
        </Container>
    );
}
