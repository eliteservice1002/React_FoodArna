import React, { useState, useEffect, useRef } from "react";
import Grid from '@material-ui/core/Grid';
import './../commonStyle.css';
import { CookDetailDiv } from './../partPageStyle';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import Pagination from '@material-ui/lab/Pagination';
import $ from 'jquery';
import Snack from './snackbar';
import Backdrop from './backdrop';
import Cartdrawer from './cartDrawer';
import "react-perfect-scrollbar/dist/css/styles.css";
import ApiConfig from '../../../config/api_config';
// dialog start
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
// dialog end
import {
    makeStyles,
} from '@material-ui/core/styles';
import { ChangePerPotion, ChangePerImg, ChangePerQuantity, ChangePerCost, AddCartIcon, ChangePerFoodIdFlag, ChangePerCuisine, ChangeCartFlag } from "../../../reducers/action";
const useStyles = makeStyles({
    btn: {
        backgroundColor: '#DD354D',
        width: '101%',
        borderRadius: '15px',
        border: '2px solid #DD354D',
        color: '#464646',
        fontWeight: 'bold'
    },
    ellipsis: {
        color: 'rgb(70, 70, 70)',
        fontFamily: 'Roboto',
        fontSize: '17px',
        width: '100%',
        margin: '0 auto',
        padding: '5px',
        // height: '41px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap',
        maxWidth: '700px',
        float: 'left',
        textAlign: 'center'
    },
    firstButton: {
        border: 'none',
        cursor: 'pointer',
        width: '55px',
        backgroundColor: '#fff',
        borderRight: '1px solid red'
    },
    secondButton: {
        border: 'none',
        cursor: 'pointer',
        width: '55px',
        backgroundColor: '#fff',
        borderLeft: '1px solid red'
    },
})
function CookDetail(props) {
    let localState = localStorage.getItem('user');
    if (localState && typeof JSON.parse(localState) === 'object') {
        localState = JSON.parse(localState);
    }
    let localStateCartId = localStorage.getItem(localState.data.userId + '-Cartid');

    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(8);
    const [pagenumber, setPageNumber] = useState(0);

    const handleChangePage = (event, newPage) => {
        setPage(newPage - 1);
    };
    const history = useHistory();
    const classes = useStyles();
    const [data, setData] = React.useState([]);
    const [alert, setalert] = useState(0);
    const init = () => {
        var settings = {
            "url": ApiConfig.url + "/api/item/chef/" + props.chef_id,
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Authorization": localState.authToken
            },
        };

        $.ajax(settings).done(function (response) {
            let count = 0;
            response.map((val) => {
                if (val.status === "ACTIVE") {
                    data.push(val);
                    count++;
                }
            })
            document.getElementById('btn_backdrop').click();
            setPageNumber(Math.ceil(count / 8));
        });
    }
    useEffect(() => {
        init();
        document.getElementById('btn_backdrop').click();
        if (localStateCartId === null) {
            let originObj = { "a": "A" };
            localStorage.setItem(localState.data.userId + "-Cartid", JSON.stringify(originObj));
            localStorage.setItem(localState.data.userId + "-Cartimg", JSON.stringify(originObj));
            localStorage.setItem(localState.data.userId + "-Cartname", JSON.stringify(originObj));
            localStorage.setItem(localState.data.userId + "-Cartquantity", JSON.stringify(originObj));
            localStorage.setItem(localState.data.userId + "-Cartprice", JSON.stringify(originObj));
            localStorage.setItem(localState.data.userId + "-Cartaddress", JSON.stringify(originObj));
        }
    }, []);
    const finish_order = () => {
        history.push('/orderStatus');
    }
    const chef_menu_view = () => {
        history.push('/cheflist');
    }

    const add_cart = (e) => {
        let foodkey = e.target.name;
        let total_quantity = 0;
        let total_price = 0;
        let quantitydata = localStorage.getItem(localState.data.userId + "-Cartquantity");
        let localStateCartPrice = localStorage.getItem(localState.data.userId + "-Cartprice");
        let localStateCartQuantity = localStorage.getItem(localState.data.userId + "-Cartquantity");

        if (quantitydata) {
            let obj = JSON.parse(quantitydata);
            let quantityobj = JSON.parse(localStateCartQuantity);
            let priceobj = JSON.parse(localStateCartPrice);
            var flag = 1;
            Object.keys(obj).map(function (key) {
                if (key === e.target.name) {
                    obj[key] = obj[key] + 1;
                    flag = 0;
                }
                if (obj[key] !== "A") {
                    total_quantity += obj[key];
                    total_price += quantityobj[key] * priceobj[key];
                }
            });
            if (flag) {
                obj[e.target.name] = 1;
            }
            localStorage.setItem(localState.data.userId + '-Cartquantity', JSON.stringify(obj));
        }

        let iddata = localStorage.getItem(localState.data.userId + "-Cartid");
        if (iddata) {
            let obj = JSON.parse(iddata);
            var flag = 1;
            Object.keys(obj).map(function (key) {
                if (key === e.target.name) {
                    flag = 0;
                }
            });
            if (flag) {
                obj[e.target.name] = e.target.name;
            }
            localStorage.setItem(localState.data.userId + '-Cartid', JSON.stringify(obj));
        }

        let imgdata = localStorage.getItem(localState.data.userId + "-Cartimg");
        if (imgdata) {
            let obj = JSON.parse(imgdata);
            var flag = 1;
            let img = "";
            Object.keys(obj).map(function (key) {
                if (key === e.target.name) {
                    flag = 0;
                }
            });
            if (flag) {
                var settings = {
                    "url": ApiConfig.url + "/api/item/" + e.target.name,
                    "method": "GET",
                    "timeout": 0,
                    "headers": {
                        "Authorization": localState.authToken
                    },
                };

                $.ajax(settings).done(function (response) {
                    img = response.itemImages[0];
                    obj[foodkey] = img;
                    localStorage.setItem(localState.data.userId + '-Cartimg', JSON.stringify(obj));
                });
            }

        }

        let namedata = localStorage.getItem(localState.data.userId + "-Cartname");
        if (namedata) {
            let obj = JSON.parse(namedata);
            var flag = 1;
            let name = "";
            Object.keys(obj).map(function (key) {
                if (key === e.target.name) {
                    flag = 0;
                }
            });
            if (flag) {
                var settings = {
                    "url": ApiConfig.url + "/api/item/" + e.target.name,
                    "method": "GET",
                    "timeout": 0,
                    "headers": {
                        "Authorization": localState.authToken
                    },
                };

                $.ajax(settings).done(function (response) {
                    name = response.name;
                    obj[foodkey] = name;
                    localStorage.setItem(localState.data.userId + '-Cartname', JSON.stringify(obj));
                });
            }

        }

        let pricedata = localStorage.getItem(localState.data.userId + "-Cartprice");
        if (pricedata) {
            let obj = JSON.parse(pricedata);
            var flag = 1;
            let price = "";
            Object.keys(obj).map(function (key) {
                if (key === e.target.name) {
                    flag = 0;
                }
            });
            if (flag) {
                var settings = {
                    "url": ApiConfig.url + "/api/item/" + e.target.name,
                    "method": "GET",
                    "timeout": 0,
                    "headers": {
                        "Authorization": localState.authToken
                    },
                };

                $.ajax(settings).done(function (response) {
                    price = response.price;
                    obj[foodkey] = price;
                    localStorage.setItem(localState.data.userId + '-Cartprice', JSON.stringify(obj));
                });
            }

        }

        let addressdata = localStorage.getItem(localState.data.userId + "-Cartaddress");
        if (addressdata) {
            let obj = JSON.parse(addressdata);
            var flag = 1;
            let address = "";
            Object.keys(obj).map(function (key) {
                if (key === e.target.name) {
                    flag = 0;
                }
            });
            if (flag) {
                var settings = {
                    "url": ApiConfig.url + "/api/item/" + e.target.name,
                    "method": "GET",
                    "timeout": 0,
                    "headers": {
                        "Authorization": localState.authToken
                    },
                };

                $.ajax(settings).done(function (response) {
                    address = response.address;
                    obj[foodkey] = address;
                    localStorage.setItem(localState.data.userId + '-Cartaddress', JSON.stringify(obj));
                });
            }
        }
        document.getElementById('btn_backdrop').click();
        setTimeout(function () {
            props.ChangePerQuantity(total_quantity);
            props.ChangePerCost(total_price);
            document.getElementById('btn_backdrop').click();
            document.getElementById('btn_cartDrawer').click();
        }, 4000);
    }

    const [food_per_id, setFoodPerid] = React.useState("");
    const [food_per_name, setFoodPername] = React.useState("");
    const [food_per_portion, setFoodPerportion] = React.useState("");
    const [food_per_price, setFoodPerprice] = React.useState("");
    const [food_per_ingredients, setFoodPeringredients] = React.useState("");
    const [food_per_safety, setFoodPersafety] = React.useState("");
    const [food_per_img, setFoodPerimg] = React.useState([]);
    const [quantity, setQuantity] = React.useState(0);
    const imgsytle1 = {
        backgroundImage: `url(${ApiConfig.url})`,
        backgroundPosition: '0% 0%',
        borderRadius: '10px', width: '100%', height: '150px'
    };

    const [imgsytle, setImgStyle] = useState(imgsytle1);

    const food_detail_view = async (e) => {
        setFoodPerid(e.target.name);
        let id = e.target.name;
        document.getElementById('btn_backdrop').click();
        var settings = {
            "url": "https://ec2-18-218-85-172.us-east-2.compute.amazonaws.com:8080/api/item/" + e.target.name,
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Authorization": localState.authToken
            },
        };

        $.ajax(settings).done(function (response) {
            setImgStyle({ ...imgsytle, backgroundImage: `url(${"https://s3.eu-north-1.amazonaws.com/foodarna/images/items/" + id + "/" + response.itemImages[0]})` });
            setFoodPername(response.name);
            setFoodPerportion(response.portion);
            setFoodPerprice(response.price);
            setFoodPeringredients(response.ingredients[0]);
            setFoodPersafety(response.description);
            setFoodPerimg(response.itemImages);
            handleClickOpen();
            document.getElementById('btn_backdrop').click();
        });

    }

    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const add_to_cart = (e) => {
        let foodkey = food_per_id;
        let total_quantity = 0;
        let total_price = 0;
        let quantitydata = localStorage.getItem(localState.data.userId + "-Cartquantity");
        let localStateCartPrice = localStorage.getItem(localState.data.userId + "-Cartprice");
        let localStateCartQuantity = localStorage.getItem(localState.data.userId + "-Cartquantity");

        if (quantitydata) {
            let obj = JSON.parse(quantitydata);
            let quantityobj = JSON.parse(localStateCartQuantity);
            let priceobj = JSON.parse(localStateCartPrice);
            var flag = 1;
            Object.keys(obj).map(function (key) {
                if (key === food_per_id) {
                    obj[key] = obj[key] + quantity;
                    flag = 0;
                }
                if (obj[key] !== "A") {
                    total_quantity += obj[key];
                    total_price += quantityobj[key] * priceobj[key];
                }
            });
            if (flag) {
                obj[food_per_id] = quantity;
            }
            localStorage.setItem(localState.data.userId + '-Cartquantity', JSON.stringify(obj));
        }

        let iddata = localStorage.getItem(localState.data.userId + "-Cartid");
        if (iddata) {
            let obj = JSON.parse(iddata);
            var flag = 1;
            Object.keys(obj).map(function (key) {
                if (key === food_per_id) {
                    flag = 0;
                }
            });
            if (flag) {
                obj[food_per_id] = food_per_id;
            }
            localStorage.setItem(localState.data.userId + '-Cartid', JSON.stringify(obj));
        }

        let imgdata = localStorage.getItem(localState.data.userId + "-Cartimg");
        if (imgdata) {
            let obj = JSON.parse(imgdata);
            var flag = 1;
            let img = "";
            Object.keys(obj).map(function (key) {
                if (key === food_per_id) {
                    flag = 0;
                }
            });
            if (flag) {
                var settings = {
                    "url": ApiConfig.url + "/api/item/" + food_per_id,
                    "method": "GET",
                    "timeout": 0,
                    "headers": {
                        "Authorization": localState.authToken
                    },
                };

                $.ajax(settings).done(function (response) {
                    img = response.itemImages[0];
                    obj[foodkey] = img;
                    localStorage.setItem(localState.data.userId + '-Cartimg', JSON.stringify(obj));
                });
            }

        }

        let namedata = localStorage.getItem(localState.data.userId + "-Cartname");
        if (namedata) {
            let obj = JSON.parse(namedata);
            var flag = 1;
            let name = "";
            Object.keys(obj).map(function (key) {
                if (key === food_per_id) {
                    flag = 0;
                }
            });
            if (flag) {
                var settings = {
                    "url": ApiConfig.url + "/api/item/" + food_per_id,
                    "method": "GET",
                    "timeout": 0,
                    "headers": {
                        "Authorization": localState.authToken
                    },
                };

                $.ajax(settings).done(function (response) {
                    name = response.name;
                    obj[foodkey] = name;
                    localStorage.setItem(localState.data.userId + '-Cartname', JSON.stringify(obj));
                });
            }

        }

        let pricedata = localStorage.getItem(localState.data.userId + "-Cartprice");
        if (pricedata) {
            let obj = JSON.parse(pricedata);
            var flag = 1;
            let price = "";
            Object.keys(obj).map(function (key) {
                if (key === food_per_id) {
                    flag = 0;
                }
            });
            if (flag) {
                var settings = {
                    "url": ApiConfig.url + "/api/item/" + food_per_id,
                    "method": "GET",
                    "timeout": 0,
                    "headers": {
                        "Authorization": localState.authToken
                    },
                };

                $.ajax(settings).done(function (response) {
                    price = response.price;
                    obj[foodkey] = price;
                    localStorage.setItem(localState.data.userId + '-Cartprice', JSON.stringify(obj));
                });
            }

        }

        let addressdata = localStorage.getItem(localState.data.userId + "-Cartaddress");
        if (addressdata) {
            let obj = JSON.parse(addressdata);
            var flag = 1;
            let address = "";
            Object.keys(obj).map(function (key) {
                if (key === food_per_id) {
                    flag = 0;
                }
            });
            if (flag) {
                var settings = {
                    "url": ApiConfig.url + "/api/item/" + food_per_id,
                    "method": "GET",
                    "timeout": 0,
                    "headers": {
                        "Authorization": localState.authToken
                    },
                };

                $.ajax(settings).done(function (response) {
                    address = response.address;
                    obj[foodkey] = address;
                    localStorage.setItem(localState.data.userId + '-Cartaddress', JSON.stringify(obj));
                });
            }
        }
        document.getElementById('btn_backdrop').click();
        setTimeout(function () {
            setQuantity(0);
            props.ChangePerQuantity(total_quantity);
            props.ChangePerCost(total_price);
            document.getElementById('btn_backdrop').click();
            document.getElementById('btn_cartDrawer').click();
            handleClose();
        }, 4000);
    }

    // image zoom effect start
    const handleMouseMove = (e) => {
        const { left, top, width, height } = e.target.getBoundingClientRect()
        const x = (e.pageX - left) / width * 100
        const y = (e.pageY - top) / height * 100
        setImgStyle({ ...imgsytle, backgroundPosition: `${x}% ${y}%` });
    }
    //   image zoom effect end

    return (
        <CookDetailDiv>
            <Cartdrawer />
            <Backdrop />
            <Snack alert={alert} />
            <div>
                <Dialog
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="alert-dialog-title"
                    aria-describedby="alert-dialog-description"
                >
                    <DialogContent>
                        <Grid item xs={12} sm={12} style={{ height: '100%', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                            <Grid item xs={3} sm={3} style={{ display: 'flex', flexWrap: 'wrap', paddingLeft: '3%', paddingTop: '3%' }}>
                                {
                                    food_per_img.map((val, index) => {
                                        return (
                                            <figure onMouseMove={handleMouseMove} style={imgsytle} className="Figure">
                                                < img src={"https://s3.eu-north-1.amazonaws.com/foodarna/images/items/" + food_per_id + "/" + val} style={{ borderRadius: '10px', width: '100%', height: '150px' }} />
                                            </figure>
                                        )
                                    })
                                }
                            </Grid>
                            <Grid item xs={9} sm={9} style={{ paddingLeft: '3%' }} style={{ color: 'rgba(60, 60, 60, 0.5)' }}>
                                <Grid item xs={12} style={{ margin: '3%' }}><span style={{ fontSize: '2em' }}>Cuisine Name:</span><br /> <span style={{ fontSize: '1.5em', paddingLeft: '5%' }}>{food_per_name}</span></Grid>
                                <Grid item xs={12} style={{ display: 'flex', flexWrap: 'wrap', margin: '3%' }}>
                                    <Grid item xs={12} sm={6}><span style={{ fontSize: '2em' }}>Portion:</span><br /> <span style={{ fontSize: '1.5em', paddingLeft: '5%' }}>{food_per_portion}</span></Grid>
                                    <Grid item xs={12} sm={6}><span style={{ fontSize: '2em' }}>Price:</span><br /> <span style={{ fontSize: '1.5em', paddingLeft: '5%' }}>{food_per_price} SEK</span></Grid>
                                </Grid>
                                <Grid item xs={12} style={{ margin: '3%' }}><span style={{ fontSize: '2em' }}>Ingredients:</span><br /> <span style={{ fontSize: '1.5em', paddingLeft: '5%' }}>{food_per_ingredients}</span></Grid>
                                <Grid item xs={12} style={{ margin: '3%' }}><span style={{ fontSize: '2em' }}>Safety:</span><br /> <span style={{ fontSize: '1.5em', paddingLeft: '5%' }}>{food_per_safety}</span></Grid>
                                <Grid item xs={12} style={{ display: 'flex', flexWrap: 'wrap' }}>
                                    <div style={{ width: '180px', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', margin: '0 1%', border: '1px solid  rgba(221,53,77,1)' }}>
                                        <button
                                            size="sm"
                                            round="true"
                                            className={classes.firstButton}
                                            id="min" onClick={() => { quantity === 0 ? setQuantity(0) : setQuantity(quantity - 1) }}
                                            style={{ borderRight: '1px solid red' }}
                                        >
                                            &mdash;
                                        </button>
                                        <div style={{ color: " rgba(221,53,77,1)", alignSelf: 'center', fontFamily: 'Roboto' }} >{quantity}</div>
                                        <button
                                            size="sm"
                                            round="true"
                                            className={classes.secondButton}
                                            id="pul" onClick={() => { setQuantity(quantity + 1) }}
                                            style={{ borderLeft: '1px solid red' }}
                                        >
                                            &#xff0b;
                                        </button>
                                    </div>
                                    <Button style={{ backgroundColor: '#DD354D', height: '40px', borderRadius: '35px', border: '2px solid #fff', fontFamily: 'Roboto', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }} onClick={add_to_cart} name={food_per_id}>ADD TO CART</Button>
                                </Grid>
                            </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions>
                        <Button style={{ backgroundColor: '#DD354D', width: '15%', height: '40px', borderRadius: '35px', border: '2px solid #fff', fontFamily: 'Roboto', fontSize: '90%', color: '#fff', fontWeight: 'bold', cursor: 'pointer' }} onClick={handleClose} autoFocus >Close</Button>
                    </DialogActions>
                </Dialog>
            </div>
            <Grid container spacing={3} style={{ textAlign: 'left', marginTop: '5%', color: '#464646', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'normal' }}>
                <div style={{ width: '100%' }}>
                    <Grid item xs={12} sm={12} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: "space-between" }}>
                        {data.length !== 0 ? (rowsPerPage > 0
                            ? data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                            : data
                        ).map((row, index) => (
                            <Grid item xs={6} sm={3} lg={3} style={{ padding: '0 3% 3% 3%', textAlign: 'center' }} key={index}>
                                <figure className="snip1584" key={index + 1}>
                                    <img src={"https://s3.eu-north-1.amazonaws.com/foodarna/images/items/" + row.id + "/" + row.itemImages[0]} className={classes.img} alt={index} style={{ width: '100%', height: '100%', borderRadius: '10px' }} key={index + 2} />
                                    <figcaption style={{ textAligna: 'center' }} key={index + 3}>
                                        <h5 key={index + 4}>{row.name}</h5>
                                        <button variant="outlined" className="item-add-button" name={row.id} style={{ borderRadius: '25px', cursor: 'pointer', margin: '2%', fontSize: '85%' }} onClick={add_cart} key={index + 5}>Add</button>
                                        <button variant="outlined" className="item-add-button" name={row.id} style={{ borderRadius: '25px', cursor: 'pointer', margin: '2%', fontSize: '85%' }} key={index + 8} onClick={food_detail_view}>Detail</button>
                                    </figcaption>
                                </figure>
                                <div className={classes.ellipsis} key={index + 6}>{row.name}</div>
                                <div className={classes.ellipsis} key={index + 7}>{row.price} SEK</div>
                            </Grid>
                        )) :
                            <div style={{ color: ' rgba(221,53,77,1)', fontFamily: 'Roboto', fontSize: '3vw', width: '900px', textAlign: 'center' }}>Search result empty !</div>
                        }

                    </Grid>
                </div>
                <Grid item xs={12} sm={12} style={{ display: 'flex', flexWrap: 'wrap', width: '50%' }}>
                    <Grid item xs={12} sm={12}>
                        <Pagination count={pagenumber} color="primary" showFirstButton showLastButton onChange={handleChangePage} style={{ margin: '1.5% auto' }} />
                    </Grid>
                    <Grid item xs={6} style={{ textAlign: 'center', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'normal' }} id='profile1'>
                        <Button variant="outlined" className="item-add-button" onClick={finish_order} style={{ borderRadius: '25px', width: '70%', color: '#fff' }}>FINISH ORDER</Button>
                    </Grid>
                    <Grid item xs={6} style={{ textAlign: 'center', fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'normal' }} id='profile1'>
                        <Button variant="outlined" className="item-add-button" onClick={chef_menu_view} style={{ borderRadius: '25px', width: '70%', color: '#fff' }}>CHEF MENU</Button>
                    </Grid>
                </Grid>
            </Grid>
        </CookDetailDiv>
    );
}


function mapStateToProps(state) {
    return {
        user_id: state.id,
        user_email: state.email,
        user_name: state.user_name,
        user_address: state.address,
        user_city: state.city,
        user_country: state.country,
        user_postcode: state.postcode,
        chef_id: state.chef_id,
        chef_name: state.chef_name,
        cartVal: state.addCartIcon,
        per_portion: state.food_per_portion,
        per_food_img: state.food_per_img,
        per_cost: state.food_per_price,
        per_quantity: state.food_per_quantity,
        per_food_id: state.food_per_id,
        per_food_id_flag: state.food_per_id_flag,
        per_food_cuisine: state.food_per_cuisine,
        comment: state.comment_to_chef,
        rating: state.per_rating,
        cartflag: state.cartFlag
    };
}
const mapDispatchToProps = {
    ChangePerPotion,
    ChangePerImg,
    ChangePerCost,
    ChangePerQuantity,
    AddCartIcon,
    ChangePerFoodIdFlag,
    ChangePerCuisine,
    ChangeCartFlag
};
export default connect(mapStateToProps, mapDispatchToProps)(CookDetail);