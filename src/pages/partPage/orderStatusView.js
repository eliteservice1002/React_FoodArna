import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import { StyledContainer, OpacityLayer } from "./partPageStyle";
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Backdrop from './component/backdrop';
import Snack from './component/snackbar';
import Pagination from '@material-ui/lab/Pagination';
// table no search start
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
// table no search end
import { ChangePerQuantity, ChangePerCost } from '../../reducers/action';
import {
    makeStyles,
    useTheme,
} from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    wflex: {
        flexWrap: 'wrap',
    },
    center: {
        textAlign: 'center',
        padding: '0px'
    },
    subtitle: {
        color: '#3C4858',
        fontSize: '130%',
        fontWeight: '500'
    },
    subcontent: {
        fontWeight: '400'
    },
    top_header: {
        fontFamily: 'Roboto',
        fontSize: '350%',
        color: '#3C4858',
        textAlign: 'left',
        fontWeight: 'bold',
        position: 'relative',
        top: '-3.7%',
        height: '12.628%',
        backgroundColor: '#F8C545'
        // boxShadow: '0px 10px 5px 2px rgba(0, 0, 0, 0.12), 0px 10px 5px 2px rgba(0, 0, 0, 0.12), 0px 10px 5px 2px rgba(0, 0, 0, 0.12)'
    },
    header: {
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: '130%',
        color: '#3C4858',
        padding: '20px'
    },
    btn: {
        backgroundColor: ' rgba(221,53,77,1)',
        color: '#FCD652',
        fontWeight: 'bold',
        fontFamily: 'Roboto',
        marginRight: '5%',
        marginLeft: '5%'
    },
    ellipsis: {
        color: 'rgb(0, 0, 0)',
        width: '20%',
        margin: '0px 1%',
        // height: '41px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        maxWidth: '700px',
        float: 'left'
    },
    firstButton: {
        border: 'none',
        cursor: 'pointer',
        height: '30px',
        width: '55px',
        backgroundColor: '#fff',
        borderRight: '1px solid red'
    },
    secondButton: {
        border: 'none',
        cursor: 'pointer',
        height: '30px',
        width: '55px',
        backgroundColor: '#fff',
        borderLeft: '1px solid red'
    },
    delyHome: {
        width: '70%',
        marginBottom: '8%',
        cursor: 'pointer',
        "&:hover": {
            width: '80%'
        },
    },
    delySelf: {
        width: '70%',
        cursor: 'pointer',
        "&:hover": {
            width: '80%'
        },
    },
    // modal start
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    paper: {
        backgroundColor: theme.palette.background.paper,
        // border: '2px solid #464646',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        textAlign: 'center',
        width: '100%'
    },
    // modal end

    fiexed: {
        zIndex: 1,
        backgroundColor: '#fff',
        padding: '0',
        borderRadius: '10px',
        "@media(max-width:1279px)": {
            minWidth: '100%'
        }
    },
    foodinfoDiv: {
        display: 'flex',
        flexWrap: 'wrap',
        alignItems: 'center',
        "@media(max-width:1020px)": {
            minWidth: '100%'
        }
    },
    effectPadding: {
        "@media(max-width:768px)": {
            minWidth: '60px'
        }
    },
    pagination: {
        width: '30%',
        margin: '1.5% auto',
        "@media(max-width:635px)": {
            width: '100%'
        }
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
function OrderStatus(props) {
    let localState = localStorage.getItem('user');
    if (localState && typeof JSON.parse(localState) === 'object') {
        localState = JSON.parse(localState);
    }

    let localStateCartId = localStorage.getItem(localState.data.userId + "-Cartid");
    let localStateCartImg = localStorage.getItem(localState.data.userId + "-Cartimg");
    let localStateCartName = localStorage.getItem(localState.data.userId + "-Cartname");
    let localStateCartPrice = localStorage.getItem(localState.data.userId + "-Cartprice");
    let localStateCartQuantity = localStorage.getItem(localState.data.userId + "-Cartquantity");
    let localStateCartAddress = localStorage.getItem(localState.data.userId + "-Cartaddress");

    const history = useHistory();
    const classes = useStyles();
    const [alert, setAlert] = useState("");
    const [Foodid, setFoodid] = React.useState([]);
    const [Foodname, setFoodname] = React.useState([]);
    const [Foodquantity, setFoodquantity] = React.useState([]);
    const [Foodimg, setFoodimg] = React.useState([]);
    const [Foodprice, setFoodprice] = React.useState([]);
    const [Foodaddress, setFoodaddress] = React.useState([]);
    const [flag, setFlag] = React.useState(true);

    const init = async () => {
        let idobj = JSON.parse(localStateCartId);
        let imgobj = JSON.parse(localStateCartImg);
        let nameobj = JSON.parse(localStateCartName);
        let quantityobj = JSON.parse(localStateCartQuantity);
        let priceobj = JSON.parse(localStateCartPrice);
        let addressobj = JSON.parse(localStateCartAddress);
        let arr_id = [];
        let arr_img = [];
        let arr_name = [];
        let arr_quantity = [];
        let arr_price = [];
        let arr_address = [];
        if (idobj) {
            await Object.values(idobj).map(function (key) {
                if (key !== "A") {
                    arr_id.push(key);
                    arr_img.push(imgobj[key]);
                    arr_name.push(nameobj[key]);
                    arr_quantity.push(quantityobj[key]);
                    arr_price.push(priceobj[key]);
                    arr_address.push(addressobj[key]);
                }
            });

            await setFoodid(arr_id);
            await setFoodimg(arr_img);
            await setFoodname(arr_name);
            await setFoodquantity(arr_quantity);
            await setFoodprice(arr_price);
            await setFoodaddress(arr_address);
            setPageNumber(Math.ceil(arr_name.length / 5));
        }
    }
    useEffect(() => {
        init();
    }, [flag]);

    // table no search start
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [pagenumber, setPageNumber] = useState(0);

    const handleChangePage = (event, newPage) => {
        setPage(newPage - 1);
    };

    // table no search end
    const confirm = () => {
        history.push('/orderConfirmation');
    }

    const handleOnChangeQuantity = (e) => {
        if (e.target.value !== 0) {
            let quantitydata = localStorage.getItem(localState.data.userId + "-Cartquantity");
            if (quantitydata) {
                let total_price = 0;
                let obj = JSON.parse(quantitydata);
                let quantityobj = JSON.parse(localStateCartQuantity);
                let priceobj = JSON.parse(localStateCartPrice);
                Object.keys(obj).map(function (key) {
                    if (key === e.target.name) {
                        document.getElementById('btn_backdrop').click();
                        history.push('/profile1');
                        if (e.target.id === "pul") {
                            obj[key] = obj[key] + 1;
                            localStorage.setItem(localState.data.userId + '-Cartquantity', JSON.stringify(obj));
                            ChangePerQuantity(props.total_quantity + 1);
                            setTimeout(function () {
                                history.push('/orderStatus');
                                // document.getElementById('btn_backdrop').click();
                            }, 1000);
                        }
                        if (e.target.id === "min") {
                            obj[key] = obj[key] - 1;
                            localStorage.setItem(localState.data.userId + '-Cartquantity', JSON.stringify(obj));
                            ChangePerQuantity(props.total_quantity - 1);
                            setTimeout(function () {
                                history.push('/orderStatus');
                                // document.getElementById('btn_backdrop').click();
                            }, 1000);
                        }
                        if (obj[key] !== "A") {
                            total_price += quantityobj[key] * priceobj[key];
                        }
                        props.ChangePerCost(total_price);
                    }
                });
            }
        }
        if (e.target.value === 0) {
            setAlert("This food has been removed to your cart!");
            document.getElementById('snack_warning').click();
            return;
        }
    }

    const remove = (e) => {
        let iddata = localStorage.getItem(localState.data.userId + '-Cartid');
        let imgdata = localStorage.getItem(localState.data.userId + '-Cartimg');
        let namedata = localStorage.getItem(localState.data.userId + '-Cartname');
        let quantitydata = localStorage.getItem(localState.data.userId + '-Cartquantity');
        let pricedata = localStorage.getItem(localState.data.userId + '-Cartprice');
        let addressdata = localStorage.getItem(localState.data.userId + '-Cartaddress');
        if (iddata) {
            let obj0 = JSON.parse(iddata);
            let obj1 = JSON.parse(imgdata);
            let obj2 = JSON.parse(namedata);
            let obj3 = JSON.parse(quantitydata);
            let obj4 = JSON.parse(pricedata);
            let obj5 = JSON.parse(addressdata);
            if (obj0[e.target.id]) {
                delete obj0[e.target.id];
                delete obj1[e.target.id];
                delete obj2[e.target.id];
                delete obj3[e.target.id];
                delete obj4[e.target.id];
                delete obj5[e.target.id];
            }
            localStorage.setItem(localState.data.userId + '-Cartid', JSON.stringify(obj0));
            localStorage.setItem(localState.data.userId + '-Cartimg', JSON.stringify(obj1));
            localStorage.setItem(localState.data.userId + '-Cartname', JSON.stringify(obj2));
            localStorage.setItem(localState.data.userId + '-Cartquantity', JSON.stringify(obj3));
            localStorage.setItem(localState.data.userId + '-Cartprice', JSON.stringify(obj4));
            localStorage.setItem(localState.data.userId + '-Cartaddress', JSON.stringify(obj5));
        }

        let total_quantity = 0;
        let total_price = 0;
        if (quantitydata) {
            let obj = JSON.parse(quantitydata);
            let quantityobj = JSON.parse(localStateCartQuantity);
            let priceobj = JSON.parse(localStateCartPrice);

            Object.keys(obj).map(function (key) {
                if (obj[key] !== "A") {
                    total_quantity += obj[key];
                    total_price += quantityobj[key] * priceobj[key];
                }
            });
            props.ChangePerQuantity(total_quantity);
            props.ChangePerCost(total_price);
        }

        setTimeout(function () {
            // init();
            setFlag(!flag);
        }, 2000);
    }
    return (
        <StyledContainer>
            <Backdrop />
            <Snack alert={alert} />
            <OpacityLayer background='foodlist' />
            <Container fixed className={classes.fiexed}>
                <Grid container spacing={1} style={{ height: '100%' }}>
                    <Grid item xs={12} sm={12} style={{ height: '800px', display: 'flex', flexWrap: 'wrap' }}>
                        <Grid item xs={12} sm={12} style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <Grid item xs={12} sm={12} style={{ height: '12.628%', backgroundColor: '#F8C545', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', borderTopLeftRadius: 10, borderTopRightRadius: 10 }}>
                                <Grid item xs={4} sm={4} style={{ marginTop: '1%' }}>
                                    <img src={"./images/partPage/shopping_cart_logo.png"} style={{ cursor: 'pointer', marginLeft: '1.5%' }} alt="alt" onClick={() => { history.push("/") }}></img>
                                </Grid>
                                <Grid item xs={3} sm={3} style={{ alignSelf: 'center' }}>
                                    <div style={{ fontSize: '150%', fontFamily: 'Roboto', color: 'rgb(221, 53, 77)', fontWeight: 400 }}>SUBTOTAL: {props.total_cost}SEK</div>
                                </Grid>
                            </Grid>

                            <div style={{ width: '100%' }}>
                                <Grid item xs={12} sm={12} style={{ display: 'flex', flexWrap: 'wrap', margin: '1% 3% 0 3%', justifyContent: 'center' }}>
                                    {Foodname.length !== 0 ? (rowsPerPage > 0
                                        ? Foodname.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        : Foodname
                                    ).map((row, index) => (
                                        <Grid item xs={12} sm={12} style={{ display: 'flex', width: '100%', justifyContent: 'space-between', height: '110px', borderBottom: '1px solid rgb(248, 197, 69)' }} key={index}>
                                            <Grid item xs={11} sm={11} style={{ display: 'flex', flexWrap: 'wrap', width: '90%' }} key={index + 1}>
                                                <Grid item xs={1} sm={1} style={{ margin: '0.5% 1% 0.5% 0' }} key={index + 2}>
                                                    <img src={"https://s3.eu-north-1.amazonaws.com/foodarna/images/items/" + Foodid[index] + "/" + Foodimg[index]} style={{ width: '100px', height: '100px', borderRadius: '12px', cursor: 'pointer' }} alt={Foodid[index]} key={index + 2}></img>
                                                </Grid>
                                                <Grid item xs={10} sm={10} style={{ fontFamily: 'Roboto', color: '#464646', minWidth: '89%', alignSelf: 'center' }} key={index + 3}>
                                                    <Grid item xs={12} sm={12} style={{ display: 'flex', color: ' rgba(221,53,77,1)', fontWeight: 'bold', padding: '0.5%', justifyContent: 'space-between', alignItems: 'center' }} key={index + 4}>
                                                        <Grid item xs={1} sm={1} className={classes.effectPadding} key={index + 5}></Grid>
                                                        <Grid item xs={11} sm={11} style={{ display: 'flex', flexWrap: 'wrap', width: '90%', justifyContent: 'space-between' }} key={index + 6}>
                                                            <Grid item xs={7} sm={7} className={classes.foodinfoDiv} key={index + 7}>
                                                                <div style={{ margin: '0 1%', width: '100%' }} key={index + 8}>{row}</div>
                                                                <div style={{ margin: '0 1%', width: '100%' }} key={index + 9}>{"Store: " + Foodaddress[index]}</div>
                                                            </Grid>
                                                            <Grid item xs={5} sm={5} className={classes.foodinfoDiv} key={index + 10}>
                                                                <div style={{ margin: '0 1%' }} key={index + 11}>{Foodprice[index]} SEK</div>
                                                                <div style={{ margin: '0 1%' }} key={index + 12}>×</div>
                                                                <div style={{ width: '180px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', margin: '0 1%', border: '1px solid  rgba(221,53,77,1)' }} key={index + 13}>
                                                                    <button
                                                                        size="sm"
                                                                        round="true"
                                                                        className={classes.firstButton}
                                                                        name={Foodid[index]} value={Foodquantity[index]} id="min" onClick={handleOnChangeQuantity}
                                                                        style={{ borderRight: '1px solid red' }}
                                                                        key={index + 14}
                                                                    >
                                                                        &mdash;
                                                                    </button>
                                                                    <div style={{ color: " rgba(221,53,77,1)", alignSelf: 'center', fontFamily: 'Roboto' }} key={index + 15}>{Foodquantity[index]}</div>
                                                                    <button
                                                                        size="sm"
                                                                        round="true"
                                                                        className={classes.secondButton}
                                                                        name={Foodid[index]} value={Foodquantity[index]} id="pul" onClick={handleOnChangeQuantity}
                                                                        style={{ borderLeft: '1px solid red' }}
                                                                        key={index + 16}
                                                                    >
                                                                        &#xff0b;
                                                                    </button>
                                                                </div>
                                                                <div style={{ margin: '0 1%' }} key={index + 17}>=</div>
                                                                <div style={{ margin: '0 1%' }} key={index + 18}>{Foodquantity[index] * Foodprice[index]} SEK</div>
                                                            </Grid>
                                                        </Grid>
                                                    </Grid>
                                                </Grid>
                                            </Grid>
                                            <Grid item xs={1} sm={1} style={{ alignSelf: 'center', textAlign: 'right' }} id={Foodid[index]} onClick={remove}>
                                                {/* <DeleteForeverIcon style={{ width: '30%' }} id={Foodid[index]} onClick={remove} style={{ cursor: 'pointer' }} /> */}
                                                <img src="./images/partPage/delete_icon.png" alt="delete_icon.png" style={{ width: 30, height: 30, cursor: 'pointer' }} id={Foodid[index]} onClick={remove} />
                                            </Grid>
                                        </Grid>
                                    )) :
                                        <div style={{ color: ' rgba(221,53,77,1)', fontFamily: 'Roboto', fontSize: '250%', width: '900px', textAlign: 'center' }}>Search result empty !</div>
                                    }

                                </Grid>
                            </div>
                            <Grid item xs={12} sm={12} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
                                <Pagination count={pagenumber} color="primary" showFirstButton showLastButton onChange={handleChangePage} className={classes.pagination} />
                                <Button variant="outlined" className="item-add-button" style={{ borderRadius: '25px', height: '40px', width: '200px', margin: '1.5% 3% 0 0', color: '#fff' }} onClick={() => { history.push('/onlinefoodlist') }}>Continue Shopping</Button>
                                <Button variant="outlined" className="item-add-button" style={{ borderRadius: '25px', height: '40px', width: '150px', margin: '1.5% 3% 0 0', color: '#fff' }} onClick={confirm}>Place order</Button>
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
        id: state.id,
        total_quantity: state.food_per_quantity,
        total_cost: state.food_per_price,
    };
}
const mapDispatchToProps = {
    ChangePerQuantity,
    ChangePerCost
};
export default connect(mapStateToProps, mapDispatchToProps)(OrderStatus);