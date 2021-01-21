import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { StyledContainer, OpacityLayer, OrderConfirmationDiv } from "./partPageStyle";
import Grid from '@material-ui/core/Grid';
import './commonStyle.css';
import { Constant } from './component/constant';
import Button from "@material-ui/core/Button";
import './commonStyle.css';
const img = {
    borderRadius: '5%', transform: 'scale(0.9,0.9)'
}

const centerStyled = {
    display: 'flex', justifyContent: 'center', marginTop: '3%'

}

export default function OrderConfirmation() {

    const [val, setVal] = React.useState({
        'tocas': '2 for 240 SEK',
        'tandoori_chicken': '3 for 210 SEK',
        'food_total': '450 SEK',
        'delivery_charge': '50 SEK',
        'order_total': '500 SEK',
        'tax_vat': '27 SEK',
        'grand_total': '527 SEK',
    });
    return (
        <StyledContainer>
            <OpacityLayer background='orderConfirm' />
            <Container fixed style={{ position: 'absolute' }}>
                <Typography component="div" style={{ height: '100vh' }} className='stateTypography'>
                    <Grid container spacing={1} id='orderOnline'>
                        <Grid item xs={12} style={centerStyled}>
                            <a href={{}} style={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'normal', fontSize: '200%', color: '#DD354D' }}>Order Confirmation</a>
                        </Grid>
                        <Grid item xs={3} style={centerStyled}>
                            <div style={{ display: 'block', textAlign: 'center' }}>
                                {
                                    Constant['orderConfirmation'].src.map((val, index) => {
                                        if (index >= 0 && index < 3)
                                            return (
                                                <img src={val} alt='alt' style={{ borderRadius: '25px' }} key={index} />
                                            );
                                    })
                                }
                            </div>
                        </Grid>
                        <Grid item xs={6} style={centerStyled} >
                            <OrderConfirmationDiv>
                                <div style={{ display: 'block' }}>
                                    <div>1. Tacos:</div>
                                    <div>2. Tandoori Chicken:</div>
                                    <div style={{ marginTop: '30%' }}>Food Total:</div>
                                    <div style={{ marginTop: '30%' }}>Delivery Charges:</div>
                                    <div>Order Total:</div>
                                    <div style={{ marginTop: '30%' }}>Tax VAT%:</div>
                                    <div style={{ marginTop: '30%' }}>Grand Total:</div>
                                </div>
                                <div>
                                    <div>{val['tocas']}</div>
                                    <div>{val['tandoori_chicken']}</div>
                                    <div style={{ marginTop: '45%' }}>{val['food_total']}</div>
                                    <div style={{ marginTop: '46%' }}>{val['delivery_charge']}</div>
                                    <div>{val['order_total']}</div>
                                    <div style={{ marginTop: '46%' }}>{val['tax_vat']}</div>
                                    <div style={{ marginTop: '46%' }}>{val['grand_total']}</div>
                                </div>
                            </OrderConfirmationDiv>
                        </Grid>
                        <Grid item xs={3} style={centerStyled}>
                            <div style={{ display: 'block', textAlign: 'center' }}>
                                {
                                    Constant['orderConfirmation'].src.map((val, index) => {
                                        if (index >= 3 && index < 6)
                                            return (
                                                <img src={val} alt='alt' style={{ borderRadius: '25px' }} key={index} />
                                            );
                                    })
                                }
                            </div>
                        </Grid>
                        <Grid item xs={12} sm style={centerStyled}>
                            <Button variant="contained" style={{ borderRadius: '25px', backgroundColor: '#DD354D', color: '#FCD652' }}>
                                Confirm Order
                                </Button>
                        </Grid>
                    </Grid>
                </Typography>
            </Container>
        </StyledContainer>
    );
}
