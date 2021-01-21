import React, {useEffect, useState} from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {StyledContainer ,StyledComplainFont,DeliveryProgressBTN} from "./partPageStyle";
import Grid from '@material-ui/core/Grid';
import './commonStyle.css';
import './commonStyle.css';
import GMap from './component/googleMap';
import {makeStyles} from "@material-ui/core/styles";


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
    display:'flex',justifyContent:'center',marginTop:'3%'

}



export default function Thankyou(props) {
    const [loadMap, setLoadMap] = useState(false);
    useEffect(() => {
        loadGoogleMapScript(() => {
            setLoadMap(true)
        });
    }, []);
    return (
        <StyledContainer>
            <Container fixed style={{position:'absolute'}}>
                <Typography component="div" style={{ height: '100vh' }} className='stateTypography'>
                    <Grid container spacing={1} id='orderOnline'>
                        <Grid item xs={12} style={centerStyled}>
                            <a href={{}} style={{fontFamily: 'Roboto',fontStyle: 'normal', fontWeight: 'normal',fontSize:'200%',color:'#DD354D'}}>Thank You!</a>
                        </Grid>
                        <Grid item xs={12} style={centerStyled}>
                            {/*<Button variant="contained"  className="deliveryProgressBTN" style={{borderRadius: '25px',backgroundColor: '#DD354D',color: '#FCD652',fontSize: '150%'}}>*/}
                            {/*    Your delivery is in progress...*/}
                            {/*</Button>*/}
                            <DeliveryProgressBTN>
                                Your delivery is in progress...
                            </DeliveryProgressBTN>
                        </Grid>

                        <Grid item xs={12} sm={5} style={centerStyled}>
                            <div id="map">{!loadMap ? <div>Loading...</div> : <GMap id='thankyou'/>}</div>
                        </Grid>
                        <Grid item xs={12} sm={7} style={centerStyled}>
                            <StyledComplainFont>
                                <div>Check the status of my order</div>
                                <div>Follow these steps in the Uber Eats app:</div>
                                <div>1. Tap the receipt icon on the bottom menu bar</div>
                                <div>2. Tap "Upcoming" to select your current order</div>
                                <div>3. Tap "Track" to view the status</div>
                                <div>4. Look for the description to understand its status</div>
                                <div>5. Once a delivery partner is selected, a map appears showing their location</div>
                                <div>6. Track your delivery partner's progress as they make their way to you</div>
                            </StyledComplainFont>
                        </Grid>
                    </Grid>
                </Typography>
            </Container>
        </StyledContainer>
    );
}
