import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {StyledContainer, TitleFont, ContentFont,GoogleMapSearchResultErrorFont1,GoogleMapSearchResultErrorFont2,RadioContainerStyledDiv, StyledSearchDiv, SearchResultStyledDiv} from "./partPageStyle";
import Grid from '@material-ui/core/Grid';
import './commonStyle.css';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import { useState, useEffect } from 'react';
import GMap from './component/googleMap';
import DeliveryLocationInfo from './component/deliveryLocationRadio';
import DeliveryLocationFormControl from './component/deliveryLocationFormControl';
import LocationDeliveryLoctionCombo from './component/locationDeliveryLoctionCombo';


const GOOGLE_MAP_API_KEY = 'AIzaSyDbAz1XXxDoKSU2nZXec89rcHPxgkvVoiw';
const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

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

export default function DeliveryLocation() {
    const [loadMap, setLoadMap] = useState(false);
    // const classes = useStyles();
    const [value, setValue] = React.useState('female');
    useEffect(() => {
        loadGoogleMapScript(() => {
            setLoadMap(true)
        });
    }, []);
    const handleChange = (event) => {
        setValue(event.target.value);
    };
        return (
            <StyledContainer>
                <Container fixed style={{position:'absolute'}}>
                    <Typography component="div" style={{ height: '100vh' }} className='stateTypography'>
                        <Grid container spacing={1} id='orderOnline'>
                            <Grid item xs={12} sm={12} style={centerStyled}>
                                <a href={{}} style={{fontFamily: 'Roboto',fontStyle: 'normal', fontWeight: 'normal',fontSize:'200%',color:'#dd354d'}}>Location of Delivery</a>
                            </Grid>
                            <Grid item xs={6} sm={6} style={centerStyled} className='rightBorder'>
                                <div style={{display:'block'}}>
                                    <div id="map">{!loadMap ? <div>Loading...</div> : <GMap id='deliverylocation'/>}</div>
                                    <div style={{color:'black',marginTop:'10%'}}>
                                        <DeliveryLocationInfo/>
                                    </div>
                                    <RadioContainerStyledDiv><DeliveryLocationFormControl/></RadioContainerStyledDiv>
                                </div>
                            </Grid>
                            <Grid item xs={6} sm={6} style={centerStyled}>
                                <div style={{display:'block',color:'black'}}>
                                    <TitleFont style={{textAlign:'center'}}>Change Address</TitleFont>
                                    <StyledSearchDiv>
                                        <LocationDeliveryLoctionCombo/>

                                        <SearchResultStyledDiv>
                                            <GoogleMapSearchResultErrorFont1>Google map cannot find your current location.</GoogleMapSearchResultErrorFont1>
                                            <GoogleMapSearchResultErrorFont2>Try Google search instead</GoogleMapSearchResultErrorFont2>
                                            <GoogleMapSearchResultErrorFont2>Add a missing place</GoogleMapSearchResultErrorFont2>
                                        </SearchResultStyledDiv>


                                    </StyledSearchDiv>
                                    <div  style={{marginTop:'12%'}}></div>
                                    <DeliveryLocationInfo/>
                                    <RadioContainerStyledDiv><DeliveryLocationFormControl/></RadioContainerStyledDiv>

                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} style={centerStyled}>
                                <div>
                                    <Button variant="contained" style={{color:'#FCD652',backgroundColor:'#DD354D',fontFamily: 'Roboto',fontStyle: 'normal', fontWeight: 'normal',borderRadius:'49px',fontSize:'150%'}}>
                                        Proceed to Payment
                                    </Button>
                                </div>

                            </Grid>
                        </Grid>
                    </Typography>
                </Container>
            </StyledContainer>
        );
}
