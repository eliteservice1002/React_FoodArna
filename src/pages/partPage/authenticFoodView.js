import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {StyledContainer, OpacityLayer, BetH} from "./partPageStyle";
import Grid from '@material-ui/core/Grid';
import './commonStyle.css';

import SearchTool from './component/SearchTool';
import {Constant} from "./component/constant";

const img ={
    borderRadius:'5%',transform:'scale(0.9,0.9)',width:'100%'
}

export default function AuthenticFood() {
        return (
            <StyledContainer>
                <OpacityLayer background='authenticFood'/>
                <Container fixed>
                    <Typography component="div" style={{height: '100vh' }} >
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12}>
                                <SearchTool id='authenticFood'/>
                            </Grid>
                        </Grid>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm style={{textAlign:'center'}}>
                                <img src={Constant['authenticFood'].src[0]} style={img} alt='alt'/>
                                <BetH>Vietnamese Food</BetH>
                            </Grid>
                            <Grid item xs={12} sm style={{textAlign:'center'}} className='container'>
                                <img src={Constant['authenticFood'].src[1]} style={img} alt='alt'/>
                                <img src={Constant['authenticFood'].src[2]} style={img} alt='alt'/>
                            </Grid>
                            <Grid item xs={12} sm style={{textAlign:'center'}}  className='container'>
                                <img src={Constant['authenticFood'].src[3]} style={img} alt='alt'/>
                                <img src={Constant['authenticFood'].src[4]} style={img} alt='alt'/>
                            </Grid>
                            <Grid item xs={12} sm style={{textAlign:'center'}}  className='container'>
                                <img src={Constant['authenticFood'].src[5]} style={img} alt='alt'/>
                                <img src={Constant['authenticFood'].src[6]} style={img} alt='alt'/>
                            </Grid>
                        </Grid>
                    </Typography>
                </Container>
            </StyledContainer>
        );
}
