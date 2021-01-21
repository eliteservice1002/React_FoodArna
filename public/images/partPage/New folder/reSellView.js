import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {StyledContainer, OpacityLayer, ButtonStyle} from "./partPageStyle";
import Grid from '@material-ui/core/Grid';
import './commonStyle.css';
import ChefInfo from "./component/ChefInfo";
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
        },
    },
}));

// const buttonStyle = {
//     fontFamily: 'Roboto', fontStyle: 'normal',fontWeight: 'normal',width:'70%',borderRadius:'20px',height:'150%',color:'#FCD652',backgroundColor:'#DD354D',fontSize:'200%'
// }


export default function ReSell() {
    const classes = useStyles();
        return (
            <StyledContainer>
                <OpacityLayer background='resell1'/>
                <OpacityLayer background='resell2'/>
                <Container fixed style={{position:'absolute'}}>
                    <Typography component="div" style={{ height: '100vh' }} >
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={6} style={{display:'flex',justifyContent:'center'}}>
                                <ButtonStyle style={{marginTop:'10%'}}>
                                    Re-Sell from older menu
                                </ButtonStyle>
                            </Grid>
                            <Grid item xs={12} sm={6} style={{display:'flex',justifyContent:'center'}}>
                                {/*<Button variant="contained" color="secondary" style={buttonStyle} className='reSellBTN'>*/}
                                {/*    Add a new dish*/}
                                {/*</Button>*/}
                                <ButtonStyle id = 'addNew' style={{marginTop:'10%'}}>
                                    Add a new dish
                                </ButtonStyle>
                            </Grid>
                            <Grid item xs={12} sm={4}></Grid>
                            <Grid item xs={12} sm={4}>
                                <ChefInfo id='profile2'/>
                            </Grid>
                            <Grid item xs={12} sm={4}></Grid>
                        </Grid>
                    </Typography>
                </Container>
            </StyledContainer>
        );
}
