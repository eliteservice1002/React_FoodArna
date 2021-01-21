import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles';
import { ThemeProvider } from "@material-ui/styles";
import {
    makeStyles,
} from '@material-ui/core/styles';
const theme = createMuiTheme();

theme.typography.h3 = {
    textAlign: 'center',
    fontSize: '1.2rem',
    '@media (min-width:600px)': {
        fontSize: '1.5rem',
    },
    [theme.breakpoints.up('md')]: {
        fontSize: '2.5rem',
    },
};
const useStyles = makeStyles({
    oneStopTitle: {
        display: 'flex', 
        flexWrap: 'wrap', 
        justifyContent: 'space-around',
        bottom: '0.3vh',
        marginTop:'10vh',
        '@media (min-height: 1024px)':{
            marginTop:'20vh'
        }
    },
    text: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '2.1vW',
        lineHeight: '2.2VW',
        color: '#FCD652'
    },
});
export default function OneStop() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
            {/* <Typography variant="h3" className={classes.oneStopTitle}>{constants['oneStop']}</Typography> */}
            <div className={classes.oneStopTitle}>
                <div className={classes.text}>
                    <div>SHARE FOOD</div>
                    <div>SELL FOOD</div>
                    <div>SERVE FOOD</div>
                </div>
                <div>
                    <img style={{height: '6vh', width:'6vw'}} src="./images/arrow_left.png" alt="arrow_left.png" />
                </div>
                <div className={classes.text}>
                    <div>
                        “Come fall in love…….
                    </div>
                    <div>
                        …….Swipe and have fun”
                    </div>
                </div>
                <div>
                    <img style={{height: '6vh', width:'6vw'}} src="./images/arrow_right.png" alt="arrow_right.png" />
                </div>
                <div className={classes.text}>
                    <div>MEET THE CHEF</div>
                    <div>LEARN FROM THE CHEF</div>
                    <div>DINE WITH THE CHEF</div>
                </div>
            </div>
        </ThemeProvider>
    );
}