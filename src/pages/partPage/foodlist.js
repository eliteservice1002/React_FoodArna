import React, { useState, useEffect } from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import './commonStyle.css';
import AddIcon from './component/addIcon';
import Button from '@material-ui/core/Button';
import { StyledContainer, OpacityLayer } from "./partPageStyle";
import { useHistory } from 'react-router-dom'
import Checkbox from '@material-ui/core/Checkbox';
import TextField from '@material-ui/core/TextField';
import { connect } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import Snack from './component/snackbar';
import $ from 'jquery';
import {
    withStyles,
    makeStyles,
    useTheme,
} from '@material-ui/core/styles';
import { ChangeEmail, ChangeID } from "../../reducers/action";
import ApiConfig from '../../config/api_config';

// table no search start
import PropTypes from 'prop-types';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
// table no search end
import FixedTextField from './component/FixedTextField';
import { read } from 'fs';
const CssTextField = withStyles({
    root: {
        '& label': {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '100%',
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
const file = [
    'setphoto1',
    'setphoto2',
    'setvideo',
];

const addIcon = [
    './images/partPage/social/camera2.svg',
    './images/partPage/social/camera2.svg',
    './images/partPage/social/camera1.svg'
];

const addIconTitle = [
    'Add Photo', 'Add Photo', 'Add Video'
];
const useStyles = makeStyles((theme) => ({
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
    header: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '100%',
        color: 'rgba(60, 60, 60, 1)',
        fontFamily: 'Roboto',
        padding: '20px'
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
    ellipsis: {
        width: '10%',
        margin: '0 auto',
        padding: '10px',

        height: '20px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
    },
    // date start
    container: {
        // display: 'flex',
        // flexWrap: 'wrap',
        // width: '100%'
        zIndex: 1, backgroundColor: '#fff', padding: '2%', borderRadius: '10px',
        "@media (max-width: 1279px)": { minWidth: '100%', height: '100vh' }
    },
    foodlist: {
        borderRight: '1px solid #c8c8c8', paddingRight: '3%', margin: 'auto',
        borderRight: 'initial',
        "@media (max-width: 1110px)": { minWidth: '80%' }
    },
    foodimg: {
        width: '100%', height: '80px', cursor: 'pointer', borderRadius: '50%',
        "@media (max-width: 1110px)": { width: '85px' }
    },
    foodedtDiv: {
        alignSelf: 'center', fontColor: 'rgba(60, 60, 60, 1) !important', fontFamily: 'Roboto', fontSize: '90%', paddingLeft: '3%', paddingLeft: '4vw !important',
        "@media (max-width: 1110px)": { minWidth: '80%', margin: 'auto', marginTop: '5%' }
    },
    csstext: {
        marginTop: '30px', marginBottom: '30px', fontSize: '22px',
        "@media (max-width: 935px)": { minWidth: '100%' }
    },
    textField: {
        marginLeft: theme.spacing(1),
        marginRight: theme.spacing(1),
        width: '100%'
        // width: 200,
    },
    //   date end
    // select start
    formControl: {
        width: '100% '
    },
    selectEmpty: {
        marginTop: theme.spacing(2),
    },
    //   select end
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

    const history = useHistory();
    const [cuisine_name, setcusineName] = useState("");
    const [portion, setportion] = useState("");
    const [quantity, setquantity] = useState("");
    const [quantityunit, setquantityunit] = useState("");
    const [per_price, setperPrice] = useState("");
    const [ingredient, setingredient] = useState("");
    const [food_safety, setfoodSafety] = useState("");
    const [food_id, setFoodId] = useState("");
    const [alert, setalert] = useState("");
    const [status, setStatus] = useState("");
    const [pending_checked, setpending] = useState(false);
    const [active_checked, setactive] = useState(false);
    const [disabled_checked, setdisabled] = useState(false);
    const [photo1, setPhoto1] = useState("");
    const func_date = (event) => {
        switch (event.target.name) {
            case "setphoto1":
                setPhoto1(event.target.files[0]);
                // var form = new FormData();
                // form.append("files", event.target.files[0]);

                // var settings = {
                //     "url": ApiConfig.url + "/api/item/image/" + food_id,
                //     "method": "POST",
                //     "timeout": 0,
                //     headers: {
                //         "Accept": "application/json",
                //         "Authorization": localState.authToken,
                //     },
                //     "processData": false,
                //     "mimeType": "multipart/form-data",
                //     "contentType": false,
                //     "data": form
                // };

                // $.ajax(settings).done(function (response) {
                //     setalert("Succefully image upload.");
                //     document.getElementById('snack_success').click();
                //     init();
                // });
                break;
            // case "setphoto2":
            //     const data1 = new FormData()
            //     data1.append('file', event.target.files[0]);
            //     if (props.email !== undefined && props.email !== "") {
            //         axios.post("http://localhost/upload", data1)
            //             .then(res => {
            //                 setphoto2(res.data.filename);
            //             })
            //     }
            //     else {
            //         setalert("Please proceed to Login.")
            //         document.getElementById('snack_error').click();
            //     }
            //     break;
            // case "setvideo":
            //     const data2 = new FormData()
            //     data2.append('file', event.target.files[0]);
            //     if (props.email !== undefined && props.email !== "") {
            //         axios.post("http://localhost/upload", data2)
            //             .then(res => {
            //                 setvideo(res.data.filename);
            //             })
            //     }
            //     else {
            //         setalert("Please proceed to Login.")
            //         document.getElementById('snack_error').click();
            //     }
            //     break;
            default:
        }
    }
    const classes = useStyles();
    const [fooddata, setFooddata] = useState([]);

    const init = () => {
        var settings = {
            "url": ApiConfig.url + "/api/item/chef/" + localState.data.chefId,
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json",
                "Authorization": localState.authToken
            },
        };

        $.ajax(settings).done(function (response) {
            setFooddata(response);
            setFoodId(response[0].id);
            setcusineName(response[0].name);
            setportion(response[0].portion);
            setquantity(response[0].originalQuantity);
            setquantityunit(response[0].ingredients[1]);
            setperPrice(response[0].price);
            if (response[0].status === "PENDING") {
                setpending(true);
                setStatus("PENDING");
            }
            if (response[0].status === "ACTIVE") {
                setactive(true);
                setStatus("ACTIVE");
            }
            if (response[0].status === "DISABLED") {
                setdisabled(true);
                setStatus("DISABLED");
            }
            setingredient(response[0].ingredients[0]);
            setfoodSafety(response[0].description);
            setPageNumber(Math.ceil(response.length / 5));
        });

    }
    useEffect(() => {
        init();
    }, []);

    const handleOnChangeCuisine = (e) => {
        setcusineName(e.target.value);
    }
    const handleOnChangePortion = (e) => {
        setportion(e.target.value);
    }
    const handleOnChangeQuantity = (e) => {
        setquantity(e.target.value);
    }
    const handleOnChangeQuantityUnit = (e) => {
        setquantityunit(e.target.value);
    }
    const handleOnChangePrice = (e) => {
        setperPrice(e.target.value);
    }
    const handleOnChangeIngredient = (e) => {
        setingredient(e.target.value);
    }
    const handleOnChangeSafety = (e) => {
        setfoodSafety(e.target.value);
    }
    const change_status = (e) => {
        if (e.target.value === "PENDING") {
            setpending(true);
            setactive(false);
            setdisabled(false);
            setStatus(e.target.value);
        }
        if (e.target.value === "ACTIVE") {
            setpending(false);
            setactive(true);
            setdisabled(false);
            setStatus(e.target.value);
        }
        if (e.target.value === "DISABLED") {
            setpending(false);
            setactive(false);
            setdisabled(true);
            setStatus(e.target.value);
        }
    }

    const updating = () => {
        var settings = {
            "url": "https://ec2-18-218-85-172.us-east-2.compute.amazonaws.com:8080/api/item/image/" + food_id,
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json",
                "Authorization": localState.authToken
            },
        };

        $.ajax(settings).done(function (response) {
            if (response !== "") {
                if (photo1 !== "") {
                    var form = new FormData();
                    form.append("files", photo1);

                    var settings = {
                        "url": ApiConfig.url + "/api/item/image/" + food_id,
                        "method": "POST",
                        "timeout": 0,
                        headers: {
                            "Accept": "application/json",
                            "Authorization": localState.authToken,
                        },
                        "processData": false,
                        "mimeType": "multipart/form-data",
                        "contentType": false,
                        "data": form
                    };

                    $.ajax(settings).done(function (response) {
                        setalert("Succefully image upload.");
                        document.getElementById('snack_success').click();
                        init();
                    });
                }

                const data = {
                    "itemId": food_id,
                    "name": cuisine_name,
                    "description": food_safety,
                    "status": status,
                    "ingredients": [
                        ingredient,
                        quantityunit
                    ],
                    "steps": [
                    ],
                    "price": per_price
                }
                var settings = {
                    "url": ApiConfig.url + "/api/item",
                    "method": "PUT",
                    "timeout": 0,
                    "headers": {
                        "Content-Type": "application/json",
                        "Authorization": localState.authToken,
                    },
                    "data": JSON.stringify(data),
                };

                $.ajax(settings).done(function (response) {
                    var settings = {
                        "url": ApiConfig.url + "/api/item",
                        "method": "GET",
                        "timeout": 0,
                        "headers": {
                            "Content-Type": "application/json",
                            "Authorization": localState.authToken
                        },
                    };

                    $.ajax(settings).done(function (response) {
                        setFooddata(response);
                    })
                    setalert("It was updated successfully!");
                    document.getElementById('snack_success').click();
                });
            }
            else {
                setalert("Please add photo!");
                document.getElementById('snack_warning').click();
            }
        });
    }
    const food_view = (e) => {
        setFoodId(e.target.name);
        var settings = {
            "url": ApiConfig.url + "/api/item/" + e.target.name,
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json",
                "Authorization": localState.authToken,
            },
        };

        $.ajax(settings).done(function (response) {
            setFoodId(response.id);
            setcusineName(response.name);
            setportion(response.portion);
            setquantity(response.originalQuantity);
            setquantityunit(response.ingredients[1]);
            setperPrice(response.price);
            if (response.status === "PENDING") {
                setpending(true);
                setactive(false);
                setdisabled(false);
                setStatus("PENDING");
            }
            if (response.status === "ACTIVE") {
                setpending(false);
                setactive(true);
                setdisabled(false);
                setStatus("ACTIVE");
            }
            if (response.status === "DISABLED") {
                setpending(false);
                setactive(false);
                setdisabled(true);
                setStatus("DISABLED");
            }
            setingredient(response.ingredients[0]);
            setfoodSafety(response.description);
        });
    }
    // table no search start
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [pagenumber, setPageNumber] = useState(0);

    const handleChangePage = (event, newPage) => {
        console.log(newPage);
        setPage(newPage - 1);
    };

    // table no search end


    return (
        <StyledContainer>
            <Snack alert={alert} />
            <OpacityLayer background='foodlist' />
            <Container fixed className={classes.container}>
                <Grid item xs={12} style={{ textAlign: 'center', color: ' rgba(221,53,77,1)', fontFamily: 'Roboto', fontSize: '250%', fontWeight: '500', marginBottom: '3%', cursor: 'pointer' }} onClick={() => { history.push('/') }}>Re-Sell from older menu</Grid>
                <Grid container spacing={1} style={{ color: 'rgba(60, 60, 60, 1)', fontFamily: 'Roboto', fontSize: '130%' }}>
                    <Grid item xs={12} sm={4} className={classes.foodlist}>
                        <TableContainer component={Paper}>
                            <Table aria-label="custom pagination table">
                                <TableBody>
                                    <TableRow>
                                        <TableCell className={classes.header}>Food</TableCell>
                                        <TableCell className={classes.header}>Name</TableCell>
                                    </TableRow>
                                    {(rowsPerPage > 0
                                        ? fooddata.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        : fooddata
                                    ).map((row, index) => (
                                        <TableRow key={row.id}>
                                            <TableCell style={{ width: '30%' }} key={index}>
                                                <img src={row.itemImages[0] !== undefined ? "https://s3.eu-north-1.amazonaws.com/foodarna/images/items/" + row.id + "/" + row.itemImages[0] : "./images/food_empty.jpg"} className={classes.foodimg} name={row.id} onClick={food_view} alt="" key={index + 1}></img>
                                            </TableCell>
                                            <TableCell style={{ textAlign: 'center' }} key={index + 2}>
                                                <div style={{ color: "#464646", fontFamily: 'Roboto', fontSize: '100%' }} key={index + 3}>
                                                    {row.name}
                                                </div>
                                            </TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                                <TableFooter>
                                    <TableRow>
                                        <TableCell colSpan={3}>
                                            <Pagination count={pagenumber} color="primary" showFirstButton showLastButton onChange={handleChangePage} />
                                        </TableCell>
                                    </TableRow>
                                </TableFooter>
                            </Table>
                        </TableContainer>
                    </Grid>
                    <Grid item xs={12} sm={8} className={classes.foodedtDiv}>
                        <Grid container spacing={1}>
                            <Grid item xs={12} sm={12}>
                                <Grid item xs={7} style={{ justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap', margin: 'auto' }}>
                                    {
                                        addIcon.map((val, index) => {
                                            return (<AddIcon src={val} title={addIconTitle[index]} alt='alt' id_val={file[index]} onchange={func_date} key={index} />);
                                        })
                                    }
                                </Grid>
                                <Grid item xs={12} style={{ marginTop: '30px', justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap' }}>
                                    <div style={{ width: "45%" }}>
                                        <h3>Cuisine Name</h3>
                                        <TextField id="standard-search" type="search" value={cuisine_name} onChange={handleOnChangeCuisine} style={{ width: '100%' }} />
                                    </div>
                                    <div style={{ width: "45%" }}>
                                        <h3>Portion</h3>
                                        <FormControl className={classes.formControl}>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                value={portion}
                                                disabled
                                                defaultValue="plate"
                                                onChange={handleOnChangePortion}
                                            >
                                                <MenuItem value={'plate'}>plate</MenuItem>
                                                <MenuItem value={'bole'}>bole</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                </Grid>
                                <Grid item xs={12} style={{ marginTop: '30px', justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap' }}>
                                    <div style={{ width: "45%" }}>
                                        <h3>Quantity</h3>
                                        <div style={{ display: 'flex' }}>
                                            <TextField
                                                id="outlined-number"
                                                type="number"
                                                InputLabelProps={{
                                                    shrink: true,
                                                }}
                                                disabled
                                                value={quantity}
                                                onChange={handleOnChangeQuantity}
                                            />
                                            <FormControl className={classes.formControl}>
                                                <Select
                                                    labelId="demo-simple-select-label"
                                                    id="demo-simple-select"
                                                    value={quantityunit}
                                                    defaultValue={quantityunit}
                                                    onChange={handleOnChangeQuantityUnit}
                                                >
                                                    <MenuItem value={'gms'}>Grams (gms)</MenuItem>
                                                    <MenuItem value={'kgs'}>Kilograms (kgs)</MenuItem>
                                                    <MenuItem value="lb">Pounds (lb)</MenuItem>
                                                    <MenuItem value="ml">Mililiter (ml)</MenuItem>
                                                    <MenuItem value="l">Litre (l)</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </div>
                                    </div>
                                    <div style={{ width: "45%" }}>
                                        <h3>Price</h3>
                                        <TextField
                                            id="outlined-number"
                                            type="number"
                                            InputLabelProps={{
                                                shrink: true,
                                            }}
                                            value={per_price}
                                            style={{ width: '100%' }}
                                            onChange={handleOnChangePrice}
                                        />
                                    </div>
                                </Grid>
                                <Grid item xs={12} style={{ marginTop: '30px', fontSize: '22px' }}>
                                    <h5>Status</h5>
                                    <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                        <div style={{ display: 'flex' }}>
                                            <div style={{ fontSize: '70%', fontFamily: 'Roboto', alignSelf: 'center' }}>PENDING</div>
                                            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} value="PENDING" onChange={change_status} checked={pending_checked} />
                                        </div>
                                        <div style={{ display: 'flex' }}>
                                            <div style={{ fontSize: '70%', fontFamily: 'Roboto', alignSelf: 'center' }}>ACTIVE</div>
                                            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} value="ACTIVE" onChange={change_status} checked={active_checked} />
                                        </div>
                                        <div style={{ display: 'flex' }}>
                                            <div style={{ fontSize: '70%', fontFamily: 'Roboto', alignSelf: 'center' }}>DISABLED</div>
                                            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} value="DISABLED" onChange={change_status} checked={disabled_checked} />
                                        </div>
                                    </div>
                                </Grid>
                                <Grid item xs={12} style={{ marginTop: '30px', fontSize: '22px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                                    <Grid item xs={5} className={classes.csstext}>
                                        <CssTextField
                                            label="Ingredients"
                                            variant="outlined"
                                            id="custom-css-outlined-input"
                                            style={{ width: '100%' }}
                                            size="medium"
                                            multiline
                                            rows={4}
                                            onChange={handleOnChangeIngredient}
                                            value={ingredient}
                                        />
                                    </Grid>
                                    <Grid item xs={5} className={classes.csstext}>
                                        <CssTextField
                                            label="Food Safety (Pick from list)"
                                            variant="outlined"
                                            id="custom-css-outlined-input"
                                            style={{ width: '100%' }}
                                            multiline
                                            rows={4}
                                            onChange={handleOnChangeSafety}
                                            value={food_safety}
                                        />
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Grid>
                        <Grid item xs={12} sm={12} className='centerStyle'>
                            <Button variant="outlined" style={{ margin: '1%', backgroundColor: '#DD354D', color: '#FCD652', width: '30%', height: '45px', borderRadius: '25px', border: '2px solid #DD354D', fontFamily: 'Roboto', fontSize: '140%' }} onClick={() => { history.push('/resell') }} >Back</Button>
                            <Button variant="outlined" style={{ margin: '1%', backgroundColor: '#DD354D', color: '#FCD652', width: '30%', height: '45px', borderRadius: '25px', border: '2px solid #DD354D', fontFamily: 'Roboto', fontSize: '140%' }} onClick={updating} >Update</Button>
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
        id: state.id
    };
}
const mapDispatchToProps = {
    ChangeEmail,
    ChangeID
};
export default connect(mapStateToProps, mapDispatchToProps)(Profile);