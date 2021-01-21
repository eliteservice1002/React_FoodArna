import React, { useState } from 'react'
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import GolfCourse from './golf_course';
import GolfLocation from './golf_location';
import InputAdornment from '@material-ui/core/InputAdornment';
import Grid from '@material-ui/core/Grid';
import LocationOn from '@material-ui/icons/LocationOn';
import Clear from '@material-ui/icons/Clear';
import { Hidden } from '@material-ui/core';

const styles = theme => ({
  golftitle: {
    padding: "10px 10px 10px 10px",
    fontSize: "25px",
    color: "#11274B",
    fontWeight: "bold",
    marginTop: "10px",
    marginBottom: "10px",
  },
  golfedit: {
    fontSize: "15px",
    float: "right",
    height: "100%",
    paddingTop: "10px",
    color: "#2783D4",
  },
  golfcancel: {
    fontSize: "15px",
    float: "right",
    height: "100%",
    paddingTop: "10px",
    color: "#2783D4",
    marginLeft: 10,
  },
  golfsave: {
    fontSize: "15px",
    float: "right",
    height: "100%",
    paddingTop: "10px",
    backgroundColor: "#2883D4",
    color: "white",
  },
  golfLinkMobile: {
    fontSize: "15px",
    float: "right",
    height: "100%",
    paddingTop: "10px",
    color: "#2783D4",
  },
  golfpanel: {
    width: "100%",
    color: "black",
    backgroundColor: "white",
    borderRadius: "5px",
    borderColor: "white",
    border: "10px solid",
    padding: "10px 0px",
  },
  golf: {
    width: "100%",
    color: "black",
    backgroundColor: "#F3F5F8",
    borderRadius: "5px",
    padding: "20px",
    display: "flex",
  },
  golfeditmobile: {
    width: "100%",
    color: "#354866",
    backgroundColor: "#F3F5F8",
    borderRadius: "5px",
    display: "flex",
    padding: "15px 0px 15px  0px",
  },
  controlbtn: {
    border: "2px solid #D1D8E0",
    height: "55px",
    width: "100%",
    fontFamily: "Sentinel-Black,Roboto,sans-serif",
  },
  deletebtn: {
    minWidth: 0,
    width: 36,
    borderRadius: "50%",
    backgroundColor: "#B5B5B5",
    color: "white",
    verticalAlign: "-webkit-baseline-middle",
  },
  panelname: {
    fontWeight: "Bold",
    color: "#727F95",
    marginRight: "40px",
    verticalAlign: "middle",
  },
  rank: {
    marginTop: "0px",
    paddingLeft: 5,
    paddingRight: 5,
    width: "100%",
  },
  website: {
    marginTop: "0px",
    paddingLeft: 10,
    paddingRight: 10,
    width: "100%",
  },
  hyperlink: {
    width: 20,
  },
  course_list_title: {
    padding: 10,
    color: "#354866",
    fontSize: 25,
    fontWeight: "bold",
  },
  course_list: {
    padding: 10,
    fontSize: 25,
    color: "#73859B",
    fontWeight: 400,
  },
  course_list_mobile: {
    padding: 10,
    fontSize: 25,
    color: "#73859B",
    fontWeight: 400,
  },
  list_course: {
    color: "#4694D9",
  },
})
const list = [
  { rank: "#1", course: "St. Andrews - The Old Course", location: "Saint Andrews (Scotland)", website: "www.captain.com" },
  { rank: "#2", course: "St. Andrews - The Old Course", location: "Saint Andrews (Scotland)", website: "www.captain.com" },
  { rank: "#2", course: "St. Andrews - The Old Course", location: "Saint Andrews (Scotland)", website: "www.captain.com" },
  { rank: "#2", course: "St. Andrews - The Old Course", location: "Saint Andrews (Scotland)", website: "www.captain.com" },
  { rank: "#4", course: "Augusta National Golf Club", location: "Augusta, Georgia (U.S.A)", website: "www.captain.com" }
];

const GolfMembership = ({ classes }) => {
  const [editFlag, setEditFlag] = useState(false);
  //datas to display golf membership
  const [courseDatas, setCourseDatas] = useState(list);
  //make golf membership rows one by one when the viewport is desktop.

  const [rank, setRank] = useState("");
  const [course, setCourse] = useState("");
  const [website, setWebsite] = useState("");
  const [location, setLocation] = useState("");

  const handleRank = (event) => {
    setRank(event.target.value);
  }
  const handleWebsite = (event) => {
    setWebsite(event.target.value);
  }
  const handleCourse = (event) => {
    setCourse(event.target.value);
  }
  const handleLocation = (event) => {
    setLocation(event.target.value);
  }

  const Desktopcourse = (props) => {
    if (props.Flag) {
      return (
        <Grid container spacing={0}>
          <Grid item sm></Grid>
          <Grid item sm={1}>
            <TextField
              value={props.course.rank}
              placeholder="Rank"
              className={classes.rank}
              margin="normal"
              variant="outlined"
            />
          </Grid>
          <Grid item sm={4}>
            <TextField
              placeholder="Golf Course"
              value={props.course.course}
              className={classes.website}
              margin="normal"
              variant="outlined"
              InputProps={{
              }}
            />
          </Grid>
          <Grid item sm={3}>
            <TextField
              placeholder="Location"
              value={props.course.location}
              className={classes.website}
              margin="normal"
              variant="outlined"
              InputProps={{
                startAdornment: <InputAdornment position="start"><LocationOn /></InputAdornment>,
              }}
            />
          </Grid>
          <Grid item sm={3}>
            <TextField
              placeholder="Website"
              value={props.course.website}
              className={classes.website}
              margin="normal"
              variant="outlined"
              InputProps={{
                startAdornment:
                  <InputAdornment position="start">
                    <img alt="" className={classes.hyperlink} src={require('../../assets/images/hyperlink.png')} />
                  </InputAdornment>,
              }}
            />
          </Grid>
          <Grid item sm>
            <Button id={props.index} onClick={() => deleteRow(props.index)} aria-controls="simple-menu" aria-haspopup="true" className={classes.deletebtn}>
              <Clear />
            </Button>
          </Grid>
          <Grid item sm></Grid>
        </Grid>
      );
    } else {
      return (
        <Grid container spacing={2}>
          <Grid item xs={1} sm={1}>
            <span>{props.course.rank}</span>
          </Grid>
          <Grid item xs={5} sm={5} className={classes.list_course}>
            {props.course.course}
          </Grid>
          <Grid item xs={5} sm={5}>
            <LocationOn style={{ verticalAlign: "middle" }} />
            {props.course.location}
          </Grid>
          <Grid item xs={1} sm={1}>
            <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.link}>
              <img alt="" className={classes.hyperlink} src={require('../../assets/images/hyperlink.png')} />
            </Button>
          </Grid>
        </Grid>
      );
    }
  };
  //store the list to display golf membership when the viewport is desktop.
  const renderDesktopCourses = () => {
    if (courseDatas.length > 0) {
      return courseDatas.map((course, index) => (
        <Desktopcourse course={course} key={index} index={index} Flag={editFlag} />
      ));
    }
    else return [];
  }
  const desktoplist = renderDesktopCourses();
  //toggle to edit state.
  const editClick = () => {
    setEditFlag(!editFlag);
  }
  //add a row to list
  const addList = () => {
    if (rank === "" || course === "" || location === "" || website === "") {
      return;
    }
    setCourseDatas([
      ...courseDatas, {
        rank: rank,
        course: course,
        location: location,
        website: website
      }
    ])
  }
  //delete a row from list
  const deleteRow = (index) => {
    courseDatas.splice(index, 1);
    setCourseDatas([...courseDatas]);
  }
  //render all golf membership when the viewport is mobile.
  const renderMobileCourses = () => {

    if (courseDatas.length > 0) {
      return courseDatas.map((course, index) => (
        <Mobilecourse course={course} key={index} index={index} Flag={editFlag} />
      ));
    }
    else return [];
  }
  //make golf membership rows one by one when the viewport is mobile.
  const Mobilecourse = ({ course }) => {
    return (
      <div className={classes.course_list_mobile}>
        <Grid container>
          <Grid item xs={12} md={12}>
            <div style={{ padding: "5px 0px", color: "#4895DA" }}>{course.course}</div>
            <div style={{ padding: "5px 0px" }}>Course Rank : {course.rank}
              <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.golfLinkMobile}>
                <img alt="" className={classes.hyperlink} src={require('../../assets/images/hyperlink.png')} />
              </Button>
            </div>
            <div style={{ padding: "5px 0px" }}>{course.location}</div>
          </Grid>
        </Grid>
      </div>
    );
  };
  //store the list to display golf membership when the viewport is mobile.
  const mobilelist = renderMobileCourses();

  //rendore golf membership component.
  return (
    <div>
      <p className={classes.golftitle}>
        Summary of Course Played
        {editFlag === false && (
          <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.golfedit} onClick={editClick}>
            Edit
          </Button>
        )}
        {editFlag !== false && (
          <span style={{ float: "right" }}>
            <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.golfcancel} onClick={editClick}>
              Cancel
            </Button>
            <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.golfsave} onClick={editClick}>
              Save
            </Button>
          </span>
        )}
      </p>
      <div className={classes.golfpanel}>
        <Hidden mdDown>
          {editFlag === true && (
            <div>
              <div className={classes.golf}>
                <Grid container spacing={0}>
                  <Grid item xs={2} sm={2}>
                    <div className={classes.margin}>
                      <p className={classes.panelname} >ADD COURSES PLAYED</p>
                    </div>
                  </Grid>
                  <Grid item xs={1} sm={1}>
                    <TextField value={rank} onChange={e => handleRank(e)} placeholder="Rank" className={classes.rank} margin="normal" variant="outlined" />
                  </Grid>
                  <Grid item xs={3} sm={3}>
                    <GolfCourse value={course} onSelect={e => handleCourse(e)} className={classes.golfcourse} suggestions={list} />
                  </Grid>
                  <Grid item xs={3} sm={3}>
                    <GolfLocation value={location} onSelect={e => handleLocation(e)} className={classes.golflocation} />
                  </Grid>
                  <Grid item xs={2} sm={2}>
                    <TextField
                      value={website}
                      onChange={e => handleWebsite(e)}
                      placeholder="Website" className={classes.website} margin="normal" variant="outlined"
                      InputProps={{
                        startAdornment:
                          <InputAdornment position="start">
                            <img alt="" className={classes.hyperlink} src={require('../../assets/images/hyperlink.png')} />
                          </InputAdornment>,
                      }}
                    />
                  </Grid>
                  <Grid item xs={1} sm={1}>
                    <div>
                      <Button type="submit" onClick={() => addList()} className={classes.controlbtn}>
                        Add
                      </Button>
                    </div>
                  </Grid>
                </Grid>
              </div>
              <div className={classes.course_list_title}>
                <Grid container spacing={2}>
                  <Grid item sm></Grid>
                  <Grid item sm={1}>Rank</Grid>
                  <Grid item sm={4}>Golf Course</Grid>
                  <Grid item sm={3}>Location</Grid>
                  <Grid item sm={3}></Grid>
                  <Grid item sm></Grid>
                  <Grid item sm></Grid>
                </Grid>
              </div>
              <div className={classes.course_list}>
                {desktoplist}
              </div>
            </div>
          )}
          {editFlag === false && (
            <div>
              <div className={classes.course_list_title}>
                <Grid container spacing={2}>
                  <Grid item sm={1}>Rank</Grid>
                  <Grid item sm={5}>Golf Course</Grid>
                  <Grid item sm={5}>Location</Grid>
                  <Grid item sm={1}></Grid>
                </Grid>
              </div>
              <div className={classes.course_list}>
                {desktoplist}
              </div>
            </div>
          )}
        </Hidden>
        <Hidden lgUp>
          {editFlag === true && (
            <div className={classes.golfeditmobile}>
              <Grid container spacing={0}>
                <Grid item xs={12}>
                  <FormControl className={classes.margin}>
                    <p className={classes.panelname} >ADD COURSES PLAYED</p>
                  </FormControl>
                </Grid>
                <Grid item xs={12}>
                  <GolfCourse value={course} onSelect={e => handleCourse(e)} />
                </Grid>
                <Grid item xs={12} style={{ padding: "10px 5px 0px 5px" }}>
                  <TextField
                    value={rank}
                    onChange={e => handleRank(e)}
                    placeholder="Rank"
                    className={classes.rank}
                    margin="normal"
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12}>
                  <GolfLocation value={location} onSelect={e => handleLocation(e)} />
                </Grid>
                <Grid item xs={12} style={{ padding: "10px 0px" }}>
                  <TextField
                    placeholder="Website"
                    value={website}
                    onChange={e => handleWebsite(e)}
                    className={classes.website}
                    variant="outlined"
                    style={{ marginBottom: "0px" }}
                    InputProps={{
                      startAdornment:
                        <InputAdornment position="start">
                          <img alt="" className={classes.hyperlink} src={require('../../assets/images/hyperlink.png')} />
                        </InputAdornment>,
                    }}
                  />
                </Grid>
                <Grid item xs={12} style={{ padding: "0px 10px 10px 10px" }}>
                  <Button onClick={() => addList()} aria-controls="simple-menu" aria-haspopup="true" className={classes.controlbtn}>
                    +Add
              </Button>
                </Grid>
              </Grid>
            </div>
          )}
          {mobilelist}
        </Hidden>
      </div>
    </div >
  )
}
export default withRouter(withStyles(styles)(GolfMembership))