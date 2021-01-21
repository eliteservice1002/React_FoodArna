import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {StyledContainer, OpacityLayer} from "./partPageStyle";
import Grid from '@material-ui/core/Grid';
import './commonStyle.css';

import MenuLists from "./component/menuLists";

const img ={
    borderRadius:'5%',transform:'scale(0.9,0.9)'
}

const centerStyled = {
    display:'flex',justifyContent:'center',marginTop:'8%'
}

export default class fiveStarView extends React.Component {
    render() {
        return (
            <StyledContainer>
                <OpacityLayer background='orderOnline1'/>
                <OpacityLayer background='orderOnline2'/>
                <Container fixed style={{position:'absolute'}}>
                    <Typography component="div" style={{ height: '100vh' }} >
                        <Grid container spacing={1} id='orderOnline'>
                            <Grid item xs={12} style={centerStyled}>
                                <img src='./images/brand.png' alt='alt'/>
                            </Grid>
                            <Grid item xs></Grid>
                            <Grid item xs style={centerStyled}>
                                <MenuLists img='orderOnline'/>
                            </Grid>
                            <Grid item xs></Grid>
                        </Grid>
                    </Typography>
                </Container>
            </StyledContainer>
        );
    }
}
