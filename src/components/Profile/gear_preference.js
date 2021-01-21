import React from 'react'
import { withRouter } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Brand from './brand';
import Size from './size';
import Grid from '@material-ui/core/Grid';

const styles = theme => ({
  golftitle: {
    padding: "10px",
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
  pgolfpanel: {
    width: "100%",
    color: "black",
    backgroundColor: "white",
    padding: "30px 20px",
  },
  golfpanel: {
    width: "100%",
    color: "black",
    backgroundColor: "white",
    borderRadius: "5px",
    borderColor: "white",
    border: "10px solid",
    padding: "0px 20px",
  },
  golf: {
    width: "100%",
    color: "black",
    backgroundColor: "#F3F5F8",
    borderRadius: "5px",
    padding: "30px",
    display: "flex",
  },
  controlbtn: {
    border: "2px solid #D1D8E0",
    paddingLeft: 5,
    paddingRight: 5,
    width: "100%",
    padding: "0px",
    height: "57px",
  },
  rolename: {
    fontWeight: "Bold",
    color: "#727F95",
    paddingLeft: 5,
    paddingRight: 5,
  },
  margin: {
  },
  brand: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  size: {
    paddingLeft: 5,
    paddingRight: 5,
  },
  item_desc: {
    marginTop: "0px",
    paddingLeft: 5,
    paddingRight: 5,
    width: "100%",
  },
  website: {
    paddingLeft: 5,
    paddingRight: 5,
    marginTop: "0px",
  },
  hyperlink: {
    width: 20,
  }
})
const GolfMembership = ({ history, classes }) => {

  return (
    <div>
      <p className={classes.golftitle}>My Gear Preference<span className={classes.golfedit}>Edit</span></p>
      <div className={classes.pgolfpanel}>
        <div className={classes.golfpanel}>
          <div className={classes.golf}>
            <Grid container spacing={0}>
              <Grid item xs={2}>
                <FormControl className={classes.margin}>
                  <p className={classes.rolename} >Golf Ball</p>
                </FormControl>
              </Grid>
              <Grid item xs={4} sm={4}>
                <TextField
                  id="item_desc"
                  placeholder="Item Description"
                  className={classes.item_desc}
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={3} sm={3}>
                <Brand className={classes.brand} />
              </Grid>
              <Grid item xs={2} sm={2}>
                <Size className={classes.size} />
              </Grid>
              <Grid item xs={3} sm={1}>
                <div style={{ paddingLeft: 15, }}>
                  <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.controlbtn} >
                    Add
                </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className={classes.golfpanel}>
          <div className={classes.golf}>
            <Grid container spacing={0}>
              <Grid item xs={2}>
                <FormControl className={classes.margin}>
                  <p className={classes.rolename} >Golf Ball</p>
                </FormControl>
              </Grid>
              <Grid item xs={4} sm={4}>
                <TextField
                  id="item_desc"
                  placeholder="Item Description"
                  className={classes.item_desc}
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={3} sm={3}>
                <Brand className={classes.brand} />
              </Grid>
              <Grid item xs={2} sm={2}>
                <Size className={classes.size} />
              </Grid>
              <Grid item xs={3} sm={1}>
                <div style={{ paddingLeft: 15, }}>
                  <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.controlbtn} >
                    Add
                </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className={classes.golfpanel}>
          <div className={classes.golf}>
            <Grid container spacing={0}>
              <Grid item xs={2}>
                <FormControl className={classes.margin}>
                  <p className={classes.rolename} >Driver</p>
                </FormControl>
              </Grid>
              <Grid item xs={4} sm={4}>
                <TextField
                  id="item_desc"
                  placeholder="Item Description"
                  className={classes.item_desc}
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={3} sm={3}>
                <Brand className={classes.brand} />
              </Grid>
              <Grid item xs={2} sm={2}>
                <Size className={classes.size} />
              </Grid>
              <Grid item xs={3} sm={1}>
                <div style={{ paddingLeft: 15, }}>
                  <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.controlbtn} >
                    Add
                </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className={classes.golfpanel}>
          <div className={classes.golf}>
            <Grid container spacing={0}>
              <Grid item xs={2}>
                <FormControl className={classes.margin}>
                  <p className={classes.rolename} >Wedge</p>
                </FormControl>
              </Grid>
              <Grid item xs={4} sm={4}>
                <TextField
                  id="item_desc"
                  placeholder="Item Description"
                  className={classes.item_desc}
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={3} sm={3}>
                <Brand className={classes.brand} />
              </Grid>
              <Grid item xs={2} sm={2}>
                <Size className={classes.size} />
              </Grid>
              <Grid item xs={3} sm={1}>
                <div style={{ paddingLeft: 15, }}>
                  <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.controlbtn} >
                    Add
                </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className={classes.golfpanel}>
          <div className={classes.golf}>
            <Grid container spacing={0}>
              <Grid item xs={2}>
                <FormControl className={classes.margin}>
                  <p className={classes.rolename} >Putter</p>
                </FormControl>
              </Grid>
              <Grid item xs={4} sm={4}>
                <TextField
                  id="item_desc"
                  placeholder="Item Description"
                  className={classes.item_desc}
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={3} sm={3}>
                <Brand className={classes.brand} />
              </Grid>
              <Grid item xs={2} sm={2}>
                <Size className={classes.size} />
              </Grid>
              <Grid item xs={3} sm={1}>
                <div style={{ paddingLeft: 15, }}>
                  <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.controlbtn} >
                    Add
                </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className={classes.golfpanel}>
          <div className={classes.golf}>
            <Grid container spacing={0}>
              <Grid item xs={2}>
                <FormControl className={classes.margin}>
                  <p className={classes.rolename} >Shoes</p>
                </FormControl>
              </Grid>
              <Grid item xs={4} sm={4}>
                <TextField
                  id="item_desc"
                  placeholder="Item Description"
                  className={classes.item_desc}
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={3} sm={3}>
                <Brand className={classes.brand} />
              </Grid>
              <Grid item xs={2} sm={2}>
                <Size className={classes.size} />
              </Grid>
              <Grid item xs={3} sm={1}>
                <div style={{ paddingLeft: 15, }}>
                  <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.controlbtn} >
                    Add
                </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className={classes.golfpanel}>
          <div className={classes.golf}>
            <Grid container spacing={0}>
              <Grid item xs={2}>
                <FormControl className={classes.margin}>
                  <p className={classes.rolename} >Polo</p>
                </FormControl>
              </Grid>
              <Grid item xs={4} sm={4}>
                <TextField
                  id="item_desc"
                  placeholder="Item Description"
                  className={classes.item_desc}
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={3} sm={3}>
                <Brand className={classes.brand} />
              </Grid>
              <Grid item xs={2} sm={2}>
                <Size className={classes.size} />
              </Grid>
              <Grid item xs={3} sm={1}>
                <div style={{ paddingLeft: 15, }}>
                  <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.controlbtn} >
                    Add
                </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
        <div className={classes.golfpanel}>
          <div className={classes.golf}>
            <Grid container spacing={0}>
              <Grid item xs={2}>
                <FormControl className={classes.margin}>
                  <p className={classes.rolename} >Glove</p>
                </FormControl>
              </Grid>
              <Grid item xs={4} sm={4}>
                <TextField
                  id="item_desc"
                  placeholder="Item Description"
                  className={classes.item_desc}
                  margin="normal"
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={3} sm={3}>
                <Brand className={classes.brand} />
              </Grid>
              <Grid item xs={2} sm={2}>
                <Size className={classes.size} />
              </Grid>
              <Grid item xs={3} sm={1}>
                <div style={{ paddingLeft: 15, }}>
                  <Button aria-controls="simple-menu" aria-haspopup="true" className={classes.controlbtn} >
                    Add
                </Button>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
    </div >
  )
}
export default withRouter(withStyles(styles)(GolfMembership))