import React, { useState, useEffect } from "react";
import axios from 'axios';
import './../commonStyle.css';
import { Constant } from './constant';
import Rating from '@material-ui/lab/Rating';
import { ChefNameDiv, ProfileLink, ChefRank } from './../partPageStyle';
import { useHistory } from 'react-router-dom';
import ApiConfig from '../../../config/api_config';
import $ from 'jquery';

import {
    makeStyles,
} from '@material-ui/core/styles';
import { connect } from 'react-redux';
const useStyles = makeStyles({
    chef: {
        display: 'initial !important',
    },
    buyer: {
        display: 'none !important',
    },
})

function ChefInfo1(props) {
    let localState = localStorage.getItem('user');
    if (localState && typeof JSON.parse(localState) === 'object') {
        localState = JSON.parse(localState);
    }

    const classes = useStyles();
    const history = useHistory();
    const [ranting, setRanting] = useState("");
    const [name, setName] = useState("");

    const init = () => {
        var settings = {
            "url": ApiConfig.url + "/api/user/" + localState.data.userId,
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json",
                "Authorization": localState.authToken,
            },
        };

        $.ajax(settings).done(function (response) {
            setName(response.name);
            setRanting(response.chefData.rating);
        })
    }
    useEffect(() => {
        init();
    });

    const gotoprofile = (event) => {
        history.push('/profile');
    };
    return (
        <div style={{ border: '1px solid rgb(221, 53, 77)', marginTop: '15%', borderRadius: '15px', width: '100%', backgroundColor: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', height: '10%', marginTop: '5%' }}>
                <ChefNameDiv>{name}</ChefNameDiv>
                {/* <img style={{ display: 'flex', alignItems: 'center', borderRadius: '50%' }} src={linkstate === true ? Constant.profile1.src[0] : Constant.profile2.src[0]} alt='alt' /> */}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5%', marginBottom: '5%' }}>
                <img style={{ borderRadius: '10px', width: '80%', height: '350px' }} src={props.avatarimg} alt='alt' />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', color: '#464646', marginTop: '5%', textAlign: 'center', fontSize: '140%', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', cursor: 'pointer' }} onClick={gotoprofile} className={props.autho === 'buyer' ? classes.buyer : classes.chef} ><ProfileLink>View Profile</ProfileLink></div>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '5%' }}>
                <img src='./images/partpage/chefphone.svg' style={{ marginLeft: '30%' }} id='chefPhoneImg' alt="alt" />
                <img src='./images/partpage/chefmail.svg' style={{ marginRight: '30%' }} id='chefMailImg' alt="alt" />
            </div>
            <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: '5%' }}>
                <Rating name="read-only" value={Math.floor(ranting)} readOnly />
            </div>
            <ChefRank>Chef Rank : {Math.floor(ranting)}</ChefRank>
        </div>
    );
}


function mapStateToProps(state) {
    return {
        avatarimg: state.avatarimg
    };
}
export default connect(mapStateToProps)(ChefInfo1);