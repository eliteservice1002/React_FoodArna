import React from 'react'
import withStyles from '@material-ui/core/styles/withStyles';
import Profilesetting from '../../components/Profile/privacy_setting';
import GolfMembership from '../../components/Profile/golf_membership';
import SummaryPlayed from '../../components/Profile/summary_played';
import Wishlist from '../../components/Profile/wish_list';
import GearPreference from '../../components/Profile/gear_preference';
import RecentActivities from '../../components/Profile/recent_activities';
import ProfileHeader from '../../components/Profile/profile_header';
import BioCareer from '../../components/Profile/bio_career';
import Profilecheck from '../../components/Profile/profilesetting_check';
import{ useState } from 'react';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  profilecheck:{
    backgroundColor:"#112E81",
    textAlign: 'center', 
    padding:"20px"
  },
  content: {
    backgroundColor: '#E9EDF2',
    minHeight: '100vh',
    // padding: theme.spacing(10, 0, 8),
    [theme.breakpoints.up('lg')]: {
      padding: "80px 0 180px"
    },
    [theme.breakpoints.down('md')]: {
      padding: "80px 0 420px"
    },
    [theme.breakpoints.down('sm')]: {
      padding: "80px 0 400px"
    }
  },
  viewMode: {
    margin: 'auto',
    [theme.breakpoints.up('md')]: {
      width: '90%'
    },
    [theme.breakpoints.up('lg')]: {
      width: '70%'
    },
    [theme.breakpoints.down('sm')]: {
      width: '100%',
      padding: theme.spacing(0, 3)
    },
    [theme.breakpoints.down('xs')]: {
      padding: theme.spacing(0, 2)
    },
  }
});

const Profile = ({classes}) => { 

    const [checkitem, setItemdata] = useState();
    const [checkflag, setFlag] = useState();
    const onUpdateInput = (itemvalue,flag)=> { 
      setItemdata(itemvalue);
      setFlag(flag);
    };
    const saveData = (e)=> { 
      setFlag(0);
    };

    if(checkflag===1){
      return (
        <div className={classes.content}>
            <div className={classes.profilecheck}>
              <span style={{fontSize:"20px",fontWeight:"bold"}}> Privacy Settings</span>
              <span><Button style={{color:"white",float:"right",fontWeight:"bold",fontSize:"16px",}} onClick={saveData}>Save</Button></span>
            </div> 
            <Profilecheck itemvalue={checkitem}></Profilecheck>
        </div>
      )  
    }else{
      return(
        <div className={classes.content}>
            <ProfileHeader></ProfileHeader>
            <div className={classes.viewMode}>
              {/* <Profilecheck itemvalue={checkitem}></Profilecheck> */}
              <Profilesetting action={onUpdateInput}></Profilesetting>
              <GolfMembership></GolfMembership>
              <BioCareer></BioCareer>
              <RecentActivities></RecentActivities>
              <SummaryPlayed></SummaryPlayed>
              <Wishlist></Wishlist>
              <GearPreference></GearPreference>
            </div>
        </div>
      )
    }
}
export default withStyles(styles)(Profile)
