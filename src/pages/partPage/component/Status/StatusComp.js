import React from 'react';
import Grid from '@material-ui/core/Grid';
import {OrderContent} from './style';
import Button from '@material-ui/core/Button';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faCheck} from '@fortawesome/free-solid-svg-icons';


export default function StatusComp(props){
    return(
        <Grid container style={{marginTop:'6%'}}>
            <Grid container>
                <Grid item lg={2} md={3} sm={2} xs={1}></Grid>
                <Grid item lg={4} md={3} sm={4} xs={6}><OrderContent style={{color:'#dd354d'}}>{props.keyorder}</OrderContent></Grid>
                <Grid item lg={1} md={1} sm={1} xs={1}><OrderContent>:</OrderContent></Grid>
                <Grid item lg={5} md={5} sm={5} xs={4}><OrderContent>{props.order}</OrderContent></Grid>
            </Grid>
            <Grid container style={{marginTop:'0.1%'}}>
                <Grid item lg={2} md={3} sm={2} xs={1}></Grid>
                <Grid item lg={4} md={3} sm={4} xs={6}><OrderContent style={{color:'black'}}>Name</OrderContent></Grid>
                <Grid item lg={1} md={1} sm={1} xs={1}><OrderContent style={{color:'black'}}>:</OrderContent></Grid>
                <Grid item lg={5} md={5} sm={5} xs={4}><OrderContent style={{color:'black'}}>{props.name}</OrderContent></Grid>
            </Grid>
            <Grid container style={{marginTop:'0.1%'}}>
                <Grid item lg={2} md={3} sm={2} xs={1}></Grid>
                <Grid item lg={4} md={3} sm={4} xs={6}><OrderContent style={{color:'black'}}>Location</OrderContent></Grid>
                <Grid item lg={1} md={1} sm={1} xs={1}><OrderContent style={{color:'black'}}>:</OrderContent></Grid>
                <Grid item lg={5} md={5} sm={5} xs={4}><OrderContent style={{color:'black'}}>{props.location}</OrderContent></Grid>
            </Grid>
            <Grid container style={{marginTop:'0.1%'}}>
                <Grid item lg={2} md={3} sm={2} xs={1}></Grid>
                <Grid item lg={4} md={3} sm={4} xs={6}><OrderContent style={{color:'black'}}>Order Quantity</OrderContent></Grid>
                <Grid item lg={1} md={1} sm={1} xs={1}><OrderContent style={{color:'black'}}>:</OrderContent></Grid>
                <Grid item lg={5} md={5} sm={5} xs={4}><OrderContent style={{color:'black'}}>{props.quantity}</OrderContent></Grid>
            </Grid>
            <Grid container style={{width:'100%',marginTop:'3%',display:'flex', justifyContent:'center'}}>
                <Button
                    style={{borderRadius:'25px',backgroundColor:'#dd354d',color:'#fac947',border:'2px solid #dd354d', width:'270px', height:'44px', fontSize:'23px'}}
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                >
                    <FontAwesomeIcon icon={faCheck}></FontAwesomeIcon><OrderContent style={{marginLeft:'10px', color:'#fac947', fontSize:'25px'}}>Accepted</OrderContent>
                </Button>
            </Grid>
        </Grid>
    );
}