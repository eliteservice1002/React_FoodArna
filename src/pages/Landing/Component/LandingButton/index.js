import React from 'react';
import {ButtonStyle, ButtonText} from './style';
import Button from "@material-ui/core/Button";
import { withStyles } from "@material-ui/core/styles";

const styles = () => ({
    button: {
        margin: 50,
        padding: 10,
        width: 180,
        fontSize: 20
    }
});

export default function LandingButton(props) {
    const { classes, children } = props;
    return(
        <Button
            style={{borderRadius:'25px',backgroundColor:'#ffffff',color:'#dd354d',border:'2px solid #dd354d', width:'160px', height:'40px', fontSize:'23px'}}
            type="submit"
            fullWidth
            variant="contained"
            color="primary"

        >
            {props.text}
        </Button>
    );
}