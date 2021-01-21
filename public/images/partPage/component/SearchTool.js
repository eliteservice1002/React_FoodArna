import React from "react";
import Search from './Search';
import Grid from '@material-ui/core/Grid';
import './../commonStyle.css';
import PageTitle from './PageTitle';






export default class SearchTool extends React.Component {

    render() {

        return (
            <Grid container style={{color:"black"}}>
                <Grid item xs={3} className='centerStyle'>
                    <img src='./images/brand.png' alt='alt' style={{width:'100%'}}/>
                </Grid>
                <Grid item xs={6} className='centerStyle' style={{alignItems:'center'}}>
                    {this.props.id === 'authenticFood'?<Search/>  :''}
                </Grid>
                <Grid item xs={3} className='centerStyle'>
                    <Grid item xs className='centerStyle'><img src='./images/partPage/phone.svg' alt='alt' style={{transform:'scale(0.7)'}}/></Grid>
                    <Grid item xs className='centerStyle'><img src='./images/partPage/user.svg' alt='alt' style={{transform:'scale(0.7)'}}/></Grid>
                    <Grid item xs className='centerStyle'><img src='./images/partPage/basket.svg' alt='alt' style={{transform:'scale(0.7)'}}/></Grid>
                    <Grid item xs className='centerStyle'><img src='./images/partPage/mail.svg' alt='alt' style={{transform:'scale(0.7)'}}/></Grid>
                </Grid>
                <Grid item xs={12} className='centerStyle' style={{marginTop:'2%'}}>
                    <PageTitle identify = {this.props.id}/>
                </Grid>
            </Grid>
        );
    }
}
