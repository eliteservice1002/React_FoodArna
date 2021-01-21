import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {StyledContainer, OpacityLayer} from "./partPageStyle";
import Grid from '@material-ui/core/Grid';
import './commonStyle.css';
import SearchTool from './component/SearchTool';
import CookGrade from "./component/CookGrade";
import CookDetail from "./component/CookDetail";
import ChefInfo from "./component/ChefInfo";


export default function Profile2() {
        return (
            <StyledContainer>
                <OpacityLayer background='profile2_1'/>
                <OpacityLayer background='profile2_2'/>
                <OpacityLayer background='profile2_3'/>
                <Container fixed style={{position:'absolute'}}>
                    <Typography component="div" style={{ height: '100vh' }} >
                        <SearchTool id='profile2'/>
                        <Grid container spacing={1}>
                            <Grid item xs>
                                <CookGrade/>
                            </Grid>
                            <Grid item xs={5}>
                                <CookDetail id='profile2'/>
                            </Grid>
                            <Grid item xs>
                                <ChefInfo id='profile2'/>
                            </Grid>
                        </Grid>
                    </Typography>
                </Container>
            </StyledContainer>
        );
}
