import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import { StyledContainer, OpacityLayer } from "./partPageStyle";
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import './commonStyle.css';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Snack from './component/snackbar';
import Pagination from '@material-ui/lab/Pagination';
import ApiConfig from '../../config/api_config';
import $ from 'jquery';
import Backdrop from './component/backdrop';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// table no search start
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
// table no search end
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ChangeOrderData, ChangeOrderImgData } from "../../reducers/action";
import {
    makeStyles,
    useTheme,
} from '@material-ui/core/styles';
const useStyles = makeStyles((theme) => ({
    fixed: {
        zIndex: 1, backgroundColor: '#fff', padding: '0', borderRadius: '10px',
        "@media (max-width: 959px)": { minWidth: '100%' }
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
    const classes = useStyles();

    let localState = localStorage.getItem('user');
    if (localState && typeof JSON.parse(localState) === 'object') {
        localState = JSON.parse(localState);
    }

    const history = useHistory();
    const [data, setData] = useState([]);
    const [itemData, setItemdata] = useState([]);
    const [alert, setAlert] = useState("");
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClickOpen1 = () => {
        setOpen1(true);
    };

    const handleClose = () => {
        setOpen(false);
        setOpen1(false);
    };

    const init = () => {
        var arr = [];
        var itemarr = [];
        var settings = {
            "url": ApiConfig.url + "/api/orders/user/" + localState.data.userId,
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json",
                "Authorization": localState.authToken
            },
        };

        $.ajax(settings).done(function (res) {
            res.map((val, index) => {
                if (val.status === "COMPLETED") {
                    arr.push(val);
                    itemarr.push(val.items);
                }
            })
            setData(arr);
            setItemdata(itemarr);
            setPageNumber(Math.ceil(res.length / 8));
            document.getElementById('btn_backdrop').click();
        });

    }
    useEffect(() => {
        document.getElementById('btn_backdrop').click();
        init();
    }, []);
    // table no search start
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [pagenumber, setPageNumber] = useState(0);

    const handleChangePage = (event, newPage) => {
        setPage(newPage - 1);
    };

    // table no search end
    const [order_id, setDelyId] = useState("");
    const [dely_name, setDelyName] = useState("");
    const [dely_state, setDelyState] = useState("");
    const [rating, setRating] = useState("");

    const Readmore = (e) => {
        document.getElementById('btn_backdrop').click();
        var imgarr = [];
        var settings = {
            "url": ApiConfig.url + "/api/orders/" + e.target.id,
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json",
                "Authorization": localState.authToken
            },
        };

        $.ajax(settings).done(async function (response) {
            console.log(response.message)
            await response.items.map((val, index) => {
                var settings = {
                    "url": ApiConfig.url + "/api/item/image/" + val.itemId,
                    "method": "GET",
                    "timeout": 0,
                    "headers": {
                        "Content-Type": "application/json",
                        "Authorization": localState.authToken
                    },
                };

                $.ajax(settings).done(function (res) {
                    imgarr.push(res);
                });
            })

            await props.ChangeOrderData(response.items);
            await props.ChangeOrderImgData(imgarr);
            setTimeout(function () {
                document.getElementById('btn_backdrop').click();
                history.push('/orderstate', { flag: "buyer" });
            }, 2000)
        });
    }


    const deleting = (e) => {
        console.log(e.target.id)
        let dataa = {
            "ids": [
                e.target.id
            ]
        }
        var settings = {
            "url": ApiConfig.url + "/api/orders",
            "method": "DELETE",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json",
                "Authorization": localState.authToken
            },
            "data": JSON.stringify(dataa),
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
        });

    }
    return (
        <StyledContainer>
            <div>
                <Button variant="outlined" color="primary" onClick={handleClickOpen1} style={{ display: 'none' }} id="btn_dialog1">
                    Open alert dialog
                </Button>
                <Dialog
                    open={open1}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogTitle id="alert-dialog-title">{"Are you sure you want to delete the item?"}</DialogTitle>
                    <DialogContent>
                        <DialogContentText id="alert-dialog-description">
                            To confirm the delete, click Agree and to no confirm the delete click Disagree
                    </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={deleting} color="primary" style={{ color: ' rgba(221,53,77,1)' }}>
                            Agree
                         </Button>
                        <Button onClick={handleClose} color="primary" autoFocus style={{ color: ' rgba(221,53,77,1)' }}>
                            Disagree
                         </Button>
                    </DialogActions>
                </Dialog>

            </div>
            <Backdrop />
            <Snack alert={alert} />
            <OpacityLayer background='foodlist' />
            <Container fixed className={classes.fixed}>
                <Grid container spacing={1} style={{ height: '100%' }}>
                    <Grid item xs={12} sm={12} style={{ height: '800px', display: 'flex', flexWrap: 'wrap' }}>
                        <Grid item xs={12} sm={12} style={{ display: 'flex', flexWrap: 'wrap' }}>
                            <Grid item xs={12} sm={12} style={{ height: '12.628%', backgroundColor: '#F8C545', }}>
                                <Grid item xs={4} sm={4} style={{ marginTop: '1%' }}>
                                    <img src={"./images/partPage/deliverpage_logo.png"} style={{ cursor: 'pointer', marginLeft: '1.5%' }} alt="alt" onClick={() => { history.push("/") }}></img>
                                </Grid>
                            </Grid>

                            <div style={{ width: '100%' }}>
                                <Grid item xs={12} sm={12} style={{ display: 'flex', flexWrap: 'wrap', margin: '1% 2% 0 2%', justifyContent: 'center' }}>
                                    {data.length !== 0 ? (rowsPerPage > 0
                                        ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                        : data
                                    ).map((row) => (
                                        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginTop: '4px', borderBottom: '1px solid rgb(248, 197, 69)' }}>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', width: '90%', justifyContent: 'space-between' }}>
                                                <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'baseline', width: '80%', alignSelf: 'center' }}>
                                                    <div style={{ fontSize: '125%', fontWeight: 'bold' }}>Transport Info:</div>
                                                    <div style={{ margin: '0 1%' }}>Name:{row.transporter.name === null ? "null" : row.transporter.name}</div>
                                                    <div style={{ margin: '0 1%' }}>Phone:{row.transporter.phone === null ? "null" : row.transporter.phone}</div>
                                                    <div style={{ margin: '0 1%' }}>Address:{row.deliveryAddress === null ? "null" : row.deliveryAddress}</div>
                                                    <div style={{ margin: '0 1%' }}>Type:{row.deliveryType === null ? "null" : row.deliveryType}</div>
                                                    <div style={{ margin: '0 1%' }}>Count:{row.items.length}</div>
                                                    <div style={{ margin: '0 1%' }}>DeliveryCharge:{row.deliveryCharge} SEK</div>
                                                    <div style={{ margin: '0 1%' }}>Amount:{row.amount} SEK</div>
                                                </div>
                                                <div style={{ display: 'flex', flexWrap: 'wrap', width: 110, alignItems: 'center' }}>
                                                    <div style={{ margin: '0 1%', cursor: 'pointer', width: '50px' }}><MoreHorizIcon style={{ fontSize: 40, color: '#dd354d' }} id={row.id} onClick={Readmore} /></div>
                                                    <img src="./images/partPage/delete_icon.png" alt="delete_icon.png" style={{ width: 40, height: 40, cursor: 'pointer' }} id={row.id} onClick={deleting} />
                                                </div>
                                            </div>
                                            <div style={{ alignSelf: 'center' }}>
                                                <img src={row.deliveryType === "DELIVERY" ? "./images/partPage/btn_home_dely.png" : "./images/partPage/btn_pick_dely.png"} alt="alt" style={{ cursor: 'pointer' }} name={row.id} onClick={row.delivery_state === 2 ? Readmore : row.delivery_state === 4 ? Readmore : ""} />
                                            </div>
                                        </div>
                                    )) :
                                        <div style={{ color: ' rgba(221,53,77,1)', fontFamily: 'Roboto', fontSize: '250%', width: '900px', textAlign: 'center' }}>Search result empty !</div>
                                    }

                                </Grid>
                            </div>
                            {/* <Grid item xs={12} sm={12}>
                                <Pagination count={pagenumber} color="primary" showFirstButton showLastButton onChange={handleChangePage} style={{ width: '30%', margin: '1.5% auto' }} />
                            </Grid> */}
                            <Grid item xs={12} sm={12} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: 10 }}>
                                <Pagination count={pagenumber} color="primary" showFirstButton showLastButton onChange={handleChangePage} style={{ width: '30%' }} />
                                <Button variant="outlined" className="item-add-button" onClick={() => { history.push('/') }} style={{ width: 128, height: 40, borderRadius: '25px', color: '#fff' }}>Back</Button>
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
        per_cost: state.food_per_price,
        cartVal: state.addCartIcon
    };
}
const mapDispatchToProps = {
    ChangeOrderData,
    ChangeOrderImgData
};
export default connect(mapStateToProps, mapDispatchToProps)(OrderStatus);