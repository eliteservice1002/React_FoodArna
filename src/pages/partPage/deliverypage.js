import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import { StyledContainer, OpacityLayer } from "./partPageStyle";
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import './commonStyle.css';
import { useHistory } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Snack from './component/snackbar';
import axios from 'axios';
import Rating from '@material-ui/lab/Rating';
import Pagination from '@material-ui/lab/Pagination';
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
import {
    makeStyles,
    useTheme,
} from '@material-ui/core/styles';

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
    const history = useHistory();
    const [data, setData] = useState([]);
    const [alert, setAlert] = useState("");
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    // modal end
    const init = () => {
        const data = {
            id: props.id
        };
        fetch("http://localhost/api/orders/delystate", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(function (res) {
                setData(res);
                setPageNumber(Math.ceil(res.length / 8));
            })

    }
    useEffect(() => {
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
    // image zoom effect start
    const imgsytle1 = {
        backgroundImage: `url(${"http://localhost/"})`,
        backgroundPosition: '0% 0%'
    };

    const [imgsytle, setImgStyle] = useState(imgsytle1);

    //   image zoom effect end
    const [order_id, setDelyId] = useState("");
    const [dely_state, setDelyState] = useState("");
    const [rating, setRating] = useState("");

    const Readmore = (e) => {
        setDelyId(e.target.name);
        const data = {
            order_id: e.target.name
        };
        axios.post('http://localhost/api/orders/findone', data)
            .then(function (res) {
                setDelyState(res.data[0].delivery_state);
                document.getElementById('btn_dialog').click();
            })
    }
    const confirm = (e) => {
        const orderid = e.target.name;
        const data1 = {
            order_id: orderid
        };
        axios.post('http://localhost/api/orders/findone', data1)
            .then(function (res) {
                if (res.data[0].delivery_state === true) {
                    const data = {
                        order_id: orderid,
                        delivery_state: 2
                    };
                    axios.put('http://localhost/api/orders/update', data)
                        .then(function (res) {
                            handleClose();
                            init();
                            setAlert("Checked");
                            document.getElementById('snack_success').click();
                        })
                }
                if (res.data[0].delivery_state === 2) {
                    setAlert("Delivering...!");
                    document.getElementById('snack_info').click();
                }
                if (res.data[0].delivery_state === 3) {
                    setAlert("Delivered!");
                    document.getElementById('snack_info').click();
                }
            })

    }
    const deleting = () => {
        if (dely_state === 3) {
            const data = {
                order_id: order_id,
                delivery_state: 4
            };
            axios.put('http://localhost/api/orders/update', data)
                .then(function (res) {
                    handleClose();
                    init();
                    setAlert("Deleted");
                    document.getElementById('snack_success').click();
                })
        }
        else {
            setAlert("Buyer did not check.");
            document.getElementById('snack_info').click();
        }
    }
    return (
        <StyledContainer>
            <div>
                <Button variant="outlined" color="primary" onClick={handleClickOpen} style={{ display: 'none' }} id="btn_dialog">
                    Open alert dialog
                </Button>
                <Dialog
                    open={open}
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
            <Snack alert={alert} />
            <OpacityLayer background='foodlist' />
            <Container fixed style={{ zIndex: 1, backgroundColor: '#fff', padding: '0', borderRadius: '10px' }}>
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
                                    ).map((row, index) => (
                                        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginTop: '4px', borderBottom: '1px solid rgb(248, 197, 69)' }} key={index}>
                                            <div style={{ display: 'flex', flexWrap: 'wrap', width: '90%' }} key={index + 1}>
                                                <div style={{ margin: '0.5% 1%' }} key={index + 2}>
                                                    <img src={"http://localhost/" + row.cuisine_photo} style={{ width: '100px', height: '100px', borderRadius: '12px', cursor: 'pointer' }} alt="alt" key={index + 3}></img>
                                                </div>
                                                <div style={{ fontFamily: 'Roboto', color: '#464646', width: '80%' }} key={index + 4}>
                                                    <div style={{ display: 'flex', color: ' rgba(221,53,77,1)', fontWeight: 'bold', padding: '0.5%' }} key={index + 5}>
                                                        <div key={index + 6}><Rating name="read-only" value={rating} readOnly key={index + 7} /></div>
                                                        <div style={{ margin: '0 1%' }} key={index + 8}>{row.createdAt}</div>
                                                        <div style={{ margin: '0 1%' }} key={index + 9}>{row.cuisine_name}</div>
                                                        <div style={{ margin: '0 1%' }} key={index + 10}>{row.quantity}</div>
                                                    </div>
                                                    <div style={{ display: 'flex', padding: '0.5%', alignItems: 'baseline' }} key={index + 11}>
                                                        <div style={{ fontSize: '125%', fontWeight: 'bold' }} key={index + 12}>Chef Info:</div>
                                                        <div style={{ margin: '0 1%' }} key={index + 13}>{row.chef_name}</div>
                                                        <div style={{ margin: '0 1%' }} key={index + 14}>{row.chef_address}</div>
                                                        <div style={{ margin: '0 1%' }} key={index + 15}>{row.chef_city}</div>
                                                        <div style={{ margin: '0 1%' }} key={index + 16}>{row.chef_country}</div>
                                                        <div style={{ margin: '0 1%' }} key={index + 17}>{row.chef_postcode}</div>
                                                    </div>
                                                    <div style={{ display: 'flex', padding: '0.5%', alignItems: 'baseline' }} key={index + 18}>
                                                        <div style={{ fontSize: '125%', fontWeight: 'bold' }} key={index + 19}>Buyer Info:</div>
                                                        <div style={{ margin: '0 1%' }} key={index + 20}>{row.buyer_name}</div>
                                                        <div style={{ margin: '0 1%' }} key={index + 21}>{row.address}</div>
                                                        <div style={{ margin: '0 1%' }} key={index + 22}>{row.city}</div>
                                                        <div style={{ margin: '0 1%' }} key={index + 23}>{row.country}</div>
                                                        <div style={{ margin: '0 1%' }} key={index + 24}>{row.postcode}</div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div style={{ alignSelf: 'center' }} key={index + 25}>
                                                <img src={row.delivery_state === true ? "./images/partPage/btn_dely_accept.png" : row.delivery_state === 2 ? "./images/partPage/btn_dely_delivering.png" : "./images/partPage/btn_dely_complete.png"} alt="alt" style={{ cursor: 'pointer' }} name={row.id} onClick={row.delivery_state === 3 ? Readmore : confirm} key={index + 26} />
                                            </div>
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
export default connect(mapStateToProps)(OrderStatus);