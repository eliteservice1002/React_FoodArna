import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { StyledContainer, OpacityLayer} from "./partPageStyle";
import Grid from '@material-ui/core/Grid';

import './commonStyle.css';
import MenuLists from './component/menuLists';

export default class SellMenu extends React.Component {

    render() {
        return (
            <StyledContainer>
                <OpacityLayer background='mainmenu'/>
                <Container fixed style={{position:'absolute'}}>
                    <Typography component="div" style={{ height: '100vh' }} >
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12} className='centerStyle' id='mainMenuGrid'>
                                <img src='./images/brand.png' alt='no png'/>
                            </Grid>
                            <Grid item xs={12} sm={6} className='centerStyle'>
                                <MenuLists sell='list1'/>
                            </Grid>
                            <Grid item xs={12} sm={6} className='centerStyle'>
                                <MenuLists sell='list2'/>
                            </Grid>
                            <Grid item xs={12} sm={6} className='centerStyle'>
                                <MenuLists sell='list3'/>
                            </Grid>
                            <Grid item xs={12} sm={6} className='centerStyle'>
                                <MenuLists sell='list4'/>
                            </Grid>
                        </Grid>
                    </Typography>
                </Container>
            </StyledContainer>
        );
    }
}


