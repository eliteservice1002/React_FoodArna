import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import './commonStyle.css';
import { StyledContainer, OpacityLayer } from "./partPageStyle";
import { connect } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import Backdrop from './component/backdrop';
import $ from 'jquery';
import axios from 'axios';
import Snack from './component/snackbar';
import FixedTextField from './component/FixedTextField';
import {
    makeStyles,
    useTheme,
    withStyles,
} from '@material-ui/core/styles';
import { ChangeEmail, ChangeID, ChangeChefID, ChangeChefName, ChangeChefEmail, ChangePerFoodId } from "../../reducers/action";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import SkipNextIcon from '@material-ui/icons/SkipNext';
// table no search start
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import SkipPreviousIcon from '@material-ui/icons/SkipPrevious';
// table no search end

// dialog start
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
// dialog end
import ApiConfig from '../../config/api_config';
import { container } from './assets/jss/material-dashboard-pro-react';
const CssTextField = withStyles({
    root: {
        '& label': {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '1em',
            alignItems: 'center',
            textAlign: 'center',

            color: ' rgba(221,53,77,1)',
            transform: 'translate(22px, 16px) scale(1)'
        },

        '& label.Mui-focused': {
            color: ' rgba(221,53,77,1)',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#fff',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: '1px solid rgba(221,53,77,1)',
                borderRadius: '19px'
            },
            '&:hover fieldset': {
                borderColor: ' rgba(221,53,77,1)',
            },
            '&.Mui-focused fieldset': {
                borderColor: ' rgba(221,53,77,1)',
            },
        },
    },
})(FixedTextField);
const useStyles = makeStyles((theme) => ({
    // search css start
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        borderRadius: '19px',
        "&:acteve": {
            border: '1px solid #DD344C',
        },
        boxShadow: 'none',
        height: '52px'
    },
    input: {
        marginLeft: theme.spacing(1),
        flex: 1,
    },
    iconButton: {
        padding: 10,
    },
    divider: {
        height: 28,
        margin: 4,
    },
    // search css end
    button: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '100%',
        color: '#464646',
        cursor: 'pointer',
        border: '1px solid red',
        borderRadius: '10px',
        width: '40%',
        margin: 'auto',
    },
    submit: {
        width: '40%',
        borderRadius: '19px',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'normal',
        fontSize: '32px',
        lineHeight: '37px',
        textAlign: 'center',
        color: '#FFFFFF'
    },
    top_header: {
        fontFamily: 'Roboto',
        fontSize: '350%',
        color: '#3C4858',
        textAlign: 'center',
        fontWeight: 'bold',
        position: 'relative',
        top: '-10%',
        height: '10%',
        backgroundColor: '#87d3df',
        boxShadow: '0px 10px 5px 2px rgba(0, 0, 0, 0.12), 0px 10px 5px 2px rgba(0, 0, 0, 0.12), 0px 10px 5px 2px rgba(0, 0, 0, 0.12)'
    },
    large: {
        width: theme.spacing(8),
        height: theme.spacing(8),
        margin: '5% auto'
    },
    header: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '130%',
        color: '#3C4858',
        padding: '20px'
    },
    btn: {
        fontSize: '1.25rem',
        fontWeight: 'bold',
        color: '#fff',
        backgroundColor: '#2d2',
        display: 'block',
        width: '100 %',
        maxWidth: '20rem',
        padding: '0.25rem 0.5rem',
        margin: '1.5rem auto 0',
        border: 'none',
        borderRadius: '0.375rem',
        boxShadow: '0 0.375rem #2b2',
        transition: '0.2s'
    },
    ellipsis: {
        color: 'rgb(0, 0, 0)',
        width: '200px',
        margin: '0 auto',
        padding: '10px',
        height: '41px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        maxWidth: '700px',
        float: 'left'
    },
    imageDiv: {
        width: 170,
        height: 170,
        overflow: 'hidden',
        // border: '1px solid  rgba(221,53,77,1)',
        borderRadius: 44
    },
    yfilter: {
        filter: 'grayscale(100%)'
    },
    nfilter: {
        filter: 'none'
    },
    // modal start
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        textAlign: 'left',
        width: '100%'
    },
    // modal end
    chefitem: {
        width: '211px', height: '281px', border: '1px solid  rgba(221,53,77,1)', borderRadius: '19px', textAlign: 'center', padding: '1% 2%', margin: '3% 1.5% 0 1.5%', fontFamily: 'Roboto', fontWeight: 'bold', color: ' rgba(221,53,77,1)', fontSize: '130%',
        "&:hover": {
            border: '1px solid #F8C545'
        },
        "&:focus": {
            border: '3px solid  rgba(221,53,77,1)'
        },
        "&:active": {
            border: '3px solid  rgba(221,53,77,1)'
        },
        "&:visited": {
            border: '3px solid  rgba(221,53,77,1)'
        },
    },
    container: {
        height: '100%',
        "@media (max-width: 959px)": { height: '100vh' }
    },
    itemsGrid: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        "@media (max-width: 448px)": { justifyContent: 'space-around' }
    }
}));
// table no search start
const useStyles1 = makeStyles((theme) => ({
    root: {
        flexShrink: 0,
        marginLeft: theme.spacing(2.5),
    },
}));

function TablePaginationActions(props) {
    const classes_tab1 = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;

    const handleFirstPageButtonClick = (event) => {
        onChangePage(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onChangePage(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onChangePage(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <div className={classes_tab1.root}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </div>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

// table no search end
function Profile(props) {
    let localState = localStorage.getItem('user');
    if (localState && typeof JSON.parse(localState) === 'object') {
        localState = JSON.parse(localState);
    }

    // modal start
    const [chefid, setChefId] = React.useState("");
    const [name, setName] = React.useState("");
    const [avatars, setAvatars] = React.useState([]);
    const [avatar, setAvatar] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [profile, setProfile] = React.useState("");
    // const [status, setStatus] = React.useState("");
    // modal end
    const history = useHistory();
    const [alert, setalert] = useState("");
    const classes = useStyles();
    const [chefdata, setChefdata] = useState([]);
    const [pagenumber, setPageNumber] = useState(0);
    const [reviewpagenumber, setReviewPageNumber] = useState(0);
    const [ratingvalue, setRatingValue] = React.useState(0);
    const [review, setRewview] = React.useState("");
    const [reviewdata, setReviewData] = React.useState([]);
    const [pageno, setPageNo] = React.useState(0);
    const [searchvalue, setSearchVal] = React.useState("");
    const init = () => {
        document.getElementById('btn_backdrop').click();

        var settings = {
            "url": ApiConfig.url + "/api/public/chefs?pageNo=" + pageno + "&pageSize=8&sortBy=id",
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json",
                "Accept": "*/*"
            },
        };

        $.ajax(settings).done(async function (res) {
            var flag = 0;
            var avatar_arr = [];
            if (res.length !== 0) {
                await res.map((val, index) => {
                    var axios = require('axios');
                    var config = {
                        method: 'get',
                        url: ApiConfig.url + '/api/public/chef/image/' + val.id,
                        headers: {
                            'Content-Type': 'application/json',
                            'Authorization': localState.authToken
                        }
                    };
                    axios(config)
                        .then(function (response) {
                            avatar_arr.push(response.data);
                        })
                        .catch(function (error) {
                            avatar_arr.push('response');
                        });
                })
                await setAvatars(avatar_arr);
                setTimeout(function () {
                    setChefdata(res);
                    setAvatar(avatar_arr[0]);
                    document.getElementById('btn_backdrop').click();
                }, 5000)
                await setChefId(res[0].id);
                await setName(res[0].name);
                await setAddress(res[0].address);
                await setProfile(res[0].description);
                await setReviewData(res[0].reviews);
                await setPageNumber(Math.ceil(res.length / 8));
                await setReviewPageNumber(Math.ceil(res[0].reviews.length / 5));
            }
            if (res.length === 0) {
                avatar_arr.push('response');
                setChefdata([]);
                setAvatars(avatar_arr);
                await setAvatar(avatar_arr[0]);
                document.getElementById('btn_backdrop').click();
            }
        });

    }
    useEffect(() => {
        init();
    }, []);

    const food_view = (e) => {
        document.getElementById('btn_backdrop').click();
        props.ChangeChefID(e.target.name);
        var settings = {
            "url": ApiConfig.url + "/api/item/chef/" + e.target.name,
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json",
                "Authorization": localState.authToken
            },
        };

        $.ajax(settings).done(function (res) {
            if (res.length === 0) {
                document.getElementById('btn_backdrop').click();
                setalert("This chef is no cuisine list.")
                document.getElementById('snack_info').click();
            }
            else {
                document.getElementById('btn_backdrop').click();
                props.ChangePerFoodId(res[0].id);
                history.push('/profile1');
            }
        });
    }
    const searching = (e) => {
        if (e.target.value !== "") {
            var settings = {
                "url": ApiConfig.url + "/api/search/chef/" + e.target.value + "?fromIndex=0",
                "method": "GET",
                "timeout": 0,
                "headers": {
                    "Content-Type": "application/json"
                },
            };

            $.ajax(settings).done(function (response) {
                setChefdata(response.results);
            });
        }
        if (e.target.value === "") {
            init();
        }
        setSearchVal(e.target.value);
    }

    const handleKeyDown = (e) => {
        if (e.key === 'Enter')
            // searching();
            return;
    }
    // table no search start
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(8);

    const [reviewpage, setReviewPage] = React.useState(0);
    const [rowsReviewPerPage, setReviewRowsPerPage] = React.useState(5);

    const handleChangePage = (event, newPage) => {
        setPage(newPage - 1);
    };

    const handleChangeReviewPage = (event, newPage) => {
        setReviewPage(newPage - 1);
    }

    // table no search end
    const handleChangeReview = (e) => {
        setRewview(e.target.value);
    }
    const review_submit = () => {
        if (ratingvalue !== 0 && review !== "") {
            var settings = {
                "url": ApiConfig.url + "/api/review/comment/chef/" + chefid + "?comment=" + review,
                "method": "PUT",
                "timeout": 0,
                "headers": {
                    "Authorization": localState.authToken
                },
            };

            $.ajax(settings).done(function (response) {
                // console.log(response);
            });

            var settings1 = {
                "url": ApiConfig.url + "/api/review/rate/chef/" + chefid + "?rating=" + ratingvalue,
                "method": "PUT",
                "timeout": 0,
                "headers": {
                    "Authorization": localState.authToken
                },
            };

            $.ajax(settings1).done(function (response) {
                setalert("I left review and rating successfully.")
                document.getElementById('snack_success').click();
                setOpen(false);
            });
        }
        else {
            setalert("Please input rating and review")
            document.getElementById('snack_info').click();
        }
    }

    const Readmore = (e) => {
        document.getElementById('btn_backdrop').click();
        var id = e.target.name;
        var settings = {
            "url": ApiConfig.url + "/api/chef/" + id,
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json",
                "Authorization": localStorage.authToken
            },
        };

        $.ajax(settings).done(function (res) {
            document.getElementById('btn_backdrop').click();
            setChefId(res.id);
            setName(res.name);
            var settings = {
                "url": ApiConfig.url + "/api/public/chef/image/" + id,
                "method": "GET",
                "timeout": 0,
                "headers": {
                    "Content-Type": "application/json",
                    "Authorization": localState.authToken
                },
            };

            $.ajax(settings).done(function (response) {
                setAvatar(response);
            });
            $.ajax(settings).catch(function (response) {
                setAvatar('response');
            });
            setAddress(res.address);
            setProfile(res.description);
            // setStatus(res.items[0].status);
            setReviewData(res.reviews);
            setReviewPageNumber(Math.ceil(res.reviews.length / 5));
        });
    }

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    return (
        <StyledContainer>
            <Backdrop />
            <Snack alert={alert} />
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title" style={{ color: 'rgba(60, 60, 60, 0.5)', textAlign: 'center', padding: '5%' }}>{"Your email address will not be published. Required fields are marked *"}</DialogTitle>
                    <DialogContent>
                        <Grid item xs={12} sm={12} style={{ height: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                            <Grid item xs={9} sm={9} style={{ display: 'flex', flexWrap: 'wrap', borderRight: '1px solid #e5e5e5', paddingLeft: '3%', paddingRight: '5%' }}>
                                <Grid item xs={12} sm={12}>
                                    <Grid item xs={12} sm={12} style={{ display: 'flex', flexWrap: 'wrap' }}>
                                        {reviewdata.length !== 0 ? (rowsReviewPerPage > 0
                                            ? reviewdata.slice(reviewpage * rowsReviewPerPage, reviewpage * rowsReviewPerPage + rowsReviewPerPage)
                                            : reviewdata
                                        ).map((row, index) => (
                                            <Grid item xs={12} sm={12} style={{ marginBottom: '2vw', borderBottom: '1px solid #e5e5e5', height: '10vh' }} key={index}>
                                                <Grid item xs={12} sm={12} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }} key={index + 1}>
                                                    <Grid item xs={1} style={{ textAlign: 'center', fontFamily: 'Roboto', fontSize: '150%', color: 'rgb(221, 53, 77)', fontWeight: 'bold', backgroundColor: '#ffb400', borderRadius: 10 }} key={index + 2}>{row.rating}</Grid>
                                                    <Rating name="read-only" value={row.rating} readOnly key={index + 3} />
                                                </Grid>
                                                <Grid item xs={12} style={{ fontFamily: 'Roboto', fontSize: '100%', color: 'rgba(60, 60, 60, 0.5)' }} key={index + 4}>
                                                    {row.comment}
                                                </Grid>
                                                <Grid item xs={12} style={{ fontFamily: 'Roboto', fontSize: '100%', color: 'rgba(60, 60, 60, 0.5)' }} key={index + 5}>
                                                    {row.name}
                                                </Grid>
                                            </Grid>
                                        )) :
                                            <div style={{ color: ' rgba(221,53,77,1)', fontFamily: 'Roboto', fontSize: '250%', width: '900px', textAlign: 'center' }}>Search result empty !</div>
                                        }

                                    </Grid>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <Pagination count={reviewpagenumber} color="primary" showFirstButton showLastButton onChange={handleChangeReviewPage} style={{ width: '100%', margin: '1.5% auto' }} />
                                </Grid>
                            </Grid>
                            <Grid item xs={3} sm={3} style={{ display: 'flex', flexWrap: 'wrap', paddingLeft: '3%' }}>
                                <Grid item xs={12} sm={12}>
                                    <Grid item xs={12} style={{ paddingTop: '5%', fontFamily: 'Roboto', fontSize: '130%', fontWeight: 'bold', color: 'rgba(60, 60, 60, 0.5)' }}>Name</Grid>
                                    <Grid item xs={12} style={{ paddingTop: '5%', fontFamily: 'Roboto', fontSize: '100%', color: 'rgba(60, 60, 60, 0.5)' }}>{name}</Grid>
                                    <Grid item xs={12} style={{ paddingTop: '5%', fontFamily: 'Roboto', fontSize: '130%', fontWeight: 'bold', color: 'rgba(60, 60, 60, 0.5)' }}>Address</Grid>
                                    <Grid item xs={12} style={{ paddingTop: '5%', fontFamily: 'Roboto', fontSize: '100%', color: 'rgba(60, 60, 60, 0.5)' }}>{address}</Grid>
                                    <Grid item xs={12} style={{ paddingTop: '5%', fontFamily: 'Roboto', fontSize: '130%', fontWeight: 'bold', color: 'rgb(221, 53, 77)' }}>Your Rating</Grid>
                                    <Rating
                                        name="simple-controlled"
                                        value={ratingvalue}
                                        onChange={(event, newValue) => {
                                            setRatingValue(newValue);
                                        }}
                                        style={{ color: 'rgb(221, 53, 77)', marginBottom: '5%' }}
                                    />
                                    <CssTextField
                                        label="Your Review"
                                        variant="outlined"
                                        id="custom-css-outlined-input"
                                        style={{ width: '100%', paddingTop: '5% ' }}
                                        multiline
                                        rows={5}
                                        value={review}
                                        onChange={handleChangeReview}
                                    />
                                </Grid>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button name={chefid} style={{ backgroundColor: '#DD354D', width: '15%', height: '40px', borderRadius: '35px', border: '2px solid #fff', fontFamily: 'Roboto', fontSize: '90%', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }} onClick={review_submit} >Submit</Button>
                        <Button name={chefid} style={{ backgroundColor: '#DD354D', width: '15%', height: '40px', borderRadius: '35px', border: '2px solid #fff', fontFamily: 'Roboto', fontSize: '90%', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }} onClick={handleClose} autoFocus >Close</Button>
                    </DialogActions>
                </Dialog>
            </div>
            <OpacityLayer background='foodlist' />
            <Container fixed style={{ zIndex: 1, backgroundColor: '#fff', padding: '0', borderRadius: '10px' }}>
                <Grid container spacing={1} className={classes.container}>
                    <Grid item xs={12} sm={12} style={{ height: '100%', display: 'flex', flexWrap: 'wrap' }}>
                        <Grid item xs={12} sm={12} lg={9} style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <Grid item xs={12} sm={12} style={{ marginRight: '1.5%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', borderBottom: '1px solid  rgba(221,53,77,1)', height: '120px' }}>
                                <Grid item xs={3} sm={3} style={{ alignSelf: 'flex-end' }}>
                                    <img src={"./images/partPage/chef_logo.png"} style={{ width: '100%', height: '78.16%', cursor: 'pointer', marginLeft: '1.5%' }} alt="alt" onClick={() => { history.push('/') }}></img>
                                </Grid>
                                <Grid item xs={5} sm={5} style={{ alignSelf: 'flex-end', paddingBottom: '1%' }}>
                                    <Paper component="form" className={classes.root}>
                                        <IconButton className={classes.iconButton} aria-label="search">
                                            <SearchIcon />
                                        </IconButton>
                                        <InputBase
                                            className={classes.input}
                                            placeholder="Search..."
                                            inputProps={{ 'aria-label': 'search google maps' }}
                                            fullWidth
                                            value={searchvalue}
                                            onChange={searching}
                                            onKeyDown={handleKeyDown}
                                        />
                                    </Paper>
                                </Grid>
                            </Grid>

                            <div style={{ width: '100%' }}>
                                <Grid item xs={12} sm={12} className={classes.itemsGrid}>
                                    {chefdata.length !== 0 ? (rowsPerPage > 0
                                        ? chefdata.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        : chefdata
                                    ).map((row, index) => (
                                        <div className={classes.chefitem} key={index}>
                                            <Rating name="read-only" value={row.rating} readOnly key={index + 1} />
                                            <div className={classes.imageDiv} key={index + 2}>
                                                <img src={avatars[index] === "response" ? "./images/avatar.jpg" : avatars[index]} style={{ width: '100%', height: '100%', objectFit: 'fill', cursor: 'pointer' }} name={row.id} value={row.name} onClick={Readmore} alt={row.id} className={row.entry_flag === false ? classes.yfilter : classes.nfilter} key={index + 3}></img>
                                            </div>
                                            <div key={index + 4}>{row.name}</div>
                                        </div>
                                    )) :
                                        <div style={{ color: ' rgba(221,53,77,1)', fontFamily: 'Roboto', fontSize: '4vw', width: '900px', textAlign: 'center' }}>Search result empty !</div>
                                    }

                                </Grid>
                            </div>
                            <Grid item xs={12} sm={12} style={{ textAlign: 'center' }}>
                                {/* <Pagination count={pagenumber} color="primary" showFirstButton showLastButton onChange={handleChangePage} style={{ width: '200px', margin: '1.5% auto' }} /> */}
                                <SkipPreviousIcon style={{ cursor: 'pointer', color: '#fff', backgroundColor: '#dd354d', borderRadius: '50%', fontSize: '2em', margin: '10px' }} onClick={() => { pageno === 0 ? setPageNo(pageno) : setPageNo(pageno - 1); init(); }} />
                                <SkipNextIcon style={{ cursor: 'pointer', color: '#fff', backgroundColor: '#dd354d', borderRadius: '50%', fontSize: '2em', margin: '10px' }} onClick={() => { setPageNo(pageno + 1); init(); }} />
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} lg={3} style={{ justifyContent: 'space-around', display: 'flex', flexWrap: 'wrap', color: ' rgba(221,53,77,1)', backgroundColor: 'rgb(248, 197, 69,0.7)', padding: '2%', fontSize: '1.2em', fontFamily: 'Roboto', fontWeight: 'bold', borderBottomRightRadius: 10, borderTopRightRadius: 10 }}>
                            <Grid item sx={4} sm={4} lg={12}>
                                <Grid item xs={12} sm={12} style={{ display: 'flex', flexWrap: 'wrap', color: '#fff', justifyContent: 'space-between' }}>
                                    {name}
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <img src={avatar === "response" ? "./images/avatar.jpg" : avatar} style={{ border: '5px solid #fff', width: '100%', height: '27vh' }} alt="alt"></img>
                                </Grid>
                            </Grid>
                            <Grid item sx={7} sm={7} lg={12}>
                                <Grid item xs={12} sm={12}>
                                    <Grid item xs={12} style={{ paddingTop: '5%' }}>Address</Grid>
                                    <Grid item xs={12} style={{ padding: '1% 0 5% 3%', fontSize: '85%', color: 'rgba(60,60,60,0.5)' }}>{address}</Grid>
                                </Grid>
                                <Grid item xs={12} sm={12}>
                                    <CssTextField
                                        label="Profile"
                                        variant="outlined"
                                        id="custom-css-outlined-input"
                                        style={{ width: '100%', marginBottom: '5%' }}
                                        multiline
                                        rows={5}
                                        value={profile !== null ? profile : ""}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={12} style={{ textAlign: 'center', display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                    <button name={chefid} style={{ backgroundColor: '#DD354D', width: '120px', height: '4vh', borderRadius: '35px', border: '2px solid #fff', fontFamily: 'Roboto', fontSize: '1em', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }} onClick={food_view} >Food Order...</button>
                                    <button name={chefid} style={{ backgroundColor: '#DD354D', width: '120px', height: '4vh', borderRadius: '35px', border: '2px solid #fff', fontFamily: 'Roboto', fontSize: '1em', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }} onClick={handleClickOpen} >Reviews ({reviewdata.length})</button>
                                </Grid>
                            </Grid>

                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </StyledContainer >
    );
}


function mapStateToProps(state) {
    return {
        email: state.email,
        id: state.id,
        per_food_id_flag: state.food_per_id_flag,
        chef_id: state.chef_id
    };
}
const mapDispatchToProps = {
    ChangeEmail,
    ChangeID,
    ChangeChefName,
    ChangeChefEmail,
    ChangeChefID,
    ChangePerFoodId
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);