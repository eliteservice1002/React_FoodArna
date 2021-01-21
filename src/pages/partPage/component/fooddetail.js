// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Container from '@material-ui/core/Container';
// import Grid from '@material-ui/core/Grid';
// import Button from '@material-ui/core/Button';
// import { StyledContainer, OpacityLayer } from "../partPageStyle";
// import Typography from '@material-ui/core/Typography';
// import Checkbox from '@material-ui/core/Checkbox';
// import TextField from '@material-ui/core/TextField';
// import { connect } from 'react-redux';
// import Snack from './snackbar';
// import {
//     withStyles,
//     makeStyles,
// } from '@material-ui/core/styles';
// import { ChangeEmail, ChangeID } from "../../../reducers/action";
// const useStyles = makeStyles({
//     button: {
//         fontFamily: 'Roboto',
//         fontStyle: 'normal',
//         fontWeight: 'normal',
//         fontSize: '100%',
//         color: '#464646',
//         cursor: 'pointer',
//         border: '1px solid red',
//         borderRadius: '10px',
//         width: '40%',
//         margin: 'auto',
//     },
//     submit: {
//         // margin: theme.spacing(3, 0, 2),
//         width: '40%',
//         // height: '67px',
//         borderRadius: '19px',
//         fontFamily: 'Roboto',
//         fontStyle: 'normal',
//         fontWeight: 'normal',
//         fontSize: '32px',
//         lineHeight: '37px',
//         textAlign: 'center',
//         color: '#FFFFFF'
//     },
// });
// const CssTextField = withStyles({
//     root: {
//         '& label': {
//             fontFamily: 'Roboto',
//             fontStyle: 'normal',
//             fontWeight: 'normal',
//             fontSize: '22px',
//             alignItems: 'center',
//             textAlign: 'center',

//             color: '#777777',
//             transform: 'translate(22px, 16px) scale(1)'
//         },

//         '& label.Mui-focused': {
//             color: 'green',
//         },
//         '& .MuiInput-underline:after': {
//             borderBottomColor: 'green',
//         },
//         '& .MuiOutlinedInput-root': {
//             '& fieldset': {
//                 border: '1px solid #dd354d',
//                 borderRadius: '19px'
//             },
//             '&:hover fieldset': {
//                 borderColor: 'yellow',
//             },
//             '&.Mui-focused fieldset': {
//                 borderColor: 'green',
//             },
//         },
//     },
// })(TextField);
// const buttonStyle = {
//     borderRadius: '20px',
//     backgroundColor: '#dd354d',
//     border: '2px solid #dd354d',
//     color: '#ffffff',
//     alignSelf: 'center'
// }
// function Profile(props) {
//     const classes = useStyles();
//     // const profileData1 = {
//     //     name: '',
//     //     phone: '',
//     //     location: '',
//     //     profile: '',
//     //     flavor: '',
//     // };

//     // const [profileData, setprofileData] = useState(profileData1);
//     const [name, setName] = useState("");
//     const [phone, setPhone] = useState("");
//     const [location, setLocation] = useState("");
//     const [profile, setProfile] = useState("");
//     const [flavor, setFlavor] = useState("");
//     const [avatar, setavatar] = useState("");
//     const [chef_checked, setChef] = React.useState(false);
//     const [buyer_checked, setBuyer] = React.useState(false);
//     const [delivery_checked, setDelivery] = React.useState(false);
//     const [alert, setalert] = useState("");

//     const handleChangeChefAutho = (event) => {
//         setChef(event.target.checked);
//     };
//     const handleChangeBuyerAutho = (event) => {
//         setBuyer(event.target.checked);
//     };
//     const handleChangeDeliveryAutho = (event) => {
//         setDelivery(event.target.checked);
//     };
//     const handleOnChangeName = (e) => {
//         setName(e.target.value);
//     };
//     const handleOnChangePhone = (e) => {
//         setPhone(e.target.value);
//     };
//     const handleOnChangeLocation = (e) => {
//         setLocation(e.target.value);
//     };
//     const handleOnChangeProfile = (e) => {
//         setProfile(e.target.value);
//     };
//     const handleOnChangeFlaver = (e) => {
//         setFlavor(e.target.value);
//     };
//     const init = () => {
//         const data = {
//             email: props.email
//         };
//         axios.post('http://192.168.109.173:8000/api/foods/rating', data)
//             .then(function (res) {
//                 if (res.data[0].avatar === null) {
//                     setavatar("avatar.jpg");
//                 }
//                 else {
//                     setavatar(res.data[0].avatar);
//                 }
//                 sessionStorage.setItem('token', res.data[0].email);
//                 props.ChangeEmail(res.data[0].email);
//                 props.ChangeID(res.data[0].id);
//                 setName(res.data[0].name);
//                 setPhone(res.data[0].phone);
//                 setChef(res.data[0].autho_chef);
//                 setBuyer(res.data[0].autho_buyer);
//                 setDelivery(res.data[0].autho_delivery);
//                 setLocation(res.data[0].location);
//                 setProfile(res.data[0].profile);
//                 setFlavor(res.data[0].flavor);
//             })
//             .catch(function (e) {
//                 setalert("Please proceed to Login.")
//                 document.getElementById('snack_error').click();
//             })
//     }
//     useEffect(() => {
//         init();
//     }, []);
//     const change_avatar = (event) => {
//         const data = new FormData()
//         data.append('file', event.target.files[0]);
//         if (props.email !== undefined && props.email !== "") {
//             axios.post("http://192.168.109.173:8000/upload", data)
//                 .then(res => {
//                     setavatar(res.data.filename);
//                 })
//         }
//         else {
//             setalert("Please proceed to Login.")
//             document.getElementById('snack_error').click();
//         }
//     }

//     const save = () => {
//         const data = {
//             email: props.email,
//             avatar: avatar,
//             name: name,
//             phoen: phone,
//             autho_chef: chef_checked,
//             autho_buyer: buyer_checked,
//             autho_delivery: delivery_checked,
//             location: location,
//             profile: profile,
//             flavor: flavor
//         }
//         axios.put('http://192.168.109.173:8000/api/users/update', data)
//             .then(function (res) {
//                 if (res.status === 200) {
//                     init();
//                     setalert(res.data.message);
//                     document.getElementById('btn_success').click();
//                 }
//                 else {
//                     setalert(res.data.message);
//                     document.getElementById('btn_warning').click();
//                 }
//             })
//     }
//     return (
//         <StyledContainer>
//             <Snack alert={alert} />
//             <OpacityLayer background='profileBg' />
//             <Container fixed style={{ zIndex: 1, backgroundColor: '#fff', borderRadius: '10px', border: '1px solid #464646', opacity: '0.8' }}>
//                 <Grid container spacing={1}>
//                     <Grid item xs={12} sm={8}>
//                         <Grid item xs={12} style={{ marginTop: '43px', justifyContent: 'space-between', display: 'flex', flexWrap: 'wrap' }}>
//                             <CssTextField
//                                 label="Full Name"
//                                 variant="outlined"
//                                 id="custom-css-outlined-input"
//                                 style={{ width: '40%', color: '#464646', fontWeight: 'bold' }}
//                                 onChange={handleOnChangeName}
//                                 value={name}
//                             />
//                             <CssTextField
//                                 label="Phone"
//                                 variant="outlined"
//                                 id="custom-css-outlined-input"
//                                 style={{ width: '40%' }}
//                                 onChange={handleOnChangePhone}
//                                 value={phone}
//                             />
//                         </Grid>
//                         <Grid item xs={12} style={{ marginTop: '43px' }}>
//                             <CssTextField
//                                 label="Location"
//                                 variant="outlined"
//                                 id="custom-css-outlined-input"
//                                 style={{ width: '100%' }}
//                                 onChange={handleOnChangeLocation}
//                                 value={location}
//                             />
//                         </Grid>
//                         <Grid item xs={12} style={{ marginTop: '43px' }} style={{ display: "flex", justifyContent: 'space-between', marginTop: '43px' }}>
//                             <Grid item xs={12} style={{ display: 'flex' }}>
//                                 <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} checked={chef_checked} onClick={handleChangeChefAutho} />
//                                 <Typography variant="h5" gutterBottom style={{ color: "#464646" }}>
//                                     Chef
//                             </Typography>
//                             </Grid>
//                             <Grid item xs={12} style={{ display: 'flex' }}>
//                                 <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} checked={buyer_checked} onClick={handleChangeBuyerAutho} />
//                                 <Typography variant="h5" gutterBottom style={{ color: "#464646" }}>
//                                     Buyer
//                             </Typography>
//                             </Grid>
//                             <Grid item xs={12} style={{ display: 'flex' }}>
//                                 <Checkbox inputProps={{ 'aria-label': 'uncontrolled-checkbox' }} checked={delivery_checked} onClick={handleChangeDeliveryAutho} />
//                                 <Typography variant="h5" gutterBottom style={{ color: "#464646" }}>
//                                     Delivery
//                             </Typography>
//                             </Grid>
//                         </Grid>
//                         <Grid item xs={12} style={{ marginTop: '43px' }}>
//                             <CssTextField
//                                 label="Profile"
//                                 variant="outlined"
//                                 id="custom-css-outlined-input"
//                                 style={{ width: '100%' }}
//                                 multiline
//                                 rows={6}
//                                 onChange={handleOnChangeProfile}
//                                 value={profile}
//                             />
//                         </Grid>
//                         <Grid item xs={12} style={{ marginTop: '43px', marginBottom: '43px' }}>
//                             <CssTextField
//                                 label="Flavor"
//                                 variant="outlined"
//                                 id="custom-css-outlined-input"
//                                 style={{ width: '100%' }}
//                                 multiline
//                                 rows={6}
//                                 onChange={handleOnChangeFlaver}
//                                 value={flavor}
//                             />
//                         </Grid>
//                     </Grid>
//                     <Grid item xs={12} sm={4} style={{ alignSelf: 'center' }}>
//                         <form method="post" enctype="multipart/form-data" style={{ textAlign: 'center' }}>
//                             <input
//                                 id="upload-photo"
//                                 type="file"
//                                 name="{props.id_val}"
//                                 accept="image/gif,image/jpeg,image/jpg,image/png,video/mp4,video/x-m4v"
//                                 title="Add photos or video"
//                                 onChange="{props.onchange}"
//                                 multiple
//                                 hidden='true'
//                                 onChange={change_avatar}
//                             />
//                             <label htmlFor="upload-photo">
//                                 <img style={{ borderRadius: '10px', width: '50%' }} src={"http://192.168.109.173:8000/" + avatar} alt="alt" />
//                             </label>
//                             <br></br>
//                             <Button
//                                 onClick={save}
//                                 fullWidth
//                                 variant="contained"
//                                 color="primary"
//                                 className={classes.submit}
//                                 style={buttonStyle}
//                             >
//                                 Save
//                             </Button>
//                         </form>
//                     </Grid>
//                 </Grid>
//             </Container>
//         </StyledContainer>
//     );
// }


// function mapStateToProps(state) {
//     return {
//         email: state.email,
//         id: state.id
//     };
// }
// const mapDispatchToProps = {
//     ChangeEmail,
//     ChangeID
// };
// export default connect(mapStateToProps, mapDispatchToProps)(Profile);