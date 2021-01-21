import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { StyledContainer, TitleFont, GoogleMapSearchResultErrorFont1, GoogleMapSearchResultErrorFont2, RadioContainerStyledDiv } from "./partPageStyle";
import Grid from '@material-ui/core/Grid';
import './commonStyle.css';
import Button from '@material-ui/core/Button';
import { useState, useEffect } from 'react';
import GMap from './component/googleMap';
import DeliveryLocationInfo from './component/deliveryLocationRadio';
import DeliveryLocationFormControl from './component/deliveryLocationFormControl';
import LocationDeliveryLoctionCombo from './component/locationDeliveryLoctionCombo';


const GOOGLE_MAP_API_KEY = 'AIzaSyDbAz1XXxDoKSU2nZXec89rcHPxgkvVoiw';

const loadGoogleMapScript = (callback) => {
    if (typeof window.google === 'object' && typeof window.google.maps === 'object') {
        callback();
    } else {
        const googleMapScript = document.createElement("script");
        googleMapScript.src = `https://maps.googleapis.com/maps/api/js?key=${GOOGLE_MAP_API_KEY}`;
        window.document.body.appendChild(googleMapScript);
        googleMapScript.addEventListener("load", callback);
    }
}


const centerStyled = {
    display: 'flex', justifyContent: 'center', marginTop: '3%'
}

export default function DeliveryLocation() {
    const [loadMap, setLoadMap] = useState(false);
    useEffect(() => {
        loadGoogleMapScript(() => {
            setLoadMap(true)
        });
    }, []);
    return (
        <StyledContainer>
            <Container fixed style={{ position: 'absolute' }}>
                <Typography component="div" style={{ height: '100vh' }} className='stateTypography'>
                    <Grid container spacing={1} id='orderOnline'>
                        <Grid item xs={12} style={centerStyled}>
                            <a href={{}} style={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'normal', fontSize: '200%', color: '#dd354d' }}>Location of Delivery</a>
                        </Grid>
                        <Grid item xs={12} sm={6} style={centerStyled} className='rightBorder'>
                            <div style={{ display: 'block' }}>
                                {/* <div id="map">{!loadMap ? <div>Loading...</div> : <GMap id='deliverylocation'/>}</div> */}
                                <div id="map">{!loadMap ? <div>Loading...</div> : <GMap id='thankyou' />}</div>
                                <div style={{ color: '#464646', marginTop: '10%' }}>
                                    <DeliveryLocationInfo />
                                </div>
                                <RadioContainerStyledDiv><DeliveryLocationFormControl /></RadioContainerStyledDiv>
                            </div>
                        </Grid>
                        <Grid item xs={12} sm={6} style={centerStyled}>
                            <div style={{ display: 'block', color: '#464646' }}>
                                <TitleFont style={{ textAlign: 'center' }}>Change Address</TitleFont>
                                <div style={{ border: '1px solid black', width: '300px', height: '200px', borderRadius: '15px' }}>
                                    <LocationDeliveryLoctionCombo />
                                    <div style={{ padding: '15px' }}>
                                        <GoogleMapSearchResultErrorFont1>Google map cannot find your current location.</GoogleMapSearchResultErrorFont1>
                                        <GoogleMapSearchResultErrorFont2>Try Google search instead</GoogleMapSearchResultErrorFont2>
                                        <GoogleMapSearchResultErrorFont2>Add a missing place</GoogleMapSearchResultErrorFont2>
                                    </div>

                                </div>
                                <div style={{ marginTop: '12%' }}></div>
                                <DeliveryLocationInfo />
                                <RadioContainerStyledDiv><DeliveryLocationFormControl /></RadioContainerStyledDiv>

                            </div>
                        </Grid>
                        <Grid item xs={12} sm style={centerStyled}>
                            <Button variant="contained" style={{ color: '#FCD652', backgroundColor: '#DD354D', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'normal', borderRadius: '49px', fontSize: '150%' }}>
                                Proceed to Payment
                                </Button>
                        </Grid>
                    </Grid>
                </Typography>
            </Container>
        </StyledContainer>
    );
}
