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

export default class fiveStarView extends React.Component {
    render() {
        return (
            <StyledContainer>
                <OpacityLayer background='tryCook'/>
                <Container fixed style={{position:'absolute'}}>
                    <Typography component="div" style={{ height: '100vh' }} >
                        <SearchTool id='tryCook'/>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm >
                                <img src={Constant['tryCook'].src[0]} style={img} alt='alt'/>
                                <img src={Constant['tryCook'].src[1]} style={img} alt='alt'/>
                            </Grid>
                            <Grid item xs={12} sm>
                                <img src={Constant['tryCook'].src[2]} style={img} alt='alt'/>
                                <img src={Constant['tryCook'].src[3]} style={img} alt='alt'/>
                                <img src={Constant['tryCook'].src[4]} style={img} alt='alt'/>
                            </Grid>
                            <Grid item xs={12} sm>
                                <img src={Constant['tryCook'].src[5]} style={img} alt='alt'/>
                                <img src={Constant['tryCook'].src[6]} style={img} alt='alt'/>
                            </Grid>
                        </Grid>
                    </Typography>
                </Container>
            </StyledContainer>
        );
    }
}
