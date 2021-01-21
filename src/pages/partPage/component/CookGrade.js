import React, { useState, useEffect } from "react";
import './../commonStyle.css';
import { connect } from 'react-redux';
import { ChangeCommentToChef } from "../../../reducers/action";
import Rating from '@material-ui/lab/Rating';
import FixedTextField from '../component/FixedTextField';
import Button from '@material-ui/core/Button';
import $ from 'jquery';
import Snack from '../component/snackbar';
import ApiConfig from '../../../config/api_config';
import {
    withStyles,
} from '@material-ui/core/styles';
const container = {
    border: '1px solid #DD354D', marginTop: '14%', borderRadius: '15px', backgroundColor: '#ffffff', textAlign: 'center'
}

const qualityStyle = {
    border: '1px solid #DD354D', height: '10%', marginTop: '7%', borderRadius: '15px', width: '80%', marginLeft: '10%',
}

const totalCostStyle = {
    border: '1px solid #DD354D', height: '10%', marginTop: '10%', borderRadius: '15px', width: '80%', marginLeft: '10%'
}

const commentToChefStyle = {
    height: '45%', marginTop: '10%', borderRadius: '15px', width: '80%', marginLeft: '10%', alignItems: 'end', justifyContent: 'center', display: 'block'
}
const CssTextField = withStyles({
    root: {
        '& label': {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'normal',
            fontSize: '22px',
            alignItems: 'center',
            textAlign: 'center',

            color: '#777777',
            transform: 'translate(22px, 16px) scale(1)'
        },

        '& label.Mui-focused': {
            color: 'rgb(221, 53, 77)',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: 'green',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: '1px solid rgb(221, 53, 77)',
                borderRadius: '19px'
            },
            '&:hover fieldset': {
                borderColor: 'rgb(221, 53, 77)',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'rgb(221, 53, 77)',
            },
        },
    },
})(FixedTextField);
function CookGrade(props) {
    let localState = localStorage.getItem('user');
    if (localState && typeof JSON.parse(localState) === 'object') {
        localState = JSON.parse(localState);
    }

    const [ratingvalue, setRatingValue] = React.useState(0);
    const [review, setRewview] = React.useState("");
    const [alert, setalert] = React.useState("");
    // let totalprice = 0;
    // useEffect(() => {
    //     totalprice = totalprice + props.per_cost;
    //     console.log(totalprice);
    // }, [props.cartVal]);
    const handleChangeReview = (e) => {
        setRewview(e.target.value);
    }
    const review_submit = () => {
        if (ratingvalue !== 0 && review !== "") {
            var settings = {
                "url": ApiConfig.url + "/api/review/comment/chef/" + props.chef_id + "?comment=" + review,
                "method": "PUT",
                "timeout": 0,
                "headers": {
                    "Authorization": localState.authToken
                },
            };

            $.ajax(settings).done(function (response) {
            });

            var settings1 = {
                "url": ApiConfig.url + "/api/review/rate/chef/" + props.chef_id + "?rating=" + ratingvalue,
                "method": "PUT",
                "timeout": 0,
                "headers": {
                    "Authorization": localState.authToken
                },
            };

            $.ajax(settings1).done(function (response) {
                setalert("I left review and rating successfully.")
                document.getElementById('snack_success').click();
            });
        }
        else {
            setalert("Please input rating and review")
            document.getElementById('snack_info').click();
        }
    }
    return (
        <div style={container}>
            <Snack alert={alert} />
            <div style={qualityStyle} className='profilecookGradeFontStyle'><div style={{ marginLeft: '10%', fontSize: '18px' }}>Quantity : {props.total_quantity}</div></div>
            <div style={totalCostStyle} className='profilecookGradeFontStyle'><div style={{ marginLeft: '10%', fontSize: '18px' }}>Total Cost : {props.total_cost}SEK</div></div>

            <div>
                <div style={{ marginTop: '10%', color: '#dd354d', fontFamily: 'Roboto', fontWeight: 400, fontSize: '130%' }}>Your rating</div>
                <Rating
                    name="simple-controlled"
                    value={ratingvalue}
                    onChange={(event, newValue) => {
                        setRatingValue(newValue);
                    }}
                    style={{ color: 'rgb(221, 53, 77)' }}
                />
            </div>
            <div style={commentToChefStyle} className='profilecookGradeFontStyle'>
                <CssTextField
                    label="Your review"
                    variant="outlined"
                    id="custom-css-outlined-input"
                    style={{ width: '100%', zIndex: '1', marginBottom: '7%' }}
                    multiline
                    rows={5}
                    onChange={handleChangeReview}
                    value={review}
                />
            </div>
            <div>
                <Button style={{ backgroundColor: '#DD354D', width: '40%', height: '40px', marginBottom: '7%', borderRadius: '35px', border: '2px solid #fff', fontFamily: 'Roboto', fontSize: '90%', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }} onClick={review_submit} >Submit</Button>
            </div>
        </div>
    );
}

function mapStateToProps(state) {
    return {
        cartVal: state.addCartIcon,
        total_cost: state.food_per_price,
        total_quantity: state.food_per_quantity,
        chef_id: state.chef_id,
    };
}
const mapDispatchToProps = {
    ChangeCommentToChef
};
export default connect(mapStateToProps, mapDispatchToProps)(CookGrade);
