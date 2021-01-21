import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import Pagination from '@material-ui/lab/Pagination';
import { useLocation } from "react-router-dom";
import './commonStyle.css';
import { StyledContainer, OpacityLayer } from "./partPageStyle";
import { connect } from 'react-redux';
import Rating from '@material-ui/lab/Rating';
import TextField from '@material-ui/core/TextField';
import Snack from './component/snackbar';
import {
    makeStyles,
    useTheme,
    withStyles,
} from '@material-ui/core/styles';
import { ChangeEmail, ChangeID, ChangeChefID, ChangeChefName, ChangeChefEmail, ChangePerFoodId } from "../../reducers/action";
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
// table no search start
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
// table no search end
const CssTextField = withStyles({
    root: {
        '& label': {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '130%',
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
                border: '1px solid #dd354d',
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
})(TextField);
const useStyles = makeStyles((theme) => ({
    // search css start
    root: {
        padding: '2px 4px',
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        borderRadius: '19px',
        border: '1px solid #DD344C',
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
    const location = useLocation();
    // modal start
    const [chefid, setChefId] = React.useState("");
    const [name, setName] = React.useState("");
    const [phone, setPhone] = React.useState("");
    const [avatar, setAvatar] = React.useState("");
    const [address, setAddress] = React.useState("");
    const [city, setCity] = React.useState("");
    const [country, setCountry] = React.useState("");
    const [postcode, setPostCode] = React.useState("");
    const [profile, setProfile] = React.useState("");
    const [flavor, setFlavor] = React.useState("");
    // modal end
    const history = useHistory();
    const [alert, setalert] = useState("");
    const classes = useStyles();
    const [chefdata, setChefdata] = useState([]);
    const [pagenumber, setPageNumber] = useState(0);
    const init = () => {
        const data = {
            autho_delivery: 1
        };
        fetch("http://localhost/api/users/delySearch", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(function (res) {
                setChefdata(res);
                setChefId(res[0].id);
                setName(res[0].name);
                setPhone(res[0].phone);
                setAvatar(res[0].avatar);
                setAddress(res[0].address);
                setCity(res[0].city);
                setCountry(res[0].country);
                setPostCode(res[0].postcode);
                setProfile(res[0].profile);
                setFlavor(res[0].flavor);
                setPageNumber(Math.ceil(res.length / 8));
            })

    }
    useEffect(() => {
        init();
    }, []);

    const deliver_choose = (e) => {
        console.log("location.state.order_id,:" + location.state.order_id);
        console.log("e.target.name:" + e.target.name);
        const data1 = {
            id: e.target.name
        };
        axios.post('http://localhost/api/users/delyfind', data1)
            .then(function (res) {
                const data = {
                    order_id: location.state.order_id,
                    delivery_id: res.data[0].id,
                    delivery_name: res.data[0].name,
                    delivery_address: res.data[0].address,
                    delivery_city: res.data[0].city,
                    delivery_country: res.data[0].country,
                    delivery_postcode: res.data[0].postcode,
                    delivery_state: true
                };
                axios.put('http://localhost/api/orders/update', data)
                    .then(function (res) {
                        history.push('/orderStatus');
                    })
                    .catch(function (e) {
                        console.log('error');
                    })
            })
            .catch(function (e) {
                console.log('error');
            })
    }
    const searching = (e) => {
        console.log(e.target.value);
        const data = {
            title: e.target.value
        };
        fetch("http://localhost/api/users/findDeliver", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(function (res) {
                setChefdata(res);
            })
    }
    // table no search start
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(8);

    const handleChangePage = (event, newPage) => {
        setPage(newPage - 1);
    };

    // table no search end

    const Readmore = (e) => {
        const data = {
            id: e.target.name
        };
        axios.post('http://localhost/api/users/delyfind', data)
            .then(function (res) {
                setChefId(res.data[0].id);
                setName(res.data[0].name);
                setPhone(res.data[0].phone);
                setAvatar(res.data[0].avatar);
                setAddress(res.data[0].address);
                setCity(res.data[0].city);
                setCountry(res.data[0].country);
                setPostCode(res.data[0].postcode);
                setProfile(res.data[0].profile);
                setFlavor(res.data[0].flavor);
            })
    }

    return (
        <StyledContainer>
            <Snack alert={alert} />
            <OpacityLayer background='foodlist' />
            <Container fixed style={{ zIndex: 1, backgroundColor: '#fff', padding: '0', borderRadius: '10px' }}>
                <Grid container spacing={1} style={{ height: '100%' }}>
                    <Grid item xs={12} sm={12} style={{ height: '800px', display: 'flex', flexWrap: 'wrap' }}>
                        <Grid item xs={9} sm={9} style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <Grid item xs={12} sm={12} style={{ marginRight: '1.5%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', borderBottom: '1px solid  rgba(221,53,77,1)', height: '120px' }}>
                                <Grid item xs={4} sm={4} style={{ alignSelf: 'flex-end' }}>
                                    <img src={"./images/partPage/dely_logo.png"} style={{ width: '100%', height: '78.16%', cursor: 'pointer', marginLeft: '1.5%' }} alt="alt" onClick={() => { history.push('/') }}></img>
                                </Grid>
                                <Grid item xs={5} sm={5} style={{ alignSelf: 'flex-end', paddingBottom: '1%' }}>
                                    <Paper component="form" className={classes.root}>
                                        <IconButton type="submit" className={classes.iconButton} aria-label="search">
                                            <SearchIcon />
                                        </IconButton>
                                        <InputBase
                                            className={classes.input}
                                            placeholder="Search..."
                                            inputProps={{ 'aria-label': 'search google maps' }}
                                            fullWidth
                                            onChange={searching}
                                        />
                                    </Paper>
                                </Grid>
                            </Grid>

                            <div style={{ width: '100%' }}>
                                <Grid item xs={12} sm={12} style={{ display: 'flex', flexWrap: 'wrap' }}>
                                    {chefdata.length !== 0 ? (rowsPerPage > 0
                                        ? chefdata.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        : chefdata
                                    ).map((row,index) => (
                                        <div className={classes.chefitem} key={index}>
                                            <Rating name="read-only" value={row.ranking} readOnly key={index+1} />
                                            <img src={"http://localhost/" + row.avatar} style={{ border: '1px solid  rgba(221,53,77,1)', width: '100%', height: '170px', borderRadius: '44px', cursor: 'pointer' }} name={row.id} value={row.name} onClick={Readmore} alt="alt" className={row.entry_flag === false ? classes.yfilter : classes.nfilter} key={index+2}></img>
                                            <div key={index+3}>{row.name}</div>
                                            <div key={index+4}>{row.phone}</div>
                                        </div>
                                    )) :
                                        <div style={{ color: ' rgba(221,53,77,1)', fontFamily: 'Roboto', fontSize: '250%', width: '900px', textAlign: 'center' }}>Search result empty !</div>
                                    }

                                </Grid>
                            </div>
                            <Grid item xs={12} sm={12}>
                                <Pagination count={pagenumber} color="primary" showFirstButton showLastButton onChange={handleChangePage} style={{ width: '30%', margin: '1.5% auto' }} />
                            </Grid>
                        </Grid>
                        <Grid item xs={3} sm={3} style={{ display: 'flex', flexWrap: 'wrap', color: ' rgba(221,53,77,1)', backgroundColor: '#F8C545', padding: '2%', fontSize: '100%', fontFamily: 'Roboto', fontWeight: 'bold' }}>
                            <Grid item xs={12} sm={12} style={{ display: 'flex', flexWrap: 'wrap', color: '#fff', justifyContent: 'space-between' }}>
                                <Grid item xs={3} sm={3}>{name}</Grid>
                                <Grid item xs={8} sm={8} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'flex-end' }}>
                                    <img src={"./images/partPage/icon2.png"} style={{ width: '30px', height: '30px', cursor: 'pointer', margin: '0 7% 0 0' }} alt="alt"></img>
                                    <div>{phone}</div>
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <img src={"http://localhost/" + avatar} style={{ border: '5px solid #fff', width: '100%', height: '190px' }} alt="alt"></img>
                            </Grid>
                            <Grid item xs={12} sm={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>Address</div>
                                <div>{address}</div>
                            </Grid>
                            <Grid item xs={12} sm={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>City</div>
                                <div>{city}</div>
                            </Grid>
                            <Grid item xs={12} sm={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>Country</div>
                                <div>{country}</div>
                            </Grid>
                            <Grid item xs={12} sm={12} style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <div>Post Code</div>
                                <div>{postcode}</div>
                            </Grid>
                            <Grid item xs={12} sm={12}>
                                <CssTextField
                                    label="Profile"
                                    variant="outlined"
                                    id="custom-css-outlined-input"
                                    style={{ width: '100%', marginBottom: '5%' }}
                                    multiline
                                    rows={5}
                                    value={profile}
                                />
                            </Grid>
                            <Grid item xs={12} sm={12} style={{ textAlign: 'center' }}>
                                <button name={chefid} style={{ backgroundColor: '#DD354D', width: '100%', height: '40px', borderRadius: '35px', border: '2px solid #fff', fontFamily: 'Roboto', fontSize: '110%', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }} onClick={deliver_choose} >H i r e</button>
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
        per_food_id_flag: state.food_per_id_flag
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