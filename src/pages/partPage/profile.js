import React, { useState, useEffect } from "react";
// @material-ui/core components
import {
    withStyles,
    makeStyles,
} from '@material-ui/core/styles';
import clsx from 'clsx';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import FormControl from '@material-ui/core/FormControl';
import HomeIcon from '@material-ui/icons/Home';
import $ from 'jquery';
import Snack from './component/snackbar';
import { connect } from 'react-redux';
import MenuItem from '@material-ui/core/MenuItem';
import { ChangeEmail, ChangeID } from "../../reducers/action";
import Typography from '@material-ui/core/Typography';
import Checkbox from '@material-ui/core/Checkbox';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { SnackbarProvider, useSnackbar } from 'notistack';
import PermIdentity from "@material-ui/icons/PermIdentity";

// core components
import GridContainer from "./component/Grid/GridContainer.js";
import GridItem from "./component/Grid/GridItem.js";
import Button from "./component/CustomButtons/Button.js";
import Clearfix from "./component/Clearfix/Clearfix.js";
import Card from "./component/Card/Card.js";
import CardBody from "./component/Card/CardBody.js";
import CardHeader from "./component/Card/CardHeader.js";
import CardIcon from "./component/Card/CardIcon.js";
import styles from "./assets/jss/material-dashboard-pro-react/views/userProfileStyles.js";
import FixedTextField from './component/FixedTextField';
import ApiConfig from '../../config/api_config';
import { useHistory } from "react-router-dom";

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
const useStyles = makeStyles(styles);

function UserProfile(props) {
    let localState = localStorage.getItem('user');
    if (localState && typeof JSON.parse(localState) === 'object') {
        localState = JSON.parse(localState);
    }
    const history = useHistory();
    const classes = useStyles();
    const [addressData, setAddressData] = React.useState([]);
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [source, setSource] = useState("");
    const [ssn, setSSN] = useState("");
    const [vehicletype, setVehicleType] = useState("BICYCLE");
    const [profile, setProfile] = useState("");
    const [avatar, setavatar] = useState("");
    const [longitude, setLongitude] = useState("");
    const [latitude, setLatitude] = useState("");
    const [chef_checked, setChef] = React.useState(false);
    const [buyer_checked, setBuyer] = React.useState(true);
    const [delivery_checked, setDelivery] = React.useState(false);
    const [alert, setalert] = useState("");

    const [file, setFile] = React.useState("");
    const [imagePreviewUrl, setImagePreviewUrl] = React.useState("");

    const handleChangeAutho = (e) => {
        if (e.target.value === "chef") {
            setChef(e.target.checked);
        }
        if (e.target.value === "transporter") {
            setDelivery(e.target.checked);
        }
    }
    const handleOnChangeSSN = (e) => {
        setSSN(e.target.value);
    };
    const handleOnChangeVehicleType = (e) => {
        setVehicleType(e.target.value);
    };
    const handleOnChangeProfile = (e) => {
        setProfile(e.target.value);
    };
    const handleOnChangeLongitude = (e) => {
        setLongitude(e.target.value);
    }
    const handleOnChangeLatitude = (e) => {
        setLatitude(e.target.value);
    }
    const init = () => {
        var settings = {
            "url": ApiConfig.url + "/api/user/image",
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json",
                "Authorization": localState.authToken
            },
        };

        $.ajax(settings).done(function (response) {
            setImagePreviewUrl(response);
        });

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
            setEmail(response.email);
            setName(response.name);
            setPhone(response.phone);
            setSource(response.source);
            if (response.achef === true) {
                if (response.chefData.status === "ACTIVE") {
                    setChef(response.achef);
                    var settings = {
                        "url": ApiConfig.url + "/api/chef/" + localState.data.chefId,
                        "method": "GET",
                        "timeout": 0,
                        "headers": {
                            "Content-Type": "application/json",
                            "Authorization": localState.authToken
                        },
                    };

                    $.ajax(settings).done(function (response) {
                        console.log(response)
                        setProfile(response.description);
                        setavatar(response.chefProfilePicture);
                        setAddress(response.address);
                        setLatitude(response.latitude);
                        setLongitude(response.longitude);
                    });
                }
            }
            if (response.atransporter === true) {
                if (response.transporterData.status === "ACTIVE") {
                    setDelivery(response.atransporter);
                    var settings = {
                        "url": ApiConfig.url + "/api/transporter/" + localState.data.transporterId,
                        "method": "GET",
                        "timeout": 0,
                        "headers": {
                            "Content-Type": "application/json",
                            "Authorization": localState.authToken
                        },
                    };

                    $.ajax(settings).done(function (response) {
                        setavatar(response.profilePicture);
                        // setAddress(response.address);
                        setSSN(response.ssn);
                        setVehicleType(response.vehicleType);
                    });
                }
            }
        });
    }
    useEffect(() => {
        init();
    }, []);

    const save = () => {
        var form = new FormData();
        form.append("file", file);

        var settings = {
            "url": ApiConfig.url + "/api/user/image",
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
            console.log(response);
        });


        if (localState.data.chef === false) {
            if (chef_checked === true) {
                if (address === "" || address === null) {
                    setalert('Please input address')
                    document.getElementById('snack_warning').click();
                    return;
                }
                if (address !== "" && address !== null) {
                    const data = {
                        "name": name,
                        "email": email,
                        "phone": phone,
                        "source": source,
                        "description": profile,
                        "address": address,
                        "longitude": longitude,
                        "latitude": latitude,
                        "password": "string",
                        "repeatPassword": "string"
                    }
                    var settings = {
                        "url": ApiConfig.url + "/api/registration​/chef",
                        "method": "POST",
                        "timeout": 0,
                        "headers": {
                            "Content-Type": "application/json",
                            "Authorization": localState.authToken
                        },
                        "data": JSON.stringify(data),
                    };

                    $.ajax(settings).done(function (response) {
                        console.log(response);
                        var settings = {
                            "url": ApiConfig.url + "/api/user/" + localState.data.userId,
                            "method": "GET",
                            "timeout": 0,
                            "headers": {
                                "Content-Type": "application/json",
                                "Authorization": localState.authToken
                            },
                        };

                        $.ajax(settings).done(function (response) {
                            const data1 = {
                                "ids": [
                                    response.chefData.id
                                ]
                            }
                            var settings = {
                                "url": ApiConfig.url + "/api/chef/enable",
                                "method": "PUT",
                                "timeout": 0,
                                "headers": {
                                    "Content-Type": "application/json",
                                    "Authorization": localState.authToken
                                },
                                "data": JSON.stringify(data1),
                            };

                            $.ajax(settings).done(function (response) {
                                setalert('It was updated succefully!')
                                document.getElementById('snack_success').click();
                            });
                        });
                    });
                }
            }
            else {
                var settings = {
                    "url": ApiConfig.url + "/api/user/" + localState.data.userId,
                    "method": "GET",
                    "timeout": 0,
                    "headers": {
                        "Content-Type": "application/json",
                        "Authorization": localState.authToken
                    },
                };

                $.ajax(settings).done(function (response) {
                    const data = {
                        "ids": [
                            response.chefData.id
                        ]
                    }
                    var settings = {
                        "url": ApiConfig.url + "/api/chef/disable",
                        "method": "PUT",
                        "timeout": 0,
                        "headers": {
                            "Content-Type": "application/json",
                            "Authorization": localState.authToken
                        },
                        "data": JSON.stringify(data),
                    };

                    $.ajax(settings).done(function (response) {
                        setalert('It was updated succefully!')
                        document.getElementById('snack_success').click();
                    });
                });
            }
        }
        else {
            if (chef_checked === true) {
                if (address === "" || address === null) {
                    setalert('Please input address')
                    document.getElementById('snack_warning').click();
                    return;
                }
                if (address !== "" && address !== null) {
                    var settings = {
                        "url": ApiConfig.url + "/api/user/" + localState.data.userId,
                        "method": "GET",
                        "timeout": 0,
                        "headers": {
                            "Content-Type": "application/json",
                            "Authorization": localState.authToken
                        },
                    };

                    $.ajax(settings).done(function (response) {
                        const data = {
                            "chefId": response.chefData.id,
                            "name": name,
                            "description": profile,
                            "address": address
                        }
                        var settings = {
                            "url": ApiConfig.url + "/api/registration​/chef",
                            "method": "PUT",
                            "timeout": 0,
                            "headers": {
                                "Content-Type": "application/json",
                                "Authorization": localState.authToken
                            },
                            "data": JSON.stringify(data),
                        };
                        $.ajax(settings).done(function (res) {
                        });
                        const data1 = {
                            "ids": [
                                response.chefData.id
                            ]
                        }
                        var settings = {
                            "url": ApiConfig.url + "/api/chef/enable",
                            "method": "PUT",
                            "timeout": 0,
                            "headers": {
                                "Content-Type": "application/json",
                                "Authorization": localState.authToken
                            },
                            "data": JSON.stringify(data1),
                        };

                        $.ajax(settings).done(function (response) {
                            setalert('It was updated succefully!')
                            document.getElementById('snack_success').click();
                        });
                    })
                }
            }
            else {
                var settings = {
                    "url": ApiConfig.url + "/api/user/" + localState.data.userId,
                    "method": "GET",
                    "timeout": 0,
                    "headers": {
                        "Content-Type": "application/json",
                        "Authorization": localState.authToken
                    },
                };

                $.ajax(settings).done(function (response) {
                    const data = {
                        "ids": [
                            response.chefData.id
                        ]
                    }
                    var settings = {
                        "url": ApiConfig.url + "/api/chef/disable",
                        "method": "PUT",
                        "timeout": 0,
                        "headers": {
                            "Content-Type": "application/json",
                            "Authorization": localState.authToken
                        },
                        "data": JSON.stringify(data),
                    };

                    $.ajax(settings).done(function (response) {
                        setalert('It was updated succefully!')
                        document.getElementById('snack_success').click();
                    });
                });
            }
        }

        if (localState.data.transporter === false) {
            if (delivery_checked === true) {
                if (address === "" || address === null) {
                    setalert('Please input address')
                    document.getElementById('snack_warning').click();
                    return;
                }
                if (ssn === "") {
                    setalert('Please input SSN')
                    document.getElementById('snack_warning').click();
                    return;
                }
                if (vehicletype === "") {
                    setalert('Please select VehicleType')
                    document.getElementById('snack_warning').click();
                    return;
                }
                if (vehicletype !== "" && ssn !== "" && address !== "" && address !== null) {
                    const data = {
                        "id": localState.data.userId,
                        "name": name,
                        "email": email,
                        "phone": phone,
                        "address": address,
                        "ssn": ssn,
                        "vehicleType": vehicletype,
                        "password": "string",
                        "repeatPassword": "string"
                    }
                    var settings = {
                        "url": ApiConfig.url + "/api/registration​/transporter",
                        "method": "POST",
                        "timeout": 0,
                        "headers": {
                            "Content-Type": "application/json",
                            "Authorization": localState.authToken
                        },
                        "data": JSON.stringify(data),
                    };

                    $.ajax(settings).done(function (response) {
                        var settings = {
                            "url": ApiConfig.url + "/api/user/" + localState.data.userId,
                            "method": "GET",
                            "timeout": 0,
                            "headers": {
                                "Content-Type": "application/json",
                                "Authorization": localState.authToken
                            },
                        };

                        $.ajax(settings).done(function (response) {
                            const data1 = {
                                "ids": [
                                    response.transporterData.id
                                ]
                            }
                            var settings = {
                                "url": ApiConfig.url + "/api/transporter/enable",
                                "method": "PUT",
                                "timeout": 0,
                                "headers": {
                                    "Content-Type": "application/json",
                                    "Authorization": localState.authToken
                                },
                                "data": JSON.stringify(data1),
                            };

                            $.ajax(settings).done(function (response) {
                                setalert('It was updated succefully!')
                                document.getElementById('snack_success').click();
                            });
                        });
                    });
                }
            }
            else {
                var settings = {
                    "url": ApiConfig.url + "/api/user/" + localState.data.userId,
                    "method": "GET",
                    "timeout": 0,
                    "headers": {
                        "Content-Type": "application/json",
                        "Authorization": localState.authToken
                    },
                };

                $.ajax(settings).done(function (response) {
                    const data = {
                        "ids": [
                            response.transporterData.id
                        ]
                    }
                    var settings = {
                        "url": ApiConfig.url + "/api/transporter/disable",
                        "method": "PUT",
                        "timeout": 0,
                        "headers": {
                            "Content-Type": "application/json",
                            "Authorization": localState.authToken
                        },
                        "data": JSON.stringify(data),
                    };

                    $.ajax(settings).done(function (response) {
                        setalert('It was updated succefully!')
                        document.getElementById('snack_success').click();
                    });
                });
            }
        }
        else {
            if (delivery_checked === true) {
                if (address === "" || address === null) {
                    setalert('Please input address')
                    document.getElementById('snack_warning').click();
                    return;
                }
                if (vehicletype === "") {
                    setalert('Please select VehicleType')
                    document.getElementById('snack_warning').click();
                    return;
                }
                if (vehicletype !== "" && address !== "" && address !== null) {
                    var settings = {
                        "url": ApiConfig.url + "/api/user/" + localState.data.userId,
                        "method": "GET",
                        "timeout": 0,
                        "headers": {
                            "Content-Type": "application/json",
                            "Authorization": localState.authToken
                        },
                    };

                    $.ajax(settings).done(function (response) {
                        const data = {
                            "id": response.transporterData.id,
                            "name": name,
                            "email": email,
                            "phone": phone,
                            "address": address,
                            "vehicleType": vehicletype
                        }
                        var settings = {
                            "url": ApiConfig.url + "/api/registration​/transporter",
                            "method": "PUT",
                            "timeout": 0,
                            "headers": {
                                "Content-Type": "application/json",
                                "Authorization": localState.authToken
                            },
                            "data": JSON.stringify(data),
                        };
                        const data1 = {
                            "ids": [
                                response.transporterData.id
                            ]
                        }
                        var settings = {
                            "url": ApiConfig.url + "/api/transporter/enable",
                            "method": "PUT",
                            "timeout": 0,
                            "headers": {
                                "Content-Type": "application/json",
                                "Authorization": localState.authToken
                            },
                            "data": JSON.stringify(data1),
                        };

                        $.ajax(settings).done(function (response) {
                            setalert('It was updated succefully!')
                            document.getElementById('snack_success').click();
                        });
                    })
                }
            }
            else {
                var settings = {
                    "url": ApiConfig.url + "/api/user/" + localState.data.userId,
                    "method": "GET",
                    "timeout": 0,
                    "headers": {
                        "Content-Type": "application/json",
                        "Authorization": localState.authToken
                    },
                };

                $.ajax(settings).done(function (response) {
                    const data = {
                        "ids": [
                            response.transporterData.id
                        ]
                    }
                    var settings = {
                        "url": ApiConfig.url + "/api/transporter/disable",
                        "method": "PUT",
                        "timeout": 0,
                        "headers": {
                            "Content-Type": "application/json",
                            "Authorization": localState.authToken
                        },
                        "data": JSON.stringify(data),
                    };

                    $.ajax(settings).done(function (response) {
                        setalert('It was updated succefully!')
                        document.getElementById('snack_success').click();
                    });
                });
            }
        }

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
        if (value.length !== 0)
            setAddress(value[0].address);
        else
            setAddress("");
    }



    const Edit = ({
        onSubmit,
        children,
    }) => {
        return (
            <div className="card">
                <form onSubmit={onSubmit}>
                    <h1 style={{ color: '#e91e63' }}>Profile Card</h1>
                    {children}
                </form>
            </div>
        );
    }


    const ImgUpload = ({
        onChange,
        src,
    }) => {
        return (
            <label htmlFor="photo-upload" className="custom-file-upload fas">
                <div className="img-wrap img-upload" >
                    <img htmlFor="photo-upload" src={src} style={{ width: '100%', height: '100%', objectFit: 'fill' }} />
                </div>
                <input id="photo-upload" type="file" onChange={onChange} style={{ display: 'none' }} />
            </label>
        );
    }

    const photoUpload = (e) => {
        const reader = new FileReader();
        const file = e.target.files[0];
        reader.onloadend = () => {
            setFile(file);
            setImagePreviewUrl(reader.result);
        }
        reader.readAsDataURL(file);
    }

    function MyApp(props) {
        const { enqueueSnackbar } = useSnackbar();

        const handleClickVariant = (variant) => () => {
            // variant could be success, error, warning, info, or default
            enqueueSnackbar(props.alertt, { variant });
        };

        return (
            <React.Fragment>
                <Button onClick={handleClickVariant('error')} id="snack_error" style={{ display: 'none' }}>Show success snackbar</Button>
                <Button onClick={handleClickVariant('warning')} id="snack_warning" style={{ display: 'none' }}>Show success snackbar</Button>
                <Button onClick={handleClickVariant('info')} id="snack_info" style={{ display: 'none' }}>Show success snackbar</Button>
                <Button onClick={handleClickVariant('success')} id="snack_success" style={{ display: 'none' }}>Show success snackbar</Button>
            </React.Fragment>
        );
    }

    return (
        <div className={classes.container}>
            <SnackbarProvider maxSnack={5}>
                <MyApp alertt={alert} />
            </SnackbarProvider>
            <GridContainer>
                <GridItem xs={12} style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between' }}>
                    <CardHeader color="rose" icon style={{ padding: '0.9375rem 20px', cursor: 'pointer', width: '50%' }} onClick={() => { history.push('/') }}>
                        <CardIcon color="rose">
                            <PermIdentity onClick={() => { history.push('/') }} style={{ cursor: 'pointer' }} />
                        </CardIcon>
                        <h2 className={classes.cardIconTitle}>
                            Edit Profile - <small>Complete your profile</small>
                        </h2>
                    </CardHeader>
                    <div style={{ backgroundColor: '#e91e63', height: '50px', maxWidth: '50px', minWidth: '50px', width: '100%', borderRadius: '10px', marginRight: '5vw', cursor: 'pointer' }} onClick={() => { history.push('/') }}>
                        <HomeIcon style={{ width: '100%', height: '100%' }} />
                    </div>
                </GridItem>
                <GridItem xs={12} sm={12} md={8}>
                    <Card>

                        <CardBody>
                            <GridContainer style={{ margin: '5% 0%' }}>
                                <GridItem xs={12} sm={12} md={4}>
                                    <CssTextField
                                        InputProps={{
                                            readOnly: true,
                                        }}
                                        label="Email"
                                        variant="outlined"
                                        id="custom-css-outlined-input"
                                        style={{ width: '100%', color: '#464646', fontWeight: 'bold', margin: '2vh 0%' }}
                                        disabled
                                        value={email}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                    <CssTextField
                                        label="Full Name"
                                        variant="outlined"
                                        id="custom-css-outlined-input"
                                        disabled
                                        style={{ width: '100%', color: '#464646', fontWeight: 'bold', margin: '2vh 0%' }}
                                        value={name}
                                    />
                                </GridItem>
                                <GridItem xs={12} sm={12} md={4}>
                                    <CssTextField
                                        label="Phone"
                                        variant="outlined"
                                        disabled
                                        id="custom-css-outlined-input"
                                        style={{ width: '100%', margin: '2vh 0%' }}
                                        value={phone}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer style={{ margin: '2vh 0%' }}>
                                <GridItem xs={12} sm={12} md={12}>
                                    <Autocomplete
                                        id="combo-box-demo"
                                        multiple
                                        options={addressData}
                                        getOptionLabel={(option) => option.address}
                                        onInputChange={address_search}
                                        onChange={address_set}
                                        renderInput={(params) => <CssTextField {...params} label={address + " *"} variant="outlined" />}
                                    />
                                </GridItem>
                            </GridContainer>
                            <GridContainer style={{ margin: '5% 0%' }} style={{ justifyContent: 'space-around' }}>
                                <GridItem xs={12} sm={12} md={5} style={{ display: 'flex', color: 'rgba(60,60,60)', fontFamily: 'Roboto', textAlign: 'center' }}>
                                    <h3 style={{ width: '30%' }}>Latitude</h3>
                                    <TextField
                                        id="outlined-number"
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={handleOnChangeLatitude}
                                    />
                                    <h3 style={{ width: '20%' }}>° N</h3>
                                </GridItem>
                                <GridItem xs={12} sm={12} md={5} style={{ display: 'flex', color: 'rgba(60,60,60)', fontFamily: 'Roboto', textAlign: 'center' }}>
                                    <h3 style={{ width: '30%' }}>Longitude</h3>
                                    <TextField
                                        id="outlined-number"
                                        type="number"
                                        InputLabelProps={{
                                            shrink: true,
                                        }}
                                        onChange={handleOnChangeLongitude}
                                    />
                                    <h3 style={{ width: '20%' }}>° E</h3>
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem xs={4} sm={4} md={4} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }} className={classes.authcss}>
                                    <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} value="chef" checked={chef_checked} onClick={handleChangeAutho} />
                                    <div style={{ color: "#3C4858", fontSize: '170%', margin: '0' }}>
                                        Chef
                                    </div>
                                </GridItem>
                                <GridItem xs={4} sm={4} md={4} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                                    <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} checked={buyer_checked} />
                                    <div style={{ color: "#3C4858", fontSize: '170%', margin: '0' }}>
                                        Buyer
                                    </div>
                                </GridItem>
                                <GridItem xs={4} sm={4} md={4} style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center' }}>
                                    <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} value="transporter" checked={delivery_checked} onClick={handleChangeAutho} />
                                    <div style={{ color: "#3C4858", fontSize: '170%', margin: '0' }}>
                                        Delivery
                                    </div>
                                </GridItem>
                            </GridContainer>
                            <GridContainer>
                                <GridItem item xs={12} sm={12} md={12} className={delivery_checked === true ? classes.dshowing : classes.hidding} style={{ justifyContent: 'space-around' }}>

                                    <div style={{ width: '30%' }}>
                                        <h3 style={{ color: 'rgba(60,60,60)', fontFamily: 'Roboto' }}>VehicleType</h3>
                                        <FormControl style={{ width: '100%' }}>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="demo-simple-select"
                                                style={{ width: '60%' }}
                                                value={vehicletype}
                                                defaultValue="BICYCLE"
                                                onChange={handleOnChangeVehicleType}
                                            >
                                                <MenuItem value={'null'}>NONE</MenuItem>
                                                <MenuItem value={'BICYCLE'}>BICYCLE</MenuItem>
                                                <MenuItem value={'SCOOTER'}>SCOOTER</MenuItem>
                                                <MenuItem value={'CAR'}>CAR</MenuItem>
                                                <MenuItem value={'WALK '}>WALK </MenuItem>
                                            </Select>
                                        </FormControl>
                                    </div>
                                    <div style={{ width: '30%' }}>
                                        <h3 style={{ color: 'rgba(60,60,60)', fontFamily: 'Roboto' }}>SSN</h3>
                                        <TextField
                                            id="standard-basic"
                                            onChange={handleOnChangeSSN}
                                            value={ssn}
                                        />
                                    </div>
                                </GridItem>
                                <GridItem item xs={12} sm={12} md={12} style={{ marginTop: '43px', marginBottom: '43px', paddingLeft: '0 !important', marginLeft: '1%' }}>
                                    <CssTextField
                                        label="Profile"
                                        variant="outlined"
                                        id="custom-css-outlined-input"
                                        style={{ width: '100%' }}
                                        multiline
                                        rows={6}
                                        onChange={handleOnChangeProfile}
                                        value={profile !== null ? profile : ""}
                                    />
                                </GridItem>
                            </GridContainer>
                            <Button color="rose" className={classes.updateProfileButton} onClick={save}>
                                Update Profile
                            </Button>
                            {/* <Clearfix /> */}
                        </CardBody>
                    </Card>
                </GridItem>
                <GridItem xs={12} sm={12} md={4} style={{ textAlign: 'center', justifyContent: 'center', alignItems: 'center', alignSelf: 'center' }}>
                    <Card profile>
                        <GridItem xs={12} sm={12} md={12}>
                            {
                                <Edit onSubmit={(e) => this.handleSubmit(e)}>
                                    <ImgUpload onChange={(e) => photoUpload(e)} src={imagePreviewUrl !== "" ? imagePreviewUrl : "https://github.com/OlgaKoplik/CodePen/blob/master/profile.jpg?raw=true"} />
                                </Edit>
                            }
                        </GridItem>
                    </Card>
                </GridItem>
            </GridContainer>
        </div >
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
export default connect(mapStateToProps, mapDispatchToProps)(UserProfile);