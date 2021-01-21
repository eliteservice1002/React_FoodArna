import React, { useEffect, useState } from 'react';
import Container from '@material-ui/core/Container';
import { StyledContainer, OpacityLayer } from "../partPageStyle";
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import '../commonStyle.css';
import { useHistory, useLocation } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import Snack from './snackbar';
import Pagination from '@material-ui/lab/Pagination';
import ApiConfig from '../../../config/api_config';
import $ from 'jquery';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
// table no search start
import PropTypes from 'prop-types';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
// table no search end
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
    const location = useLocation();

    let localState = localStorage.getItem('user');
    if (localState && typeof JSON.parse(localState) === 'object') {
        localState = JSON.parse(localState);
    }

    const history = useHistory();
    const [data, setData] = useState([]);
    const [imgData, setImgdata] = useState([]);
    const [alert, setAlert] = useState("");
    const [open, setOpen] = React.useState(false);
    const [open1, setOpen1] = React.useState(false);

    const handleClose = () => {
        setOpen(false);
        setOpen1(false);
    };

    useEffect(() => {
        console.log('alsdfka;sdfkhasdfaksdfafasdfasdf', props.orderimgData)
        setData(props.orderData);
        setImgdata(props.orderimgData);
        setPageNumber(Math.ceil(props.orderData.length / 8));
    }, []);
    // table no search start
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [pagenumber, setPageNumber] = useState(0);

    const handleChangePage = (event, newPage) => {
        setPage(newPage - 1);
    };

    const redirect = () => {
        if (location.state.flag === "buyer")
            history.push('/orderpage')
        else
            history.push('/orderStat')
    }

    return (
        <StyledContainer>
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
                                    ).map((row, index) => (
                                        <div style={{ display: 'flex', width: '100%', justifyContent: 'space-between', marginTop: '4px', borderBottom: '1px solid rgb(248, 197, 69)', alignItems: 'center' }} key={index}>
                                            <div key={index + 1}>
                                                <img src={imgData[index]} alt={row} key={index + 2} style={{ width: 130, height: 130, borderRadius: '50%' }} />
                                            </div>
                                            <div>Chef Name: {row.chefName}</div>
                                            <div>Cuisine Name: {row.name}</div>
                                            <div>Portion: {row.portion}</div>
                                            <div>Quantity: {row.purchasedQuantity}</div>
                                            <div>Total Amount: {row.totalAmountWithoutVat} SEK</div>
                                        </div>
                                    )) :
                                        <div style={{ color: ' rgba(221,53,77,1)', fontFamily: 'Roboto', fontSize: '250%', width: '900px', textAlign: 'center' }}>Search result empty !</div>
                                    }

                                </Grid>
                            </div>
                            <Grid item xs={12} sm={12} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', margin: 10 }}>
                                <Pagination count={pagenumber} color="primary" showFirstButton showLastButton onChange={handleChangePage} style={{ width: '30%' }} />
                                <Button variant="outlined" className="item-add-button" onClick={redirect} style={{ width: 128, height: 40, borderRadius: '25px', color: '#fff' }}>Back</Button>
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
        cartVal: state.addCartIcon,
        orderData: state.orderData,
        orderimgData: state.orderimgData
    };
}
export default connect(mapStateToProps)(OrderStatus);