
import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Switch from '@material-ui/core/Switch';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { textFieldChange } from './../../actions';
import { store } from "./../../reducers/index";
// import Button from '@material-ui/core/Button';
// import Grid from '@material-ui/core/Grid';
// import TextField from '@material-ui/core/TextField';
// import AutoComplete from './auto_complete';
// import PropTypes from 'prop-types';
const styles = theme => ({
    input: {
      display: 'none',
    },
    profilegbody:{
      backgroundColor:"white",
    },
    settingGridRow: {
      backgroundColor: '#F3F5F8',
      padding: 20,
      margin: '3px 0'
    },
    profilehead:{
      margin:"auto",
      color:"#12284C",
      fontSize:"24px",
      fontWeight:"bold",
      padding: '10px 0'
    },
    profiletext:{
      margin:"auto",
      color:"#9CADBA",
      fontSize:"18px",
      fontWeight:"bold",
      padding: '10px 0'
    },
    settingTxt: {
      color:"#9CADBA",
      fontSize:16,
      fontWeight:"bold",
    },
    profileheadbody:{
      padding:"20px 0",
      margin:"auto",
      width:"90%",
    },
    profileonline:{
      padding:"30px 0px 30px 0px",
      margin:"auto",
      width:"80%",
    },
    switchonline:{
      float:"right"
    },
  });
class Profileecheck extends React.Component {

    constructor(props) {
        super(props);
        // this.onUpdateInput = this.onUpdateInput.bind(this); 
        this.state = {
            itemvalue:" qwe qwe qwe",
            online: false,
            email: false,
            text: false
        };
      }
      handleChange = (event) => {
        // alert();
        this.setState(
          {

            [event.target.value]:event.target.checked
          }
        )
          
        store.dispatch(textFieldChange(event.target.checked, this.props.itemvalue, event.target.value));
        // console.log(event.target.checked);
      };
      render() {
        const{classes}=this.props;
        return (
            <div className={classes.profilegbody}>
                <div className={classes.profileheadbody}>
                    <p className={classes.profilehead}>
                        Choose how you would like to receive your notification
                    </p>
                    <p className={classes.profiletext}>
                        {this.props.itemvalue}
                    </p>     
                </div>
                <Grid container spacing={1}>   
                <Grid container>
                    <Grid className={classes.settingGridRow} item xs={6} >
                          <p className={classes.settingTxt}>Online</p>
                    </Grid>
                    <Grid className={classes.settingGridRow} item xs={6}>
                      <IOSSwitch
                            className={classes.switchonline}
                            checked={this.state.online}
                            // onChange={this.props.textFieldChange}
                            onChange={this.handleChange}
                            
                            value="online"
                        />
                        {/* <input type="text" className="form-control row" placeholder="Enter text" value={this.props.textFieldValue} onChange={this.props.textFieldChange} /> */}
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid className={classes.settingGridRow} item xs={6} >
                          <p className={classes.settingTxt}>Email</p>
                    </Grid>
                    <Grid className={classes.settingGridRow} item xs={6}>
                      <IOSSwitch
                            className={classes.switchonline}
                            // checked={state.checkedB}
                            // onChange={handleChange('checkedB')}
                            onChange={this.handleChange}
                            value="email"
                        />
                    </Grid>
                </Grid>
                <Grid container>
                    <Grid  className={classes.settingGridRow} item xs={6} >
                          <p className={classes.settingTxt}>Text</p>
                    </Grid>
                    <Grid  className={classes.settingGridRow} item xs={6}>
                      <IOSSwitch
                            className={classes.switchonline}
                            // checked={state.checkedB}
                            // onChange={handleChange('checkedB')}
                            onChange={this.handleChange}
                            value="text"
                        />
                    </Grid>
                </Grid>
                </Grid>
            </div>
        );
      }
  }

function mapStateToProps(state) {
    return {
        textFieldValue: state.textFieldValue,
    }
}

const mapDispatchToProps = {
    textFieldChange
};

const Profileecheckcontainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(Profileecheck);

//   BioCareer.propTypes = {
//     classes: PropTypes.object.isRequired,
//   };
const IOSSwitch = withStyles(theme => ({
    root: {
      width: 42,
      height: 26,
      padding: 0,
      margin: theme.spacing(1),
    },
    switchBase: {
      padding: 1,
      color:"#2455E0",
      '&$checked': {
        transform: 'translateX(16px)',
        color: "#2455E0",
        '& + $track': {
         backgroundColor: '#F9FAFC',
          opacity: 1,
        //   border: 'none',
        },
      },
      '&$focusVisible $thumb': {
        color: '#2455E0',
        border: '6px solid #fff',
      },
    },
    thumb: {
      width: 24,
      height: 24,
    },
    track: {
      borderRadius: 26 / 2,
      border: `1px solid ${theme.palette.grey[400]}`,
      backgroundColor: theme.palette.grey[50],
      opacity: 1,
      transition: theme.transitions.create(['background-color:', 'border']),
    },
    checked: {},
    focusVisible: {},
  }))(({ classes, ...props }) => {
    return (
      <Switch
        focusVisibleClassName={classes.focusVisible}
        disableRipple
        classes={{
          root: classes.root,
          switchBase: classes.switchBase,
          thumb: classes.thumb,
          track: classes.track,
          checked: classes.checked,
        }}
        {...props}
      />
    );
  });
  export default withStyles(styles)(Profileecheckcontainer);