import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import LandTitle from "../../Component/LandTitle";
import styles from './style.module.css';
import landing2 from '../../../../assets/images/Landing2.svg';
import ImageItem from "../../Component/ImageItem";
// search start
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import SearchIcon from '@material-ui/icons/Search';
import IconButton from '@material-ui/core/IconButton';
import $ from 'jquery';
import ApiConfig from '../../../../config/api_config';

const useStyles = makeStyles((theme) => ({
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
}));
// search end
export default function Landing2() {
    const classes = useStyles();
    const [data, setData] = React.useState([]);
    const init = () => {
        var settings = {
            "url": ApiConfig.url + "/api/public/items",
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json"
            },
        };

        $.ajax(settings).done(function (response) {
            setData(response);
        });
    }
    useEffect(() => {
        init();
    }, [])
    const asdf = () => {
        console.log("bofore:" + data[0].sell_flag);
        data.sort(function (a, b) {
            return (a.sell_flag > b.sell_flag) ? 0 : -1
        })
        console.log("after:" + data[0].sell_flag);
    }
    const searching = (e) => {
        if (e.target.value !== "") {
            var settings = {
                "url": ApiConfig.url + "/api/search/item/" + e.target.value + "?fromIndex=0",
                "method": "GET",
                "timeout": 0,
                "headers": {
                    "Content-Type": "application/json"
                },
            };

            $.ajax(settings).done(function (response) {
                setData(response.results);
            });
        }
        if (e.target.value === "")
            init();
    }
    return (
        <React.Fragment>
            <div className={styles.backgroundContainer} >
                <Grid container style={{ paddingTop: '30px', paddingLeft: '3%' }}>
                    {/* <Grid item lg={2}></Grid> */}
                    <Grid item lg={2} md={1}></Grid>
                    <Grid item lg={8} md={10} sm={12} xs={12} style={{ backgroundImage: 'url(./images/Landing2.svg', backgroundColor: 'white', backgroundRepeat: 'no-repeat', backgroundPosition: 'top right' }}>
                        <Grid container style={{ alignItems: "flex-start", justifyContent: 'space-between', justifyContent: 'center' }}>
                            <Grid item lg={4} md={5} sm={6} xs={8}>
                                <LandTitle color='' fontColor='#dd354d' outline='none' text='Top Chef’s & Best Selling'>
                                </LandTitle>
                                <div style={{ color: 'black', margin: 'auto', fontSize: '20px', textAlign: 'center', width: '100%', fontWeight: 'normal' }}>Click to know the Chef and Order!</div>
                            </Grid>
                            <Grid item lg={5} md={5} sm={4} xs={8} style={{ paddingLeft: '3%' }}>
                                {/* <SearchBar /> */}
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

                        <Grid container style={{ justifyContent: 'center', marginTop: '5%' }}>
                            {
                                data.map((val, index) => {
                                    return (
                                        <Grid key={index + 1} item md={4} sm={6} xs={8} style={{ padding: '0% 1% 2% 1%', width: '100%' }}>
                                            <Grid container key={index + 2}>
                                                <Grid item xs={12} sm={12} md={12} key={index + 3} style={{ width: '100%' }}>
                                                    {
                                                        val.itemImages[0] !== undefined ? <ImageItem src={val.itemImages[0]} itemid={val.id} key={index + 4} /> : ""
                                                    }
                                                </Grid>
                                            </Grid>
                                        </Grid>
                                    );
                                })
                            }
                        </Grid>
                    </Grid>
                    <Grid item lg={2} md={1}></Grid>
                </Grid>
            </div>
        </React.Fragment>
    );
}