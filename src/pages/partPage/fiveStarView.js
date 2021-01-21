import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {StyledContainer, OpacityLayer} from "./partPageStyle";
import Grid from '@material-ui/core/Grid';
import './commonStyle.css';
import SearchTool from './component/SearchTool';
import {Constant} from "./component/constant";

const img ={
    borderRadius:'5%',transform:'scale(0.9,0.9)',width:'100%'
}



export default function FiveStar() {

        return (
            <StyledContainer>
                <OpacityLayer background='fiveStar'/>
                <Container fixed style={{position:'absolute'}}>
                    <Typography component="div" style={{ height: '100vh' }} >
                        <SearchTool id='fiveStar'/>
                        <Grid container spacing={3}>
                            <Grid item xs={6} sm style={{width:'25%'}}>
                                <img src={Constant['fiveStar'].src[0]} style={img} alt='alt'/>
                                <img src={Constant['fiveStar'].src[1]} style={img} alt='alt'/>
                                <img src={Constant['fiveStar'].src[2]} style={img} alt='alt'/>
                            </Grid>
                            <Grid item xs={6} sm style={{width:'25%'}}>
                                <img src={Constant['fiveStar'].src[3]} style={img} alt='alt'/>
                                <img src={Constant['fiveStar'].src[4]} style={img} alt='alt'/>
                                <img src={Constant['fiveStar'].src[5]} style={img} alt='alt'/>
                            </Grid>
                            <Grid item xs={6} sm style={{width:'25%'}}>
                                <img src={Constant['fiveStar'].src[6]} style={img} alt='alt'/>
                                <img src={Constant['fiveStar'].src[7]} style={img} alt='alt'/>
                                <img src={Constant['fiveStar'].src[8]} style={img} alt='alt'/>
                            </Grid>
                            <Grid item xs={6} sm style={{width:'25%'}}>
                                <img src={Constant['fiveStar'].src[9]} style={img} alt='alt'/>
                                <img src={Constant['fiveStar'].src[10]} style={img} alt='alt'/>
                                <img src={Constant['fiveStar'].src[11]} style={img} alt='alt'/>
                            </Grid>
                        </Grid>
                    </Typography>
                </Container>
            </StyledContainer>
        );

}
