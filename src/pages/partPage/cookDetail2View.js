import React, { useState } from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import axios from 'axios';
import { connect } from 'react-redux';
import { StyledContainer, OpacityLayer } from "./partPageStyle";
import Grid from '@material-ui/core/Grid';
import './commonStyle.css';
import { useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button';
import CookDetailRow from './component/cookDetailRow';
import CookFeedbackRow from './component/cookFeedbackRow';
import $ from 'jquery';
import SocialSiteRow from './component/socialSiteRow';
import AddIcon from './component/addIcon';
import Snack from './component/snackbar';
import { ChangeEmail, ChangeID } from "../../reducers/action";
import ApiConfig from '../../config/api_config';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles({
    container: {
        margin: 'auto',
        position: 'absolute',
        "@media (max-width: 1279px)": { minWidth: '100%' }
    },
    centerStyle: {
        display: 'flex',
        justifyContent: 'center',
        "@media (max-width: 815px)": { minWidth: '100%' }
    }
})

const detailTitle = [
    // 'Date of Serving',
    // 'Time to be ready',
    'Name of Cuisine',
    'Portion',
    'Quantity',
    // 'Number of Pieces',
    'Price',
    // 'For Sell',
    // 'For Free Promotion'

];

const detailContent = [
    // 'Date/Month/Year',
    // '3 Hours from Clock',
    'Tandoori Chicken',
    'By Plate',
    '150',
    // '2 per plate',
    '70 SEK',
    // '10',
    // '0',
];

const state_function = [
    // 'setdate',
    // 'settime',
    'setcusineName',
    'setportion',
    'setquantity',
    // 'setnumberPiece',
    'setperPrice',
    // 'setforSell',
    // 'setforFree',
];

const file = [
    'setphoto1',
    'setphoto2',
    'setvideo',
];

const textarea_function = [
    'setingredient',
    'setfoodSafety',
];

const foodFeedbackTitle = [
    'Ingredients',
    'Food Safety (Pick from list)'
];

const foodFeedbackContent = [
    'Turmeric, Turkish Curd,...',
    'Clean heated water only, Clean hands with cooking gloves, Chef Hat used, Organic Products...'
];

const social = [
    { 'img': './images/partPage/social/TikTok.svg', 'title': 'TikTok', 'state': './images/partPage/social/Ellipse1.svg' },
    { 'img': './images/partPage/social/Facebook.svg', 'title': 'Facebook', 'state': './images/partPage/social/Ellipse2.svg' },
    { 'img': './images/partPage/social/Instagram.svg', 'title': 'Instagram', 'state': './images/partPage/social/Ellipse2.svg' },
    { 'img': './images/partPage/social/Likee.svg', 'title': 'Likee', 'state': './images/partPage/social/Ellipse1.svg' },
    { 'img': './images/partPage/social/Snapchat.svg', 'title': 'Snapchat', 'state': './images/partPage/social/Ellipse2.svg' },
    { 'img': './images/partPage/social/Helo.svg', 'title': 'Helo', 'state': './images/partPage/social/Ellipse1.svg' },
    { 'img': './images/partPage/social/Twitter.svg', 'title': 'Twitter', 'state': './images/partPage/social/Ellipse1.svg' },
    { 'img': './images/partPage/social/Kuaishou.svg', 'title': 'Kuaishou', 'state': './images/partPage/social/Ellipse1.svg' },
    { 'img': './images/partPage/social/Pinterest.svg', 'title': 'Pinterest', 'state': './images/partPage/social/Ellipse2.svg' },
    { 'img': './images/partPage/social/Vmate.svg', 'title': 'VMate', 'state': './images/partPage/social/Ellipse1.svg' },
];

const addIcon = [
    './images/partPage/social/camera2.svg',
    './images/partPage/social/camera2.svg',
    './images/partPage/social/camera1.svg'
];

const addIconTitle = [
    'Add Photo', 'Add Photo', 'Add Video'
];
function CookDetail2(props) {
    let localState = localStorage.getItem('user');
    if (localState && typeof JSON.parse(localState) === 'object') {
        localState = JSON.parse(localState);
    }


    const classes = useStyles();
    const history = useHistory();
    const [date_serving, setdate] = useState("");
    const [time_ready, settime] = useState("");
    const [cusine_name, setcusineName] = useState("");
    const [portion, setportion] = useState("");
    const [quantity, setquantity] = useState("");
    const [quantityUnit, setquantityUnit] = useState("");
    const [number_pieces, setnumberPiece] = useState("");
    const [per_price, setperPrice] = useState("");
    const [for_sell, setforSell] = useState("");
    const [for_free, setforFree] = useState("");
    const [ingredient, setingredient] = useState("");
    const [food_safety, setfoodSafety] = useState("");
    const [photo1, setphoto1] = useState("");
    const [photo2, setphoto2] = useState("");
    const [video, setvideo] = useState("");
    const [alert, setalert] = useState("");
    const func_data = (event) => {
        switch (event.target.name) {
            case "setdate":
                setdate(event.target.value);
                break;
            case "settime":
                settime(event.target.value);
                break;
            case "setcusineName":
                setcusineName(event.target.value);
                break;
            case "setportion":
                setportion(event.target.value);
                console.log(event.target.value);
                break;
            case "setquantity":
                setquantity(event.target.value);
                break;
            case "setquantityUnit":
                setquantityUnit(event.target.value);
                break;
            case "setnumberPiece":
                setnumberPiece(event.target.value);
                break;
            case "setperPrice":
                setperPrice(event.target.value);
                break;
            case "setforSell":
                setforSell(event.target.value);
                break;
            case "setforFree":
                setforFree(event.target.value);
                break;
            case "setingredient":
                setingredient(event.target.value);
                break;
            case "setfoodSafety":
                setfoodSafety(event.target.value);
                break;
            case "setphoto1":
                const data = new FormData()
                data.append('file', event.target.files[0]);
                if (props.email !== undefined && props.email !== "") {
                    axios.post("http://localhost/upload", data)
                        .then(res => {
                            setphoto1(res.data.filename);
                            setalert("Food image upload success")
                            document.getElementById('snack_success').click();
                        })
                }
                else {
                    setalert("Please proceed to Login.")
                    document.getElementById('snack_error').click();
                }
                break;
            case "setphoto2":
                const data1 = new FormData()
                data1.append('file', event.target.files[0]);
                if (props.email !== undefined && props.email !== "") {
                    axios.post("http://localhost/upload", data1)
                        .then(res => {
                            setphoto2(res.data.filename);
                        })
                }
                else {
                    setalert("Please proceed to Login.")
                    document.getElementById('snack_error').click();
                }
                break;
            case "setvideo":
                const data2 = new FormData()
                data2.append('file', event.target.files[0]);
                if (props.email !== undefined && props.email !== "") {
                    axios.post("http://localhost/upload", data2)
                        .then(res => {
                            setvideo(res.data.filename);
                            setalert("Food video upload success")
                            document.getElementById('snack_success').click();
                        })
                }
                else {
                    setalert("Please proceed to Login.")
                    document.getElementById('snack_error').click();
                }
                break;
        }
    }
    var d = new Date();
    let year = 0, month = 0, day = 0, date = "", hour = 0, minute = 0, time = "";
    year = d.getFullYear();
    month = d.getMonth() + 1;
    if (month < 10)
        month = '0' + month;
    day = d.getDate();
    if (day < 10)
        day = '0' + day;
    date = (year + "-" + month + "-" + day);
    hour = d.getHours();
    if (hour < 10)
        hour = "0" + hour;
    minute = d.getMinutes();
    if (minute < 10)
        minute = "0" + minute;
    time = hour + ":" + minute;
    const save = async e => {
        if (cusine_name === "") {
            setalert("Please input cuisine name!");
            document.getElementById('snack_warning').click();
        }
        if (per_price === "") {
            setalert("Please input food price!");
            document.getElementById('snack_warning').click();
        }
        if (cusine_name !== "" && per_price !== "") {
            const data = {
                name: cusine_name,
                description: food_safety,
                ingredients: [
                    ingredient,
                    quantityUnit === "" ? "gms" : quantityUnit
                ],
                steps: [

                ],
                price: per_price,
                userId: localState.data.userId,
                quantity: quantity,
                portion: portion === "" ? "plate" : portion

            };
            var settings = {
                "url": ApiConfig.url + "/api/item",
                "method": "POST",
                "timeout": 0,
                "headers": {
                    "Content-Type": "application/json",
                    "Authorization": localState.authToken
                },
                "data": JSON.stringify(data),
            };

            $.ajax(settings).done(function (response) {
                const data1 = {
                    "itemId": response.id,
                    "name": response.name,
                    "description": response.description,
                    "status": "PENDING",
                    "ingredients": [
                        response.ingredients[0],
                        response.ingredients[1]
                    ],
                    "steps": [
                    ],
                    "price": response.price
                }
                var settings = {
                    "url": ApiConfig.url + "/api/item",
                    "method": "PUT",
                    "timeout": 0,
                    "headers": {
                        "Content-Type": "application/json",
                        "Authorization": localState.authToken,
                    },
                    "data": JSON.stringify(data1),
                };

                $.ajax(settings).done(function (response) {
                    setalert("It was added successfully!");
                    document.getElementById('snack_success').click();
                });
            });
        }
    }


    return (
        <>
            <Snack alert={alert} />
            <StyledContainer>
                <img src="./images/partPage/cookDetail2Back.png" />
                <Container fixed className={classes.container}>
                    <Typography component="div" style={{ height: '100vh' }} >
                        <Grid container spacing={3}>
                            <Grid item xs={12} style={{ textAlign: 'center', color: ' rgba(221,53,77,1)', fontFamily: 'Roboto', fontSize: '250%', fontWeight: '500', marginTop: '3%', cursor: 'pointer' }} onClick={() => { history.push("/") }}>Add new food</Grid>
                            <Grid item xs={12} sm={7} lg={7} className={classes.centerStyle} style={{ alignSelf: 'center' }}>
                                <div style={{ display: 'block', color: '#464646', width: '70%' }}>
                                    <div style={{ marginTop: '3%' }}>
                                        {
                                            detailTitle.map((val, index) => {
                                                return (<CookDetailRow title={val} onchange={func_data} content={detailContent[index]} func={state_function[index]} key={index} />);
                                            })
                                        }
                                    </div>

                                    {
                                        foodFeedbackTitle.map((val, index) => {
                                            return (<CookFeedbackRow title={val} onchange={func_data} func={textarea_function[index]} content={foodFeedbackContent[index]} key={index} />);
                                        })
                                    }
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={4} lg={4} className={classes.centerStyle}>
                                <div style={{ display: 'block', color: '#464646' }}>
                                    <div style={{ marginTop: '12%' }}>
                                        <Button variant="outlined" style={{ backgroundColor: '', color: '#DD354D', width: '130%', borderRadius: '25px', border: '2px solid #DD354D' }}>Edit</Button>
                                    </div>
                                    <div style={{ display: 'block' }}>
                                        {
                                            social.map((val, index) => {
                                                return (<SocialSiteRow index={index + 1} img={val.img} title={val.title} state={val.state} key={index} />);
                                            })
                                        }
                                    </div>
                                </div>
                            </Grid>
                            <Grid item xs={12} sm={12} className={classes.centerStyle}>
                                <Button variant="outlined" style={{ margin: '1%', backgroundColor: '#DD354D', color: '#FCD652', width: '23%', borderRadius: '25px', border: '2px solid #DD354D', fontFamily: 'Roboto', fontSize: '140%' }} onClick={() => { history.push("/resell") }}>Back</Button>
                                <Button variant="outlined" style={{ margin: '1%', backgroundColor: '#DD354D', color: '#FCD652', width: '23%', borderRadius: '25px', border: '2px solid #DD354D', fontFamily: 'Roboto', fontSize: '140%' }} onClick={save}>Submit</Button>
                            </Grid>
                        </Grid>
                    </Typography>
                </Container>
            </StyledContainer>

        </>
    );
}


function mapStateToProps(state) {
    return {
        email: state.email,
        id: state.id,
    };
}
const mapDispatchToProps = {
    ChangeEmail,
    ChangeID
};
export default connect(mapStateToProps, mapDispatchToProps)(CookDetail2);