import React, { useState, useEffect, Alert } from 'react';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import GridContainer from "./component/Grid/GridContainer.js";
import GridItem from "./component/Grid/GridItem.js";
import Checkbox from '@material-ui/core/Checkbox';
import Snack from './component/snackbar';
import { StyledContainer, OpacityLayer, ImgDivStyled } from "./partPageStyle";
import Container from '@material-ui/core/Container';
import Pagination from '@material-ui/lab/Pagination';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableContainer from '@material-ui/core/TableContainer';
import TableFooter from '@material-ui/core/TableFooter';
import ApiConfig from '../../config/api_config';
import FixedTextField from './component/FixedTextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import KeyboardReturnIcon from '@material-ui/icons/KeyboardReturn';
import { useHistory } from 'react-router-dom';
import PerfectScrollbar from 'react-perfect-scrollbar'

import $ from 'jquery';
const CssTextField = withStyles({
    root: {
        '& label': {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '150%',
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
    root: {
        width: '100%',
    },
    button: {
        marginTop: theme.spacing(1),
        marginRight: theme.spacing(1),
        backgroundColor: '#dd354d',
        borderRadius: 25,
        color: '#fff'
    },
    actionsContainer: {
        marginBottom: theme.spacing(2),
    },
    resetContainer: {
        padding: theme.spacing(3),
    },

    container: {
        position: 'absolute',
        backgroundColor: '#fff',
        borderRadius: 10,
        "@media(max-width:959px)": {
            minWidth: '100%'
        }
    },
}));

function getSteps() {
    return ['Order Confirmation', 'Choose your order type', 'Payment'];
}



export default function VerticalLinearStepper() {
    const history = useHistory();
    const [pagenumber, setPageNumber] = useState(0);
    const [data, setData] = useState([]);
    const [totalprice, setTotalprice] = useState(0);
    let total = 0;

    let localState = localStorage.getItem('user');
    if (localState && typeof JSON.parse(localState) === 'object') {
        localState = JSON.parse(localState);
    }

    let localStateCartId = localStorage.getItem(localState.data.userId + "-Cartid");
    let localStateCartName = localStorage.getItem(localState.data.userId + "-Cartname");
    let localStateCartPrice = localStorage.getItem(localState.data.userId + "-Cartprice");
    let localStateCartQuantity = localStorage.getItem(localState.data.userId + "-Cartquantity");

    const [alert, setAlert] = useState("");
    const [Foodname, setFoodname] = React.useState([]);
    const [Foodquantity, setFoodquantity] = React.useState([]);
    const [Foodprice, setFoodprice] = React.useState([]);
    const [Items, setItems] = React.useState([]);
    const [delystate, setDelyState] = React.useState("");
    const [addressData, setAddressData] = React.useState([]);
    const [address, setAddress] = React.useState("");
    const classes = useStyles();
    const [activeStep, setActiveStep] = React.useState(0);
    const steps = getSteps();
    const [comment, setComment] = React.useState("");
    const [htmlsnippet, setHtmlsnippet] = React.useState("");
    const [script, setScript] = React.useState("");

    const handleChangeComment = (e) => {
        setComment(e.target.value);
    }

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    const checkOut = () => {
        if (delystate === "") {
            setAlert("Choose your order type");
            document.getElementById('snack_warning').click();
        }
        else {
            if (delystate === "DELIVERY" && address === "") {
                setAlert("Choose transporter address");
                document.getElementById('snack_warning').click();
            }
            else {
                var data = {
                    "orderLines": Items,
                    // "orderLines": [
                    //     {
                    //         "itemId": "5ef6afc98adf6a343f856279",
                    //         "quantity": 3
                    //     }
                    // ],
                    "userId": localState.data.userId,
                    "deliveryAddress": address,
                    "comment": comment,
                    "deliveryType": delystate
                }
                var settings = {
                    "url": ApiConfig.url + "/api/klarna/checkout/private/order",
                    "method": "POST",
                    "timeout": 0,
                    "headers": {
                        "Authorization": localState.authToken,
                        "Content-Type": "application/json"
                    },
                    "data": JSON.stringify(data),
                };
                $.ajax(settings).done(function (response) {
                    // console.log("response------------------>", response);
                    setHtmlsnippet(response.html_snippet);
                    let frag = document.createRange().createContextualFragment(response.html_snippet);
                    let firstScript = frag.querySelector('script');
                    setScript(firstScript)
                    // console.log("frag------------------------------>", firstScript);
                    setActiveStep((prevActiveStep) => prevActiveStep + 1);
                    setAddress("");
                    setDelyState("");
                    setComment("");
                    // console.log("checkout----------------->");
                });
            }
        }
    }

    const checkOut_success = () => {
        let originObj = { "a": "A" };
        localStorage.setItem(localState.data.userId + "-Cartid", JSON.stringify(originObj));
        localStorage.setItem(localState.data.userId + "-Cartimg", JSON.stringify(originObj));
        localStorage.setItem(localState.data.userId + "-Cartname", JSON.stringify(originObj));
        localStorage.setItem(localState.data.userId + "-Cartquantity", JSON.stringify(originObj));
        localStorage.setItem(localState.data.userId + "-Cartprice", JSON.stringify(originObj));
        localStorage.setItem(localState.data.userId + "-Cartaddress", JSON.stringify(originObj));
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    }

    const init = async () => {
        let idobj = JSON.parse(localStateCartId);
        let nameobj = JSON.parse(localStateCartName);
        let quantityobj = JSON.parse(localStateCartQuantity);
        let priceobj = JSON.parse(localStateCartPrice);
        let arr_name = [];
        let arr_quantity = [];
        let arr_price = [];
        let jsonArr = [];
        if (idobj) {
            await Object.values(idobj).map(function (key) {
                if (key !== "A") {
                    arr_name.push(nameobj[key]);
                    arr_quantity.push(quantityobj[key]);
                    arr_price.push(priceobj[key]);
                    total += quantityobj[key] * priceobj[key];

                    jsonArr.push({
                        itemId: key,
                        quantity: quantityobj[key]
                    });
                }
            });
            setItems(jsonArr);
            await setFoodname(arr_name);
            await setFoodquantity(arr_quantity);
            await setFoodprice(arr_price);
            await setTotalprice(total);
            setPageNumber(Math.ceil(arr_name.length / 7));
        }
    }
    useEffect(() => {
        init();
    }, []);

    const handleChangeDelyMethod = (e) => {
        if (e.target.value === 'pick')
            setDelyState('PICK_UP');
        if (e.target.value !== 'pick')
            setDelyState('DELIVERY');
    }

    const address_search = (event, value) => {
        var settings = {
            "url": ApiConfig.url + "/api/addressSuggestions?text=" + value,
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json"
            },
        };

        $.ajax(settings).done(function (response) {
            setAddressData(response);
        });
    }

    const address_set = (event, value) => {
        if (value.length !== 0) {
            setAddress(value[0].address);
        }
        else
            setAddress("");
    }

    function getStepContent(step) {
        switch (step) {
            case 0:
                return (
                    <TableContainer component={Paper} style={{ height: '100%', backgroundColor: 'initial', boxShadow: 'none' }}>
                        <Table aria-label="custom pagination table">
                            <TableBody style={{ marginTop: '5%' }}>
                                {
                                    (rowsPerPage > 0
                                        ? Foodname.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        : Foodname
                                    )
                                        .map((row, index) => (
                                            <TableRow key={index}>
                                                <TableCell className={classes.center} key={index + 1}>
                                                    <div style={{ color: "#464646" }} className={classes.subcontent} key={index + 2}>
                                                        {index + 1}.
                                                    </div>
                                                </TableCell>
                                                <TableCell className={classes.center} key={index + 3}>
                                                    <div style={{ color: "#464646", textAlign: 'left' }} className={classes.subcontent} key={index + 4}>
                                                        {row}
                                                    </div>
                                                </TableCell>
                                                <TableCell className={classes.center} key={index + 5}>
                                                    <div style={{ color: "#464646", textAlign: 'left' }} className={classes.subcontent} key={index + 6}>
                                                        {Foodquantity[index]} for {Foodquantity[index] * Foodprice[index]} SEK
                                                    </div>
                                                </TableCell>
                                            </TableRow>
                                        ))
                                }
                            </TableBody>
                            <TableFooter>
                                <TableRow>
                                    <TableCell colSpan={3}>
                                        <div style={{ width: '100%', display: 'flex', flexWrap: 'wrap' }}>
                                            <Pagination count={pagenumber} color="primary" showFirstButton showLastButton onChange={handleChangePage} style={{ width: '50%', margin: 'auto', marginTop: '1.5%', marginBottom: '1.5%' }} />
                                            <div style={{ alignSelf: 'center', color: "#464646", fontSize: '2em', textAlign: 'center', fontWeight: 'bold', width: '50%' }}>Food Total: {totalprice}SEK</div>
                                        </div>
                                    </TableCell>
                                </TableRow>
                            </TableFooter>
                        </Table>
                    </TableContainer>

                );
            case 1:
                return (
                    <GridContainer>
                        <GridItem xs={12} sm={4} md={4} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }} className={classes.authcss}>
                            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} value="pick" checked={delystate === 'PICK_UP' ? true : false} onClick={handleChangeDelyMethod} />
                            <div style={{ color: "#3C4858", fontSize: '170%', margin: '0' }}>
                                Pickup
                            </div>
                        </GridItem>
                        <GridItem xs={12} sm={4} md={4} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }} className={classes.authcss}>
                            <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} value="DELIVERY" checked={delystate === 'DELIVERY' ? true : false} onClick={handleChangeDelyMethod} />
                            <div style={{ color: "#3C4858", fontSize: '170%', margin: '0' }}>
                                Delivery
                            </div>
                        </GridItem>
                        <GridContainer style={{ margin: '2vh 0%' }}>
                            <GridItem xs={12} sm={12} md={12}>
                                <Autocomplete
                                    id="combo-box-demo"
                                    multiple
                                    options={addressData}
                                    getOptionLabel={(option) => option.address}
                                    onInputChange={address_search}
                                    onChange={address_set}
                                    renderInput={(params) => <CssTextField {...params} label="Address *" variant="outlined" />}
                                />
                            </GridItem>
                            <GridItem xs={12} sm={12} md={12} style={{ marginTop: 20 }}>
                                <CssTextField
                                    label="Comment"
                                    variant="outlined"
                                    id="comment"
                                    style={{ width: '100%' }}
                                    multiline
                                    rows={4}
                                    value={comment}
                                    onChange={handleChangeComment}
                                />
                            </GridItem>
                        </GridContainer>
                    </GridContainer>
                );
            case 2:
                return (
                    <iframe
                        X-Frame-Options="Sameorigin"
                        id="responsive-iframe"
                        style={{ width: '100%', height: '500px', border: 'none', overflow: 'hidden' }}
                        srcdoc={htmlsnippet}
                    >
                    </iframe>
                );
            default:
                return 'Unknown step';
        }
    }
    // table no search start
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(7);

    const handleChangePage = (event, newPage) => {
        setPage(newPage - 1);
    };

    return (
        <StyledContainer>
            <Snack alert={alert} />
            <OpacityLayer background='orderConfirm' />
            <Container fixed className={classes.container}>
                <div className={classes.root}>
                    <div style={{ width: '50px', height: '50px', marginLeft: 'auto', marginTop: '10px' }}>
                        <KeyboardReturnIcon style={{ backgroundColor: '#dd354d', color: '#fff', borderRadius: 25, width: '100%', height: '100%', cursor: 'pointer' }} onClick={() => { history.push('/orderStatus') }} />
                    </div>
                    <Stepper activeStep={activeStep} orientation="vertical">
                        {steps.map((label, index) => (
                            <Step key={label}>
                                <StepLabel>{label}</StepLabel>
                                <StepContent>
                                    <div>{getStepContent(index)}</div>
                                    <div className={classes.actionsContainer}>
                                        <div>
                                            <Button
                                                disabled={activeStep === 0}
                                                onClick={handleBack}
                                                className={classes.button}
                                            >
                                                Back
                                            </Button>
                                            <Button
                                                variant="contained"
                                                color="primary"
                                                onClick={activeStep === steps.length - 2 ? checkOut : activeStep === steps.length - 1 ? checkOut_success : handleNext}
                                                className={classes.button}
                                            >
                                                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                                            </Button>
                                        </div>
                                    </div>
                                </StepContent>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length && (
                        <Paper square elevation={0} className={classes.resetContainer}>
                            <Typography>All steps completed - you&apos;re finished</Typography>
                            <Button onClick={() => { history.push('/onlinefoodlist') }} className={classes.button}>
                                Continue Shopping
                            </Button>
                        </Paper>
                    )}
                </div>
            </Container>
        </StyledContainer>
    );
}