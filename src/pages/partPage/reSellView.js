import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { StyledContainer, OpacityLayer, ButtonStyle } from "./partPageStyle";
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import './commonStyle.css';
import ChefInfo1 from "./component/ChefInfo1";
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import Button from '@material-ui/core/Button';
const useStyle = makeStyles({
    fixed: {
        position: 'absolute',
        "@media (max-width: 959px)": { minWidth: '100%' }
    }
})

function ReSell(props) {
    const classes = useStyle();
    const history = useHistory();
    const gotocookDetail2 = (event) => {
        history.push('/cookDetail2');
    };

    const gotofoodlist = () => {
        history.push('/foodlist');
    }
    return (
        <StyledContainer>
            <OpacityLayer background='resell1' />
            <OpacityLayer background='resell2' />
            <Container fixed className={classes.fixed}>
                <Typography component="div" style={{ height: '100vh' }} >
                    <Grid container spacing={1}>
                        <Grid item xs={12} style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <Grid item xs={12} sm={6} style={{ display: 'flex', justifyContent: 'center' }}>
                                <ButtonStyle style={{ marginTop: '10%', cursor: 'pointer' }} onClick={gotofoodlist}>
                                    Re-Sell from older menu
                                </ButtonStyle>
                            </Grid>
                            <Grid item xs={12} sm={6} style={{ display: 'flex', justifyContent: 'center' }}>
                                <ButtonStyle id='addNew' style={{ marginTop: '10%', cursor: 'pointer' }} onClick={gotocookDetail2}>
                                    Add a new dish
                                </ButtonStyle>
                            </Grid>
                        </Grid>

                        <Grid item xs={12} style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <Grid item xs={12} sm={3} lg={4}></Grid>
                            <Grid item xs={12} sm={6} lg={4} style={{ textAlign: '-webkit-right' }}>
                                <ChefInfo1 autho='chef' user_id={props.id} user_email={props.email} />
                                <Button variant="outlined" className="item-add-button" onClick={() => { history.push('/sellMenu') }} style={{ marginTop: '5%', borderRadius: '25px', width: '30%', color: '#fff' }}>Back</Button>
                            </Grid>
                            <Grid item xs={12} sm={3} lg={4}></Grid>
                        </Grid>
                    </Grid>
                </Typography>
            </Container>
        </StyledContainer>
    );
}

function mapStateToProps(state) {
    return {
        email: state.email,
        id: state.id,
    };
}

export default connect(mapStateToProps)(ReSell);