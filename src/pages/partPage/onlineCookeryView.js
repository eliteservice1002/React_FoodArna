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




export default function OnlineCookery() {

        return (
            <StyledContainer>
                <OpacityLayer background='onlineCookery'/>
                <Container fixed style={{position:'absolute'}}>
                    <Typography component="div" style={{ height: '100vh' }} >
                        <SearchTool id='onlineCookery'/>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={3}>
                                <img src={Constant['onlineCookery'].src[0]} style={img} alt='alt'/>
                                <img src={Constant['onlineCookery'].src[1]} style={img} alt='alt'/>
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <img src={Constant['onlineCookery'].src[2]} style={img} alt='alt'/>
                            </Grid>
                            <Grid item xs={12} sm={6}>
                                <img src={Constant['onlineCookery'].src[3]} style={img} alt='alt'/>
                                <img src={Constant['onlineCookery'].src[4]} style={img} alt='alt'/>
                            </Grid>
                        </Grid>


                    </Typography>
                </Container>
            </StyledContainer>
        );

}
