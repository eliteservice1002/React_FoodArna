import React from 'react';
import { LandTitleContainer1, LandTitleText1 } from "./style";
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
        lineHeight: '49px',
        textDecoratioLine: 'underline',
        color: '#FCD652',
        '@media (max-width: 768px)':{
            fontSize:'5.3vw'
        },
        '@media (min-width:769px)':{
            fontSize:'3.7vw'
        },
        '@media (min-width:1024px)':{
            fontSize:'3.5vw'
        },
        '@media (min-width:1280px)':{
            fontSize:'2.7vw'
        }
    }
}));

export default function LandTitle(props) {
    const classes = useStyles();
    return (
        <LandTitleContainer1 color={props.color}>
            <LandTitleText1 fontColor={props.fontColor} outline={props.outline}>
                <ThemeProvider theme={theme}>
                    <Typography className={classes.paper}>{props.text}</Typography>
                </ThemeProvider>
            </LandTitleText1>
        </LandTitleContainer1>
    );
}