import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { StyledContainer, OpacityLayer } from "./partPageStyle";
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';

import './commonStyle.css';
import MenuLists from './component/menuLists';
import { makeStyles } from '@material-ui/core';
const useStyle = makeStyles({
    fixed: {
        position: 'absolute',
        "@media (max-width: 959px)": { minWidth: '100%' }
    }
})

export default function SellMenu() {
    const classes = useStyle();
    const history = useHistory();
    const gotoresell = (event) => {
        history.push('/orderStat');
    };
    const gotobrowse = () => {
        history.push('/browse');
    }
    const gotoorderStat = () => {
        history.push('/resell');
    }
    return (
        <StyledContainer>
            <OpacityLayer background='mainmenu' />
            <Container fixed className={classes.fixed}>
                <Typography component="div" style={{ height: '100vh' }} >
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} className='centerStyle' id='mainMenuGrid'>
                            <div><img src='./images/brand.png' alt='no png' style={{ width: '470px', cursor: 'pointer' }} id='logoImg' onClick={() => { history.push('/') }} /></div>
                        </Grid>
                        <Grid item xs={12} sm={6} className='centerStyle' onClick={gotoorderStat}>
                            <MenuLists sell='list1' />
                        </Grid>
                        <Grid item xs={12} sm={6} className='centerStyle' onClick={gotoresell}>
                            <MenuLists sell='list2' />
                        </Grid>
                        <Grid item xs={12} sm={6} className='centerStyle'>
                            <MenuLists sell='list3' />
                        </Grid>
                        <Grid item xs={12} sm={6} className='centerStyle' onClick={gotobrowse}>
                            <MenuLists sell='list4' />
                        </Grid>
                    </Grid>
                </Typography>
            </Container>
        </StyledContainer>
    );

}
