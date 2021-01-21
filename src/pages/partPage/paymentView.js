import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { StyledContainer, PayViewFont } from "./partPageStyle";
import Grid from '@material-ui/core/Grid';
import './commonStyle.css';
import PaymentCombo from "./component/PaymentCombo";
import TextField from '@material-ui/core/TextField';
import './commonStyle.css';
import Button from "@material-ui/core/Button";
import Snack from './component/snackbar';
import axios from 'axios';
import { useHistory, useLocation } from 'react-router-dom';
const img = {
    borderRadius: '5%', transform: 'scale(0.9,0.9)'
}

const centerStyled = {
    display: 'flex', justifyContent: 'center', marginTop: '3%'

}

const font_input_text = {
    display: 'flex', justifyContent: 'center', alignItems: 'center'
}


export default function Payment() {
    const history = useHistory();
    const location = useLocation();

    const paying = () => {
        location.state.order_ids.map((val) => {
            const data1 = {
                order_id: val,
                pay_state: true
            };
            axios.put('http://localhost/api/orders/update', data1)
        })
        document.getElementById('snack_success').click();
    }

    return (
        <StyledContainer>
            <Snack alert={"payment success!"} />
            <Container fixed style={{ position: 'absolute' }}>
                <Typography component="div" style={{ height: '100vh' }} className='stateTypography'>
                    <Grid container spacing={1} id='orderOnline'>
                        <Grid item xs={12} style={centerStyled}>
                            <div onClick={() => { history.push('/') }} style={{ fontFamily: 'Roboto', fontStyle: 'normal', cursor: 'pointer', textDecoration: 'underline', fontWeight: 'normal', fontSize: '200%', color: '#DD354D' }}>Payment</div>
                        </Grid>
                        <Grid item xs={4} sm={4} style={centerStyled}>
                            <Grid container spacing={1} id='orderOnline'>
                                <Grid item xs={12} sm={12} style={centerStyled}>
                                    <img src='./images/partPage/icon_paypal.png' alt="alt" />
                                </Grid>
                                <Grid item xs={12} sm={12} style={centerStyled}>
                                    <img src='./images/partPage/Icon_recent.png' alt="alt" />
                                </Grid>
                                <Grid item xs={12} sm={12} style={centerStyled}>
                                    <img src='./images/partPage/icon_payFm.png' alt="alt" />
                                </Grid>
                                <Grid item xs={12} sm={12} style={centerStyled}>
                                    <img src='./images/partPage/icon_applePay.png' alt="alt" />
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={8} sm={8} style={centerStyled}>
                            <Grid container spacing={1} id='orderOnline'>
                                <Grid item xs={12} sm={12} style={centerStyled}>
                                    <div style={{ alignSelf: 'baseline', display: 'flex' }}>
                                        <img src='./images/partPage/icon_masterCard.png' style={{ transform: 'scale(0.8)' }} alt="alt" />
                                        <img src='./images/partPage/icon_maestro.png' style={{ transform: 'scale(0.8)' }} alt="alt" />
                                        <img src='./images/partPage/icon_visa.png' style={{ transform: 'scale(0.8)' }} alt="alt" />
                                        <img src='./images/partPage/icon_visa1.png' style={{ transform: 'scale(0.8)' }} alt="alt" />
                                    </div>
                                </Grid>
                                <Grid item xs={4} sm={4} style={font_input_text}>
                                    <PayViewFont>Card number</PayViewFont>
                                </Grid>
                                <Grid item xs={8} sm={8} style={font_input_text}>
                                    <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{ color: '#464646', width: '80%' }} />
                                </Grid>
                                <Grid item xs={4} sm={4} style={font_input_text}>
                                    <PayViewFont style={{}}>Valid Until</PayViewFont>
                                </Grid>
                                <Grid item xs={8} sm={8} style={font_input_text}>
                                    <div style={{ width: '50%', textAlign: 'center' }}><PaymentCombo /></div>
                                    <div style={{ width: '50%', textAlign: 'center' }}><PaymentCombo /></div>
                                </Grid>
                                <Grid item xs={4} sm={4} style={font_input_text}>
                                    <PayViewFont>CVV</PayViewFont>
                                </Grid>
                                <Grid item xs={8} sm={8} style={font_input_text}>
                                    <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{ color: '#464646', width: '80%' }} />
                                </Grid>
                                <Grid item xs={4} sm={4} style={font_input_text}>
                                    <PayViewFont>Card holder</PayViewFont>
                                </Grid>
                                <Grid item xs={8} sm={8} style={font_input_text}>
                                    <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{ color: '#464646', width: '80%' }} />
                                </Grid>
                                <Grid item xs={4} sm={4} style={centerStyled}>
                                </Grid>
                                <Grid item xs={8} sm={8} style={font_input_text}>
                                    <Button variant="contained" style={{ borderRadius: '25px', backgroundColor: '#DD354D', color: '#fff', width: '50%', fontWeight: 'bold' }} onClick={paying}>
                                        Pay
                                    </Button>
                                </Grid>
                            </Grid>
                        </Grid>

                    </Grid>
                </Typography>
            </Container>
        </StyledContainer>
    );
}
