import React from 'react';
import {TotalContainer, ImageContainer, ImageLabel} from "./style";
import { createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {ThemeProvider} from "@material-ui/styles";
import {
    makeStyles,
} from '@material-ui/core/styles';


const theme = createMuiTheme();
const useStyles = makeStyles((theme) => ({
    paper: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '32px',
        lineHeight: '37px',
        color: '#FCD652',
        '@media(max-width:959px)':{
            fontSize: '21px',
            lineHeight:'30px'
        },
        '@media(min-width:960px)':{
            fontSize: '24px',
            lineHeight:'25px'
        },
        '@media(min-width:1180px)':{
            fontSize: '29px',
            lineHeight:'30px'
        }
    }
}));
export default function ImageAndLabel(props) {
    const classes=useStyles();
    return(
        <TotalContainer>
            <ImageContainer src={props.src}>
            </ImageContainer>
            <ImageLabel>
                <ThemeProvider theme={theme}>
                    <Typography className={classes.paper}>{props.text}</Typography>
                </ThemeProvider>
            </ImageLabel>
        </TotalContainer>
    );
}