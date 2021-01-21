import React, { useEffect } from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import CheckCircle from '@material-ui/icons/CheckCircleOutline';
import Location from '@material-ui/icons/LocationOnOutlined';
import Morehoriz from '@material-ui/icons/MoreHoriz';
import Button from '@material-ui/core/Button';
import clsx from 'clsx';
import { loadCSS } from 'fg-loadcss';
import Icon from '@material-ui/core/Icon';
import { Hidden } from '@material-ui/core';

const styles = theme => ({
  head: {
    width: "100%",
    backgroundColor: "#727F95",
  },
  profilepic: {
    margin: "auto",
    padding: "50px 0px 20px 0px",
    [theme.breakpoints.up('md')]: {
      width: '90%'
    },
    [theme.breakpoints.up('lg')]: {
      width: '70%'
    },
    [theme.breakpoints.down('sm')]: {
      padding: "50px 32px 20px 24px",
      width: '100%',
    },
  },
  picture: {
    width: "260px",
    borderRadius: "20px",
    position: 'absolute',
    left: '0px',
    top: 40,
    padding: 10,
    backgroundColor: 'white',
    [theme.breakpoints.down('sm')]: {
      width: "170px",
    },
  },
  headerCenter: {
    padding: "0px 0px 0px 290px",
    width: "100%",
    [theme.breakpoints.down('sm')]: {
      padding: "0px 0px 0px 200px",
    },
  },
  headerPlayername: {
    fontSize: "28px",
    fontFamily: "small-caps",
    fontWeight: "bold",
    verticalAlign: 'middle',
    padding: '0px 15px',
    [theme.breakpoints.down('sm')]: {
      fontSize: "25px",
    },
  },
  playerdescription1: {
    fontSize: 18,
    [theme.breakpoints.down('sm')]: {
      fontSize: "15px",
    },
  },
  playerdescription2: {
    verticalAlign: 'middle',
    padding: '0px 10px',
    fontSize: 16,
    [theme.breakpoints.down('sm')]: {
      fontSize: "15px",
    },
  },
  playerflag: {
    verticalAlign: 'middle',
    padding: '0px 10px',
    // [theme.breakpoints.down('xs')]: {
    //   padding: '0px 50px',
    // },
  },
  setting: {
    borderRadius: "10px",
    backgroundColor: "#8E98AA",
    float: "right",
    minWidth: 30,
  },
  facebookicon: {
    borderRadius: "6px",
    fontSize: 30,
    color: "white",
    backgroundColor: "#8E98AA",
    minWidth: 30,
  },
  googleicon: {
    borderRadius: "6px",
    fontSize: 30,
    color: "white",
    backgroundColor: "#8E98AA",
    margin: "0px 20px",
    minWidth: 30,
  },
  linkedinicon: {
    fontSize: 30,
    color: "white",
    backgroundColor: "#8E98AA",
    minWidth: 30,
  }
});

const Profile = ({ classes }) => {

  useEffect(() => {
    loadCSS(
      'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css',
      document.querySelector('#font-awesome-css'),
    );
  }, []);

  return (
    <div className={classes.head}>
      <div className={classes.profilepic} >
        <div style={{ display: "flex", position: "relative" }}>
          <img alt="Captain's Club" className={classes.picture} src={require('../../assets/images/profile_pic.png')} />
          <div className={classes.headerCenter}>
            <p style={{ paddingTop: 40 }}>
              <CheckCircle style={{ color: "white", backgroundColor: '#499BE2', fontSize: "40px", borderRadius: '50%', verticalAlign: 'middle' }} />
              <span className={classes.headerPlayername}>Pablo Larrazabal</span>
              <span className={classes.playerflag}>
                <i className="material-icons" style={{ verticalAlign: 'middle' }}>flag</i>
                Hcp1
              </span>
            </p>
            <p className={classes.playerdescription1}>
              Professional Golfer, Callaway Golf Play
            </p>
            <p>
              <Location style={{ verticalAlign: 'middle' }} />
              <span className={classes.playerdescription2}>Santa Barbara, California</span>
            </p>
            <p>
              <Button className={classes.facebookicon}>
                <Icon className={clsx('fa fa-facebook')} />
              </Button>
              <Button className={classes.googleicon}>
                <Icon className={clsx('fa fa-google')} />
              </Button>
              <Button className={classes.linkedinicon}>
                <Icon className={clsx('fa fa-linkedin')} />
              </Button>
              <Hidden xsDown>
                <Button className={classes.setting}>
                  <Morehoriz style={{ fontSize: "30px", color: 'white' }} />
                </Button>
              </Hidden>
            </p>
            <Button style={{ color: "white", borderColor: "white", position: 'absolute', top: '0px', right: '0px' }} variant="outlined" className={classes.button}>
              Add Cover Photo
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
export default withStyles(styles)(Profile)
