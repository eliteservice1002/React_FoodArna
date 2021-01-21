import React from 'react';
import { useHistory } from 'react-router-dom'
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { StyledContainer, OpacityLayer} from "./partPageStyle";
import Grid from '@material-ui/core/Grid';
import './commonStyle.css';
import MenuLists from './component/menuLists';

export default function mainMenuView (){
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
                                <MenuLists img='list1'/>
                            </Grid>
                            <Grid item xs={12} sm={6} className='centerStyle'>
                                <MenuLists img='list2'/>

                            </Grid>
                            <Grid item xs={12} sm={6} className='centerStyle'>
                                <MenuLists img='list3'/>
                            </Grid>
                            <Grid item xs={12} sm={6} className='centerStyle'>
                                <MenuLists img='list4'/>
                            </Grid>
                        </Grid>
                    </Typography>
                </Container>
            </StyledContainer>
        );
}


