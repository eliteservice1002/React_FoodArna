import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {StyledContainer, OpacityLayer} from "./partPageStyle";
import Grid from '@material-ui/core/Grid';
import './commonStyle.css';
import StatusBTN from './component/StatusBTN';
import OrderBTN from "./component/OrderBTN";
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
                <OpacityLayer background='orderStatus'/>
                <Container fixed style={{position:'absolute'}}>
                    <Typography component="div" style={{ height: '100vh' }} className='stateTypography'>
                        <Grid container spacing={1} id='orderOnline'>
                            <Grid item xs={12} style={centerStyled}>
                                <a href={{}} style={{fontFamily: 'Roboto',fontStyle: 'normal', fontWeight: 'normal',fontSize:'200%',color:'#DD354D'}}>ORDER STATUS</a>
                            </Grid>
                            <Grid item xs={12} style={centerStyled}>
                                <StatusBTN state='chef1Status'/>
                            </Grid>
                            <Grid item xs={12} style={centerStyled}>
                                <StatusBTN state='chef2Status'/>
                            </Grid>
                            <Grid item xs={12} sm style={centerStyled}>
                                <OrderBTN state='delivery'/>
                            </Grid>
                            <Grid item xs={12} sm style={centerStyled}>
                                <OrderBTN state='pick'/>
                            </Grid>
                        </Grid>
                    </Typography>
                </Container>
            </StyledContainer>
        );
    }
}
