import React,{ useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {StyledContainer, PayViewFont, OrderConfirmationDiv} from "./partPageStyle";
import Grid from '@material-ui/core/Grid';
import './commonStyle.css';
import { makeStyles } from '@material-ui/core/styles';
import PaymentCombo from "./component/PaymentCombo";
import TextField from '@material-ui/core/TextField';
import './commonStyle.css';
import Button from "@material-ui/core/Button";

const img ={
    borderRadius:'5%',transform:'scale(0.9,0.9)'
}

const centerStyled = {
    display:'flex',justifyContent:'center',marginTop:'3%'

}

const font_input_text = {
    display:'flex',justifyContent:'center',alignItems:'center'
}

const rightStyled = {
    display:'flex',justifyContent:'flex-end',marginTop:'3%'

}

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
}));
export default function Payment() {
    const classes = useStyles();
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
            <Container fixed style={{position:'absolute'}}>
                <Typography component="div" style={{ height: '100vh' }} className='stateTypography'>
                    <Grid container spacing={1} id='orderOnline'>
                        <Grid item xs={12} style={centerStyled}>
                            <a href={{}} style={{fontFamily: 'Roboto',fontStyle: 'normal', fontWeight: 'normal',fontSize:'200%',color:'#DD354D'}}>Payment</a>
                        </Grid>
                        <Grid item xs={4} sm={4} style={centerStyled}>
                            <Grid container spacing={1} id='orderOnline'>
                                <Grid item xs={12} sm={12} style={centerStyled}>
                                    <img src='./images/partPage/icon_paypal.png'/>
                                </Grid>
                                <Grid item xs={12} sm={12} style={centerStyled}>
                                    <img src='./images/partPage/Icon_recent.png'/>
                                </Grid>
                                <Grid item xs={12} sm={12} style={centerStyled}>
                                    <img src='./images/partPage/icon_payFm.png'/>
                                </Grid>
                                <Grid item xs={12} sm={12} style={centerStyled}>
                                    <img src='./images/partPage/icon_applePay.png'/>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={8} sm={8} style={centerStyled}>
                            <Grid container spacing={1} id='orderOnline'>
                                <Grid item xs={12} sm={12} style={centerStyled}>
                                    <div style={{alignSelf: 'baseline',display:'flex'}}>
                                        <img src='./images/partPage/icon_masterCard.png' style={{transform: 'scale(0.8)'}}/>
                                        <img src='./images/partPage/icon_maestro.png' style={{transform: 'scale(0.8)'}}/>
                                        <img src='./images/partPage/icon_visa.png' style={{transform: 'scale(0.8)'}}/>
                                        <img src='./images/partPage/icon_visa1.png' style={{transform: 'scale(0.8)'}}/>
                                    </div>
                                </Grid>
                                <Grid item xs={4} sm={4} style={font_input_text}>
                                    <PayViewFont>Card number</PayViewFont>
                                </Grid>
                                <Grid item xs={8} sm={8} style={font_input_text}>
                                    <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{color:'black',width:'80%'}}/>
                                </Grid>
                                <Grid item xs={4} sm={4} style={font_input_text}>
                                    <PayViewFont style={{}}>Valid Until</PayViewFont>
                                </Grid>
                                <Grid item xs={8} sm={8} style={font_input_text}>
                                    <div style={{width:'50%',textAlign:'center'}}><PaymentCombo/></div>
                                    <div style={{width:'50%',textAlign:'center'}}><PaymentCombo/></div>
                                </Grid>
                                <Grid item xs={4} sm={4} style={font_input_text}>
                                    <PayViewFont>CVV</PayViewFont>
                                </Grid>
                                <Grid item xs={8} sm={8} style={font_input_text}>
                                    <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{color:'black',width:'80%'}}/>
                                </Grid>
                                <Grid item xs={4} sm={4} style={font_input_text}>
                                    <PayViewFont>Card holder</PayViewFont>
                                </Grid>
                                <Grid item xs={8} sm={8} style={font_input_text}>
                                    <TextField id="outlined-basic" label="Outlined" variant="outlined" style={{color:'black',width:'80%'}}/>
                                </Grid>
                                <Grid item xs={4} sm={4} style={centerStyled}>
                                </Grid>
                                <Grid item xs={8} sm={8} style={font_input_text}>
                                    <Button variant="contained"  style={{borderRadius:'25px',backgroundColor:'#DD354D',color:'#FCD652',width:'50%'}}>
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
