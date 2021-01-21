import React from "react";
import Search from './Search';
import Grid from '@material-ui/core/Grid';
import './../commonStyle.css';
import PageTitle from './PageTitle';
import Badge from '@material-ui/core/Badge';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import CartDrawer from '../../../pages/partPage/component/cartDrawer';

const socialIconDiv = {
    width: '25%', display: 'flex', justifyContent: 'center', alignItems: 'center'
}
function SearchTool(props) {
    const history = useHistory();
    return (
        <Grid container style={{ color: "black", marginTop: '5vh' }}>
            <CartDrawer />
            <Grid item xs={3} className='centerStyle'>
                <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                    <div onClick={() => { history.push('/') }}><img src='./images/brand.png' alt='alt' style={{ width: '100%', transform: 'scale(0.9)', cursor: 'pointer' }} /></div>
                </div>
            </Grid>
            <Grid item xs={6} className='centerStyle' style={{ alignItems: 'center' }}>
                {props.id === 'authenticFood' ? <Search /> : ''}
            </Grid>
            <Grid item xs={3} className='centerStyle'>

                <div style={socialIconDiv}>
                    <Badge color="error" style={{ transform: 'scale(0.7)', width: '100%' }} anchorOrigin={{ vertical: 'top', horizontal: 'right', }}>
                        <img src='./images/partPage/user.svg' alt='alt' style={{ transform: 'scale(0.7)', width: '100%' }} />
                    </Badge>
                </div>
                <div style={socialIconDiv}>
                    <Badge color="error" style={{ transform: 'scale(0.7)', width: '100%' }} anchorOrigin={{ vertical: 'top', horizontal: 'right', }}>
                        <img src='./images/partPage/phone.svg' alt='alt' style={{ transform: 'scale(0.7)', width: '100%' }} />
                    </Badge>
                </div>
                <div style={socialIconDiv}>
                    <Badge color="error" badgeContent={props.cartVal} style={{ transform: 'scale(0.7)', width: '100%' }} anchorOrigin={{ vertical: 'top', horizontal: 'right', cursor: 'pointer' }}>
                        <img src='./images/partPage/basket.svg' alt='alt' style={{ transform: 'scale(0.7)', width: '100%', cursor: 'pointer' }} onClick={() => { document.getElementById('btn_cartDrawer').click(); }} />
                    </Badge>
                    {/* <CartDrop /> */}
                </div>
                <div style={socialIconDiv}>
                    <Badge color="error" style={{ transform: 'scale(0.7)', width: '100%' }} anchorOrigin={{ vertical: 'top', horizontal: 'right', }}>
                        <img src='./images/partPage/mail.svg' alt='alt' style={{ transform: 'scale(0.7)', width: '100%' }} />
                    </Badge>
                </div>
            </Grid>
            {
                props.id !== "fromfoodlist" ?
                    <Grid item xs={12} className='centerStyle' style={{ marginTop: '2%' }}>
                        <PageTitle identify={props.id} />
                    </Grid> :
                    ""
            }
        </Grid>
    );
}
function mapStateToProps(state) {
    return {
        cartVal: state.addCartIcon
    };
}
export default connect(mapStateToProps)(SearchTool);