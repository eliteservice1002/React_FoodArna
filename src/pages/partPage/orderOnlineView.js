import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { StyledContainer, OpacityLayer } from "./partPageStyle";
import Grid from '@material-ui/core/Grid';
import './commonStyle.css';
import { useHistory } from 'react-router-dom';
import MenuLists from "./component/menuLists";
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        position: 'absolute',
        "@media (max-width: 959px)": { minWidth: '100%' }
    }
})
const img = {
    borderRadius: '5%', transform: 'scale(0.9,0.9)'
}

const centerStyled = {
    display: 'flex', justifyContent: 'center', marginTop: '8%'
}

export default function OrderOnline() {
    const classes = useStyles();
    const history = useHistory();
    const gotocheflist = () => {
        history.push('/cheflist');
    }
    const gotofoodlist = () => {
        history.push('/onlinefoodlist');
    }
    return (
        <StyledContainer>
            <OpacityLayer background='orderOnline1' />
            <OpacityLayer background='orderOnline2' />
            <Container fixed className={classes.container}>
                <Typography component="div" style={{ height: '100vh' }} >
                    <Grid container spacing={1} >
                        <Grid item xs={12} style={centerStyled}>
                            <div onClick={() => { history.push('/') }}><img src='./images/brand.png' alt='alt' style={{ cursor: 'pointer', width: '100%' }} /></div>
                        </Grid>

                        <Grid item xs={12} sm={6} lg={6} style={centerStyled} onClick={gotocheflist}>
                            <MenuLists img='orderOnlinechef' />
                        </Grid>
                        <Grid item xs={12} sm={6} lg={6} style={centerStyled} onClick={gotofoodlist}>
                            <MenuLists img='orderOnlinefood' />
                        </Grid>
                    </Grid>
                </Typography>
            </Container>
        </StyledContainer>
    );

}
