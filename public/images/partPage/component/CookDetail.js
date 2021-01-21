import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './../commonStyle.css';
import {Constant} from "./constant";


export default function CookDetail(props) {

        return (
            <div>
                <Grid container spacing={3} style={{textAlign: 'left', marginTop: '5%',fontSize:'170%',color:'black',fontFamily: 'Roboto',fontStyle: 'normal',fontWeight: 'normal'}}>
                    <Grid item xs></Grid>
                    <Grid item xs={6}>
                        <div>Menu Available:</div>
                        <div>Portion:</div>
                        <div>Cost:</div>
                        <div>Quantity:</div>
                        <div>Number of Piece:</div>
                    </Grid>
                    <Grid item xs={4}>
                        <div>Yes</div>
                        <div>Per Plate</div>
                        <div>120 SEK</div>
                        <div>250 gms</div>
                        <div>6 Tacos</div>
                    </Grid>
                    <Grid item xs></Grid>
                </Grid>
                <Grid container spacing={3} style={{marginTop:'10%'}}>
                    <Grid item xs={4}>
                        <img style={{borderRadius: '10px',width:'100%'}} src={props.id === 'profile1'?Constant.profile1.src[2]:props.id === 'profile2'?Constant.profile2.src[2]:''} alt='alt'/>
                    </Grid>
                    <Grid item xs={4}>
                        <img style={{borderRadius: '10px',width:'100%'}} src={props.id === 'profile1'?Constant.profile1.src[3]:props.id === 'profile2'?Constant.profile2.src[3]:''} alt='alt'/>
                    </Grid>
                    <Grid item xs={4}>
                        <img style={{borderRadius: '10px',width:'100%'}} src={props.id === 'profile1'?Constant.profile1.src[4]:props.id === 'profile2'?Constant.profile2.src[4]:''} alt='alt'/>
                    </Grid>
                </Grid>
                <Grid container spacing={3} style={{marginTop:'10%'}}>
                    <Grid item xs={4} style={{textAlign:'center',fontFamily: 'Roboto',fontStyle: 'normal',fontWeight: 'normal'}}  id='profile1'>
                        <a href={{}} style={{color:'black'}}>ADD TO CART</a>
                    </Grid>
                    <Grid item xs={4} style={{textAlign:'center',fontFamily: 'Roboto',fontStyle: 'normal',fontWeight: 'normal'}}  id='profile1'>
                        <a href={{}} style={{color:'black'}}>FINISH ORDER</a>
                    </Grid>
                    <Grid item xs={4} style={{textAlign:'center',fontFamily: 'Roboto',fontStyle: 'normal',fontWeight: 'normal'}}  id='profile1'>
                        <a href={{}} style={{color:'black'}}>FOOD MENU</a>
                    </Grid>
                </Grid>
            </div>


        );

}
