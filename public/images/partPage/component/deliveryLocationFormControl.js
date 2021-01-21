import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Radio from "@material-ui/core/Radio";
import FormControl from "@material-ui/core/FormControl";
import React, {useEffect, useState} from "react";
import {makeStyles} from "@material-ui/core/styles";

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

const fontStyle = {
    fontFamily: 'Roboto',
    fontStyle: 'normal',
    fontWeight: 'normal',
    justifyContent:'center',
    fontSize: '100%'
}

export default function DeliveryLocationFormControl() {
    const [loadMap, setLoadMap] = useState(false);
    const classes = useStyles();
    const [value, setValue] = React.useState('female');
    useEffect(() => {
        loadGoogleMapScript(() => {
            setLoadMap(true)
        });
    }, []);
    const handleChange = (event) => {
        setValue(event.target.value);
    };
    return(
        <FormControl component="fieldset"  style={{color:'black',width: '100%',height:'25%',borderRadius: '10%'}}>
            <RadioGroup aria-label="" name="gender1" value={value} onChange={handleChange}>
                <FormControlLabel value="Leave at door" control={<Radio />} label="Leave at door" style={fontStyle}/>
                <FormControlLabel value="Meet at door" control={<Radio />} label="Meet at door" style={fontStyle}/>
                <FormControlLabel value="Meet Outside" control={<Radio />} label="Meet Outside" style={fontStyle}/>
            </RadioGroup>
        </FormControl>
    );

}
