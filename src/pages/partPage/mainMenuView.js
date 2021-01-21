import React from 'react';
// import { useHistory } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { StyledContainer, OpacityLayer } from "./partPageStyle";
import Grid from '@material-ui/core/Grid';
import './commonStyle.css';
import MenuLists from './component/menuLists';
import { useHistory } from 'react-router-dom';


export default function MainMenu() {

    const history = useHistory();
    const gotoorderonline = () => {
        history.push('/orderOnline');
    }

    return (
        <StyledContainer>
            <OpacityLayer background='mainmenu' />
            <Container fixed style={{ position: 'absolute', height: '100vh' }}>
                <Typography component="div" style={{ height: '100vh' }} >
                    <Grid container spacing={3}>
                        <Grid item xs={12} sm={12} className='centerStyle' id='mainMenuGrid'>
                            <div onClick={() => { history.push('/') }}><img src='./images/brand.png' alt='no png' style={{ width: '470px', cursor: 'pointer' }} id='logoImg' /></div>
                        </Grid>
                        <Grid item xs={12} sm={6} className='centerStyle' onClick={gotoorderonline}>
                            <MenuLists img='list1' />
                        </Grid>
                        <Grid item xs={12} sm={6} className='centerStyle'>
                            <MenuLists img='list2' />
                        </Grid>
                        <Grid item xs={12} sm={6} className='centerStyle'>
                            <MenuLists img='list3' />
                        </Grid>
                        <Grid item xs={12} sm={6} className='centerStyle'>
                            <MenuLists img='list4' />
                        </Grid>
                    </Grid>
                </Typography>
            </Container>
        </StyledContainer>
    );
}


