import React, { useState, useEffect } from "react";
import axios from 'axios';
import './../commonStyle.css';
import { Constant } from './constant';
import Rating from '@material-ui/lab/Rating';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import { ChefNameDiv, ProfileLink, ChefRank } from './../partPageStyle';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import { ChangePerRating } from "../../../reducers/action";
import ApiConfig from '../../../config/api_config';
import $ from 'jquery';
import {
    makeStyles,
} from '@material-ui/core/styles';
const useStyles = makeStyles({
    chef: {
        display: 'initial !important',
    },
    buyer: {
        display: 'none !important',
    },
})
function ChefInfo(props) {
    let localState = localStorage.getItem('user');
    if (localState && typeof JSON.parse(localState) === 'object') {
        localState = JSON.parse(localState);
    }

    const classes = useStyles();
    const history = useHistory();
    const [ranking, setRanking] = useState("");
    const [avatar, setAvatar] = useState("");
    const [name, setName] = useState("");
    const [linkstate, setlinkstate] = useState(0);

    const getRating = () => {
        var settings = {
            "url": ApiConfig.url + "/api/chef/" + props.chef_id,
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Authorization": localState.authToken
            },
        };

        $.ajax(settings).done(function (response) {
            setName(response.name);
            setAvatar(response.chefProfilePicture);
            setRanking(4);
        });
    }
    useEffect(() => {
        getRating();
    }, []);

    const gotoprofile = (event) => {
        history.push('/profile');
    };
    return (
        <div style={{ border: '1px solid rgb(221, 53, 77)', marginTop: '14%', borderRadius: '15px', width: '100%', backgroundColor: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'space-around', height: '10%', marginTop: '5%' }}>
                <ChefNameDiv>{name}</ChefNameDiv>
                {/* <img style={{ display: 'flex', alignItems: 'center' }} src={linkstate === true ? Constant.profile1.src[0] : Constant.profile2.src[0]} alt='alt' /> */}
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5%', marginBottom: '5%' }}>
                <img style={{ width: '80%', height: '275px', borderRadius: '50%' }} src={"./images/avatar.jpg"} alt='alt' />
            </div>
            <div style={{ display: 'flex', justifyContent: 'center', color: '#464646', marginTop: '5%', textAlign: 'center', fontSize: '140%', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'normal', textDecoration: 'none', cursor: 'pointer' }} onClick={gotoprofile} className={props.autho === 'buyer' ? classes.buyer : classes.chef} ><ProfileLink>View Profile</ProfileLink></div>
            <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '5%' }}>
                <img src='./images/partpage/chefphone.svg' style={{ marginLeft: '30%' }} id='chefPhoneImg' alt="alt" />
                <img src='./images/partpage/chefmail.svg' style={{ marginRight: '30%' }} id='chefMailImg' alt="alt" />
            </div>
            <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', marginTop: '5%' }}>
                <Rating name="read-only" value={Math.floor(ranking)} readOnly className={props.autho === 'buyer' ? classes.buyer : classes.chef} />
                <Rating
                    name="customized-empty"
                    defaultValue={0}
                    precision={0.5}
                    emptyIcon={<StarBorderIcon fontSize="inherit" />}
                    value={ranking}
                />
            </div>
            <ChefRank>Chef Rank : {Math.floor(ranking)}</ChefRank>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        chef_id: state.chef_id,
        chef_name: state.chef_name,
        chef_email: state.chef_email,
        rating: state.per_rating
    };
}
const mapDispatchToProps = {
    ChangePerRating
};
export default connect(mapStateToProps, mapDispatchToProps)(ChefInfo);