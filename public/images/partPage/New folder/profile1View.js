import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import {StyledContainer, OpacityLayer} from "./partPageStyle";
import Grid from '@material-ui/core/Grid';
import './commonStyle.css';
import SearchTool from './component/SearchTool';
import CookGrade from './component/CookGrade';
import ChefInfo from './component/ChefInfo';
import CookDetail from './component/CookDetail';
import {Constant} from "./component/constant";

const img ={
    borderRadius:'5%',transform:'scale(0.9,0.9)'
}

export default class profile1View extends React.Component {
    render() {
        return (
            <StyledContainer>
                <OpacityLayer background='profile1'/>
                <Container fixed style={{position:'absolute'}}>
                    <Typography component="div" style={{ height: '100vh' }} >
                        <SearchTool id='profile1'/>
                        <Grid container spacing={1}>
                            <Grid item xs>
                                <CookGrade/>
                            </Grid>
                            <Grid item xs={5}>
                                <CookDetail id='profile1'/>
                            </Grid>
                            <Grid item xs>
                                <ChefInfo id='profile1'/>
                            </Grid>
                        </Grid>
                    </Typography>
                </Container>
            </StyledContainer>
        );
    }
}
