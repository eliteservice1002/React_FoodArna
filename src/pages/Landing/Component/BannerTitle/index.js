import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import { constants } from '../../Utility/constant';
import { ThemeProvider } from "@material-ui/styles";
import {
    makeStyles,
} from '@material-ui/core/styles';
const theme = createMuiTheme();

theme.typography.h3 = {
    textAlign: 'center',
    fontSize: '3vh'
};
const useStyles = makeStyles({
    bannerTitle: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        color: '#FCD652',
        marginTop: '15vh',
        textAlign: 'center',
        fontSize:'1.3em',
        padding:'0 1vw',
        '@media (max-width:1024px)':{
            fontSize: '0.8em'
        }
    },
});
export default function BannerTitle() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            <Typography variant="h3" className={classes.bannerTitle}>{constants['bannerTitle']}</Typography>
        </ThemeProvider>
    );
}