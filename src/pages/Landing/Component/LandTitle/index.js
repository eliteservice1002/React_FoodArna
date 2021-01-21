import React from 'react';
import { LandTitleContainer, LandTitleText } from "./style";
import { createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { ThemeProvider } from "@material-ui/styles";
import {
    makeStyles,
} from '@material-ui/core/styles';

const theme = createMuiTheme();



const useStyles = makeStyles((theme) => ({
    paper: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '1.8vw',
        lineHeight: '2.3vw',
        textDecoratioLine: 'underline',
        color: ' rgba(221,53,77,1)',
        '@media(max-width:1279px)':{
            fontSize:'2.8vw',
            lineHeight:'3.5vw'
        },
        
    },
    paper1: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '1.7vw',
        lineHeight: '47px',
        textDecoratioLine: 'underline',
        color: '#464646'
    }
}));

export default function LandTitle(props) {
    const classes=useStyles();
    return (
        <LandTitleContainer color={props.color}>
            <LandTitleText fontColor={props.fontColor} outline={props.outline}>
                <ThemeProvider theme={theme}>
                    <Typography className={classes.paper}>{props.text}</Typography>
                    {/* <Typography className={classes.paper1}>{props.text1}</Typography> */}
                </ThemeProvider>
            </LandTitleText>
        </LandTitleContainer>
    );
}