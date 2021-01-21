import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { StyledContainer, OpacityLayer } from "./partPageStyle";
import Grid from '@material-ui/core/Grid';
import './commonStyle.css';
import SearchTool from './component/SearchTool';
import CookGrade from './component/CookGrade';
import ChefInfo from './component/ChefInfo';
import CookDetail from './component/CookDetail';
import { connect } from 'react-redux';
import {
    makeStyles,
} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    container: {
        position: 'absolute', minWidth: '75%',
        "@media (max-width: 1279px)": { minWidth: '100%' }
    },
    chefinfo: {
        "@media (max-width: 1279px)": { display: 'none' }
    },
    chefinfo1: {
        "@media (min-width: 1280px)": { display: 'none' },
        "@media (max-width: 1059px)": { minWidth: '30%' },
        "@media (max-width: 999px)": { minWidth: '40%' },
        "@media (max-width: 768px)": { minWidth: '45%' }
    },
    chefinfoGrid: {
        "@media (max-width: 1059px)": {
            minWidth: '100%',
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-around'
        }
    },
    chefinfoGridchild1: {
        "@media (max-width: 1059px)": { minWidth: '30%' },
        "@media (max-width: 999px)": { minWidth: '40%' },
        "@media (max-width: 768px)": { minWidth: '45%' }
    },
    cookdetail: {
        "@media (max-width: 1059px)": { minWidth: '100%' }
    }
}));

function Profile1(props) {
    const classes = useStyles();

    return (
        <StyledContainer>
            <OpacityLayer background='profile1' />
            <Container fixed className={classes.container}>
                <Typography component="div" style={{ height: '100vh' }} >
                    <SearchTool id='profile1' />
                    <Grid container spacing={1} style={{ justifyContent: 'space-around', display: 'flex', flexWrap: 'wrap' }}>
                        <Grid item xs={12} sm={3} lg={3} className={classes.chefinfoGrid}>
                            <div className={classes.chefinfoGridchild1}><CookGrade /></div>
                            <div className={classes.chefinfo1}>
                                <ChefInfo autho='buyer' chef_id={props.chef_id} chef_email={props.email} />
                            </div>
                        </Grid>
                        <Grid item sm={8} lg={6} className={classes.cookdetail}>
                            <CookDetail id='profile1' />
                        </Grid>
                        <Grid item xs={12} sm={3} lg={3} className={classes.chefinfo}>
                            <ChefInfo autho='buyer' chef_id={props.chef_id} chef_email={props.email} />
                        </Grid>
                    </Grid>
                </Typography>
            </Container>
        </StyledContainer>
    );
}
function mapStateToProps(state) {
    return {
        email: state.chef_email,
        chef_id: state.chef_id
    };
}

export default connect(mapStateToProps)(Profile1);