import React, { useState, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { makeStyles } from '@material-ui/core/styles';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Badge from '@material-ui/core/Badge';
import Snack from '../../../partPage/component/snackbar';
import CartDrawer from '../../../partPage/component/cartDrawer';
import { ChangeCartFlag } from "../../../../reducers/action";
// table
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
// table end
const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        // width: '45%'
    },
    paper: {
        marginRight: theme.spacing(2),
    },
    table: {
        minWidth: 650,
    },
}));


const fontstyle = {
    'fontFamily': 'Roboto',
    'fontStyle': 'normal',
    'fontWeight': 'normal',
    'fontSize': '21px',
    'color': '#FFFFFF'
};

// _________________________

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

// ____________
function DropMenu(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(false);
    const [alert, setalert] = React.useState("");
    const [cartcount, setCarcount] = useState(0);
    const [totalprice, setTotalprice] = useState(0);
    const [data, setData] = useState([]);
    const anchorRef = React.useRef(null);
    let cartCount1 = 0;
    let total = 0;
    const handleToggle = () => {
        // setOpen((prevOpen) => !prevOpen);
        // props.ChangeCartFlag(!props.cartflag);
        document.getElementById('btn_cartDrawer').click();
    };

    const handleClose = (event) => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }

        setOpen(false);
    };

    const history = useHistory();

    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
            event.preventDefault();
            setOpen(false);
        }
    }

    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
            anchorRef.current.focus();
        }
        prevOpen.current = open;
        // init();
    }, []);

    const init = () => {
        const data1 = {
            id: props.id
        };
        fetch("http://localhost/api/orders/statesearch", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data1),
        })
            .then(res => res.json())
            .then(function (res) {
                setData(res);
                if (res.length === 0) {
                    setCarcount(0);
                    setTotalprice(0);
                }
                else {
                    res.map((val) => {
                        console.log("val.quantity:" + val.quantity);
                        cartCount1 = cartCount1 + val.quantity;
                        setCarcount(cartCount1);
                        total = total + val.total_price;
                        setTotalprice(total);
                    })
                }
            })
    }
    useEffect(() => {
        // init();
    }, []);
    const deleting = (e) => {
        const data = {
            id: e.target.name
        };
        fetch("http://localhost/api/orders/deleteone", {
            method: 'delete',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(function (res) {
                setalert("Delete Success!");
                document.getElementById('snack_success').click();
            })
    }
    return (
        <>
            <CartDrawer />
            <Snack alert={alert} />
            <div className={classes.root}>
                <div>
                    <div>
                        <Button
                            ref={anchorRef}
                            aria-controls={open ? 'menu-list-grow' : undefined}
                            aria-haspopup="true"
                            onClick={handleToggle}
                            style={fontstyle}
                        >
                            <Badge color="error" badgeContent={props.cartVal} style={{ transform: 'scale(0.7)', width: '100%' }} anchorOrigin={{ vertical: 'top', horizontal: 'right', }}>
                                <img alt="image1" src={"./images/partPage/icon3.png"} style={{ marginRight: '10px', borderRadius: '50%', width: '100%' }} />
                            </Badge>
                        </Button>

                        <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal style={{ width: '400px', transform: 'translate3d(1490px, 93px, 0px)' }}>
                            {({ TransitionProps, placement }) => (
                                <Grow
                                    {...TransitionProps}
                                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                                >
                                    <Paper style={{ backgroundColor: '#fff' }}>
                                        <ClickAwayListener onClickAway={handleClose}>
                                            <MenuList autoFocusItem={open} style={{ display: 'flex', flexDirection: 'column', padding: '10px', width: '100%' }} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                                                <MenuItem>
                                                    <TableContainer component={Paper} style={{ backgroundColor: '#fff', height: '300px' }}>
                                                        <Table className={classes.table} aria-label="simple table" style={{ minWidth: '100%' }}>
                                                            <TableBody>
                                                                {data.map((row,index) => (
                                                                    <TableRow key={row.id}>
                                                                        <TableCell align="left" key={index}>
                                                                            <img src={"http://localhost/" + row.cuisine_photo} alt='alt' style={{ width: '15%', height: '20px', borderRadius: '50%' }} key={index+1} />
                                                                            {row.cuisine_name}
                                                                        </TableCell>
                                                                        <TableCell align="left" key={index+2}>{row.quantity} for {row.per_price}SEK</TableCell>
                                                                        <TableCell align="left" data-item={row.id} key={index+3}><input value="x" name={row.id} onClick={deleting} style={{ width: '15px', cursor: 'pointer', border: 'none', fontSize: '150%' }} readOnly key={index+4} /></TableCell>
                                                                    </TableRow>
                                                                ))}
                                                            </TableBody>
                                                            <TableFooter>
                                                                <TableRow>
                                                                    <TableCell align="center" colSpan='1' style={{ fontSize: '130%', fontWeight: 'bold', color: 'rgba(60, 60, 60, 1)' }}>
                                                                        Sub Total:
                                                                    </TableCell>
                                                                    <TableCell align="center" colSpan='1' style={{ fontSize: '130%', fontWeight: 'bold', color: ' rgba(221,53,77,1)' }}>
                                                                        {totalprice} SEK
                                                                    </TableCell>
                                                                </TableRow>
                                                                <TableRow>
                                                                    <TableCell align="center" colSpan='3'>
                                                                        <Button variant="outlined" style={{ backgroundColor: '#DD354D', margin: '1%', color: '#FCD652', width: '45%', borderRadius: '25px', border: '2px solid #DD354D' }} onClick={() => { history.push('/orderStatus') }} type="submit">View Cart</Button>
                                                                        <Button variant="outlined" style={{ backgroundColor: '#DD354D', margin: '1%', color: '#FCD652', width: '45%', borderRadius: '25px', border: '2px solid #DD354D' }} onClick={() => { history.push('/payment') }} type="submit">CheckOut</Button>
                                                                    </TableCell>
                                                                </TableRow>
                                                            </TableFooter>
                                                        </Table>
                                                    </TableContainer>
                                                </MenuItem>
                                            </MenuList>
                                        </ClickAwayListener>
                                    </Paper>
                                </Grow>
                            )}
                        </Popper>
                    </div>
                </div>
            </div>
        </>
    );
}

function mapStateToProps(state) {
    return {
        id: state.id,
        avatar: state.avatarimg,
        cartflag: state.cartFlag,
        cartVal: state.addCartIcon
    };
}
const mapDispatchToProps = {
    ChangeCartFlag
};
export default connect(mapStateToProps, mapDispatchToProps)(DropMenu);