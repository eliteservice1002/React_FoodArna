import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import Typography from '@material-ui/core/Typography';
import styles from './style.module.css';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import $ from 'jquery';
import Banner from '../../Component/Banner';
import BannerTitle from "../../Component/BannerTitle";
import DropMenu from '../../Component/DropMenu';
import DropMenu1 from '../../Component/DropMenu/drop1'
import DropMenu2 from '../../Component/DropMenu/drop2'
import Backdrop from '../../../partPage/component/backdrop';
import { constants } from '../../Utility/constant';
import DragFoodEat from '../../Component/DragBox/DragBox';
import OneStop from '../../Component/OneStop';
import SignUp from "../../Component/Sign/1";
import Login from "../../Component/Sign/2";
import Forgotpass from "../../Component/Sign/3";
import Resetpass from "../../Component/Sign/4";
import Header from "../../Component/Header";
import Snack from '../../../partPage/component/snackbar3';
import { ChangeEmail, ChangeID, ChangePerQuantity, ChangePerCost } from "../../../../reducers/action";
import ApiConfig from '../../../../config/api_config';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        zIndex: '3',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
    },
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        borderRadius: '50px',
        padding: theme.spacing(0, 4, 0),
    },
    hidden: {
        display: 'none'
    },
    show: {
        display: 'initial'
    },


    fullwindowheight: {
        height: '100vh', /* ONLY if you want the video to fill the entire browser window. Support: http://caniuse.com/#search=vh */
        position: 'relative', /* contain the abs-pos <video> */
        width: '100%',
        overflow: 'hidden', /* prevent scrollbars */
        textAlign: 'center',
        font: 'bold 40px/1.2 sans-serif'
    },
    video: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)', /* keep centered in parent */
        minWidth: '100%', /* always cover horizontal */
        minHeight: '100%', /* always cover vertical */
        zIndex: 1,
        opacity: '.5'
    }
}));


function getModalStyle() {
    const top = 50;
    const left = 50;

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
        outline: 'none'
    };
}


function Landing1(props) {
    const [transporterstatus, setTransporterStatus] = React.useState("");
    let localState = localStorage.getItem('user');
    if (localState && typeof JSON.parse(localState) === 'object') {
        localState = JSON.parse(localState);
    }

    let total_quantity = 0;
    let total_price = 0;
    let quantitydata = localStorage.getItem(localState.data.userId + "-Cartquantity");
    let localStateCartPrice = localStorage.getItem(localState.data.userId + "-Cartprice");
    let localStateCartQuantity = localStorage.getItem(localState.data.userId + "-Cartquantity");

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

    var settings = {
        "url": ApiConfig.url + "/api/user/" + localState.data.userId,
        "method": "GET",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json",
            "Authorization": localState.authToken,
        },
    };

    $.ajax(settings).done(function (response) {
        setTransporterStatus(response.transporterData.status);
    })

    const classes = useStyles();

    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [modalNum, setModalNum] = React.useState(1);
    const [logState, setLogState] = React.useState(false);

    useEffect(() => {
        if (localState.authToken === "") {
            setLogState(false);
        }
        else {
            setLogState(true);
        }
    }, [])
    useEffect(() => {
        document.getElementById('btn_backdrop').click();
        setTimeout(function () {
            document.getElementById('btn_backdrop').click();
        }, 3000);
    })
    const handleOpen = (num) => {
        setOpen(true);
        setModalNum(num);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const handleLog = () => {
        setLogState(true);
    }

    const handleLogOut = () => {
        var settings = {
            "url": ApiConfig.url + "/foodarna_logout",
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Authorization": localState.authToken
            },
        };

        $.ajax(settings).done(function (response) {
            console.log(response);
            setLogState(false);
            let user = {
                authToken: "",
                data: ""
            };
            localStorage.setItem('user', JSON.stringify(user));
            document.getElementById('snack_logout').click();
        });
    }

    const body = (
        <div style={modalStyle} className={classes.paper}>
            {
                modalNum === 1 && (<SignUp onclick={() => handleOpen(2)} onclose={handleClose} />)
            }
            {
                modalNum === 2 && (<Login onclick={() => handleOpen(3)} onclick1={() => handleOpen(1)} logged={handleLog} onclose={handleClose} />)
            }
            {
                modalNum === 3 && (<Forgotpass onclick={() => handleOpen(4)} onclose={handleClose} />)
            }
            {
                modalNum === 4 && (<Resetpass onclose={handleClose} />)
            }
        </div>
    );

    return (
        <div className={classes.fullwindowheight}>
            <Snack />
            <Backdrop />
            <video
                className={classes.video}
                src="./images/brand-hero.mp4"
                preload="auto"
                autoplay="true"
                muted="true"
                loop="true"
                controls={false}
                poster="./images/brand-hero.mp4"></video>
            <React.Fragment>
                <CssBaseline />
                <Typography component="div" className={styles.backgroundContainer} style={{ backgroundImage: 'url(./images/Background1.png)', backgroundSize: 'cover', backgroundColor: '#464646' }}>
                    <Typography component="div" className={styles.backgroundCover} style={{ zIndex: 2 }}>
                    </Typography>
                </Typography>
                <Header logState={logState} handleClose={handleClose} open={open} handleOpen={handleOpen} body={body} hadleLogOut={handleLogOut} handle2Open={() => handleOpen(2)} handle1Open={() => handleOpen(1)} />
                <div className={classes.root}>
                    <Grid container>
                        <Grid item  >
                        </Grid>
                        <Grid item lg={12} md={12} sm={12} xs={12} style={{ justifyContent: 'center' }}>
                            <Grid container>
                                <Grid item md={12} sm={12} xs={12}>
                                    <Banner />
                                    <BannerTitle />
                                    <Grid container style={{ marginTop: '20px' }}>
                                        <Grid item lg={3} md={2}></Grid>
                                        <Grid item lg={6} md={8} sm={12} xs={12} style={{ zIndex: '5' }}>
                                            <Grid container style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
                                                <div item xs={6}>
                                                    <DropMenu src={constants.dropMenu[0].src} title={constants.dropMenu[0].title} />
                                                </div>
                                                <div item xs={6}>
                                                    <DropMenu1 src={constants.dropMenu[1].src} title={constants.dropMenu[1].title} />
                                                </div>
                                            </Grid>
                                        </Grid>
                                        <Grid item md={2}></Grid>
                                    </Grid>
                                    <DragFoodEat handle2Open={() => handleOpen(2)} />
                                    <OneStop />

                                    {/* <div onClick={()=>{document.getElementById('snack_logout').click();}}>askdjfhlaskjdfas</div> */}
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                </div>
            </React.Fragment>
        </div>

    );
}

function mapStateToProps(state) {
    return {
        email: state.email,
        id: state.id,
        autho: state.authen
    };
}

const mapDispatchToProps = {
    ChangeEmail,
    ChangeID,
    ChangePerQuantity,
    ChangePerCost
};

export default connect(mapStateToProps, mapDispatchToProps)(Landing1);