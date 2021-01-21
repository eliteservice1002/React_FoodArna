import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Morehoriz from '@material-ui/icons/MoreHoriz';
import Morevert from '@material-ui/icons/MoreVert';
import Popover from '@material-ui/core/Popover';
import Hidden from '@material-ui/core/Hidden';

const styles = theme => ({
  activityTitle: {
    padding: 10,
    fontSize: 25,
    color: "#11274B",
    fontWeight: "bold",
    margin: '10px 0'
  },
  acceptTxt: {
    float: 'left',
    color: '#4694D9',
    fontSize: 18,
    fontWeight: "bold"
  },
  acceptBtn: {
    float: 'right',
    color: '#4694D9',
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: '#FFFFFF',
    border: '1px solid grey'
  },
  declineBtn: {
    float: 'left',
    color: '#4694D9',
    fontSize: 18,
    fontWeight: "bold",
    backgroundColor: '#1A73E7',
    border: '1px solid grey'
  },
  rmvTxt: {
    color: '#727F95',
    fontSize: 16
  },
  offTxt: {
    color: '#4694D9',
    fontSize: 16,
    fontWeight: 'bold'
  },
  undoTxt: {
    color: '#4694D9',
    fontSize: 16,
    fontWeight: 'bold'
  },
  ownerTxt: {
    fontSize: 16,
    color: "#727F95",
    fontWeight: "bold"
  },
  descTxt: {
    fontSize: 16,
    color: "#727F95",
    textAlign: 'right'
  },
  timeText: {
    fontSize: 16,
    color: "#727F95",
    textAlign: 'right',
    float: 'right'
  },
  declineTxt: {
    color: '#4694D9',
    fontSize: 18,
    fontWeight: "bold",
    float: 'right',
  },
  avatar: {
    // marginTop: '3px',
    borderRadius: 5,
    float: 'left',
    marginRight: 20
  },
  recentpanel: {
    // width: "100%",
    //color: "black",
    backgroundColor: "white",
    borderRadius: 5,
    //border: "10px solid white",
    padding: "20px 20px",
  },
  recentactivities: {
    // width: "100%",
    //color: "black",
    backgroundColor: "#F3F5F8",
    borderRadius: 5,
    padding: 20,
    display: "flex",
  },
  noactivities: {
    margin: 'auto',
    fontSize: 20,
    color: "#C5CAD3",
  },
  activityEdit: {
    fontSize: 15,
    float: "right",
    // height: "100%",
    // paddingTop: "10px",
    color: "#2783D4",
  },
  iconPos: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },
  popoverTxt: {
    padding: '20px 20px',
    fontSize: 16,
    color: "#727F95",
  }
})
  const RecentActivities = ({ classes }) => {
  const [ editFlag, setEditFlag ] = useState(0);
  const [ moreFlag, setMoreFlag ] = useState(-1);
  const [anchorEl, setAnchorEl] = useState(null);
  const [ rcntActivitiesData ] = useState([
    {
      ownerName: 'Rob Duva',
      descTxt:  'invited you to an event:',
      resultTxt: 'Captain’s Club Launch.',
      timeHistory: '15m',
    },
    {
      ownerName: 'You',
      descTxt:  'have a new friend request:',
      resultTxt: 'Brian Littleton',
      timeHistory: '2d ago',
    }
  ]);
  const [ rmvFlag, setRmvFlag ] = useState();
  const [ offFlag, setOffFlag ] = useState();
  const editEnable = () => {
    setEditFlag(!editFlag);
  }
  function handleClick(event) {
    setMoreFlag(Number(event.currentTarget.id));
    setRmvFlag(0);
    setOffFlag(0);
    setAnchorEl(event.currentTarget);
  }
  function handleClose() {
    setAnchorEl(null);
  }
  function rmvNotification(){
    setRmvFlag(1);
    setOffFlag(0);
    handleClose();
  }
  function offNotification(){
    setRmvFlag(0);
    setOffFlag(1);
    handleClose();
  }
  function undoClick(){
    setRmvFlag(0);
    setOffFlag(0);
  }
  function offClick(){
    setRmvFlag(0);
    setOffFlag(1);
  }
  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;
  
  return (
    <div>
      <p className={classes.activityTitle}>Recent Activities
        <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.activityEdit} onClick={editEnable}>
            Edit
        </Button>
      </p>
      <div className={classes.recentpanel}>
        <div className={classes.recentactivities}>
          {rcntActivitiesData.length === 0 ? (
            <div className={classes.noactivities}>No Activities Yet</div>
          ):(
            <Grid container>
              {rcntActivitiesData.map((data, index) => {
                return (
                  <Grid container key={index} item xs={12} style={{padding: '10px 0'}}>
                    <Grid item xs={9} sm={9} md={7}>
                      {(moreFlag===index && rmvFlag) ? (
                          <div> 
                            <div><span className={classes.rmvTxt}>This notification is now removed.</span>&nbsp;<span className={classes.undoTxt} onClick={undoClick} >Undo</span></div>
                            <div><span className={classes.offTxt} onClick={offClick}>Turn off notification like this</span></div>
                          </div>
                        ):
                        (moreFlag===index && offFlag) ? (
                          <div><span className={classes.rmvTxt}>You will no longer receive notifications like this.</span>&nbsp;<span className={classes.undoTxt} onClick={undoClick}>Undo</span></div>
                        ):(
                          <div>
                            <Avatar alt="" src={require('../../assets/images/profile_pic.png')} className={classes.avatar}/>
                            <div style={{padding: '8px 0'}}>
                              <span className={classes.ownerTxt}>{data.ownerName}&nbsp;</span>
                              <span className={classes.descTxt}>{data.descTxt}&nbsp;</span>
                              <span className={classes.ownerTxt}>{data.resultTxt}</span>
                            </div>
                          </div>
                        )
                      }
                    </Grid>
                    <Hidden smDown>
                      <Grid item xs={editFlag ? 2:3}>
                        <div style={{padding: '8px 0'}}>
                          <span className={classes.acceptTxt}>Accept</span>
                          <span className={classes.declineTxt}>Decline</span>
                        </div>
                      </Grid>
                    </Hidden>
                    <Grid item xs={2}>
                      <div style={{padding: '8px 0'}}>
                        <span className={classes.timeText}>{data.timeHistory}</span>
                      </div>
                    </Grid>
                    {editFlag ? (
                      <Grid item xs={1} className={classes.iconPos}>
                        <Button id={index} onClick={handleClick}>
                          <Hidden smDown>
                            <Morehoriz style={{ fontSize: "20px", color: "#727F95" }} />
                          </Hidden>
                          <Hidden mdUp>
                            <Morevert style={{ fontSize: "20px", color: "#727F95" }} />
                          </Hidden>
                        </Button>
                      </Grid>
                      ):(
                        <div></div>
                      )
                    }
                    <Hidden mdUp>
                      <Grid container item xs={12} spacing={5}>
                        <Grid item xs={6}>
                          <Button className={classes.acceptBtn}>Accept</Button>
                        </Grid>
                        <Grid item xs={6}>
                          <Button className={classes.declineBtn}>Decline</Button>
                        </Grid>
                        {/* <div style={{padding: '8px 0'}}> */}
                          
                          
                        {/* </div> */}
                      </Grid>
                    </Hidden>
                  </Grid>
                )
              })} 
            </Grid>           
          )}
        </div>
      </div>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
        // transformOrigin={{
        //   vertical: 'top',
        //   horizontal: 'center',
        // }}
      >
        <div className={classes.popoverTxt}>
          <p onClick={rmvNotification}>Remove this notification</p>
          <p onClick={offNotification}>Turn off notifications like this</p>
        </div>
      </Popover>
    </div >
  );
}
export default withRouter(withStyles(styles)(RecentActivities))