import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import Paper from '@material-ui/core/Paper';
import Upicon from '@material-ui/icons/KeyboardArrowDown';
import ArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import Grid from '@material-ui/core/Grid';
import { connect } from 'react-redux';
import { changeSettingCheck } from './../../actions';
import { store } from "./../../reducers/index";

const BootstrapInput = withStyles(theme => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.background.paper,
    border: '1px solid #ced4da',
    fontSize: 16,
    padding: '10px 26px 10px 12px',
    transition: theme.transitions.create(['border-color', 'box-shadow']),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:focus': {
      borderRadius: 4,
      borderColor: '#80bdff',
      boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
    },
  },
}))(InputBase);

const styles = theme => ({
  root: {
    boxShadow: "0 0 0 0"
  },
  privacy: {
    width: "100%",
    color: "black",
    backgroundColor: "white",
    borderRadius: "5px",
    borderColor: "white",
    border: "10px solid",
    [theme.breakpoints.down('md')]: {
      border: "0px",
    },
  },
  margin: {
    margin: theme.spacing(2),
    width: "30%",
    align: "left",
    [theme.breakpoints.down('md')]: {
      fontSize: "20px",
      width: "100%",
      align: "center"
    },
  },
  margintext: {

    fontWeight: "bold",
    color: "#727F95",
    fontSize: "15px",
    [theme.breakpoints.down('sm')]: {
      fontSize: "20px",
      fontWeight: "bold",
    },
  },
  table: {
    padding: theme.spacing(10)
  },
  tableheadernotification: {
    color: "#727F95",
    fontSize: "15px",
    fontWeight: "bold",
    borderBottom: "0px",
    [theme.breakpoints.down('sm')]: {
      fontSize: "20px",
      fontWeight: "bold",
    },
  },
  tableheader: {
    color: "#727F95",
    fontSize: "15px",
    fontWeight: "bold",
    borderBottom: "0px",
    [theme.breakpoints.down('md')]: {
      display: "none",
    },
  },
  tablebody: {
    color: "#727F95",
    backgroundColor: "#F3F5F8",
    [theme.breakpoints.down('md')]: {
      backgroundColor: "#ffffff",
      border: "0px 0px 0px"
    },
  },
  tablecell: {
    color: "#727F95",
    fontSize: "15px",
    borderBottom: "0px",
    [theme.breakpoints.down('md')]: {
      display: "none",
      border: "0px",
    },
  },
  tablecellspan: {
    display: "none",
    [theme.breakpoints.down('md')]: {
      display: "flex",
      border: "0px",
      width: "150px"
    },
  },
  tablecellfirst: {
    color: "#727F95",
    fontSize: "15px",
    borderBottom: "0px",
  },
  privacyother: {
    fontWeight: "Bold",
    color: "#727F95",
  },
  tablebodydiv: {
    padding: "20px",
    [theme.breakpoints.down('md')]: {
      marginTop: "20px",
      padding: "0px",
    }
  },
  nativeselect: {
    width: "250px",
    paddingTop: "5px",
    verticalAlign: "middle",
    textAlign: "left",
    [theme.breakpoints.down('sm')]: {
      width: "90%",
    },
    [theme.breakpoints.down('xs')]: {
    }
  },
  privacydownicon: {
    verticalAlign: 'middle',
    float: "right",
    display: "none",
    [theme.breakpoints.down('md')]: {
      display: "flex",
    }
  },
  headtext: {
    paddingLeft: "15px"
  },
  selectpattern: {
    [theme.breakpoints.down('sm')]: {
      textAlign: "center",
      paddingTop: "10px"
    }
  }
});

class CustomizedSelects extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      age: 10
    };
  }

  handleChange = event => {
    this.setState({
      age: event.target.value
    }
    );
  };
  handleChangeCheck = (event) => {
    store.dispatch(changeSettingCheck(event.target.id));
    this.props.action(event.target.id, 1)

  };
  render() {
    // console.log(this.props.rows);
    const { classes } = this.props;
    return (
      <div className={classes.privacybody}>
        <p style={{ color: "red" }}>{this.props.textFieldValue}</p>
        <p style={{ fontSize: "25px", color: "#727F95", fontWeight: "bold", marginTop: "50px", paddingTop: "20px" }}>
          <span style={{ verticalAlign: 'middle', paddingLeft: "20px" }}>Privacy Settings</span>
          <Upicon className={classes.privacydownicon}></Upicon>
        </p>
        <div className={classes.privacy} >
          <Grid style={{ margin: "0px" }} container>
            <Grid className={classes.headtext} item xs={12} md={3}>
              <p className={classes.margintext}>How Others See Your Profile</p>
            </Grid>
            <Grid className={classes.selectpattern} item xs={12} md={3}>
              <Select
                value={this.state.age}
                onChange={this.handleChange}
                className={classes.nativeselect}
                input={<BootstrapInput name="age" id="age-customized-select" />}
              >
                <MenuItem value={10}>Full Profile1</MenuItem>
                <MenuItem value={20}>Full Profile2</MenuItem>
                <MenuItem value={30}>Full Profile3</MenuItem>
              </Select>
            </Grid>
          </Grid>
          <div className={classes.tablebodydiv}>
            <Paper className={classes.root}>
              <Table className={classes.table}>
                <TableHead>
                  <TableRow>
                    <TableCell className={classes.tableheadernotification}>Notification Type</TableCell>
                    <TableCell className={classes.tableheader} align="center">Online</TableCell>
                    <TableCell className={classes.tableheader} align="center">Email</TableCell>
                    <TableCell className={classes.tableheader} align="center">Text</TableCell>
                    <TableCell style={{ display: "none" }} className={classes.tableheader} align="center">Text</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody className={classes.tablebody}>
                  {this.props.rows.map((row, index) => (
                    <TableRow key={row.type} key={index}>
                      <TableCell className={classes.tablecellfirst} component="th" scope="row" key={index + 1}>
                        {row.type}
                      </TableCell>
                      <TableCell className={classes.tablecell} align="center" key={index + 2}><Checkbox color="default" checked={row.online} key={index + 22} /></TableCell>
                      <TableCell className={classes.tablecell} align="center" key={index + 3}><Checkbox color="default" checked={row.email} key={index + 33} /></TableCell>
                      <TableCell className={classes.tablecell} align="center" key={index + 4}><Checkbox color="default" checked={row.text} key={index + 44} /></TableCell>
                      <TableCell className={classes.tablecellspan} align="right" key={index + 5}><ArrowRightIcon id={row.type} onClick={this.handleChangeCheck} key={index + 55} /></TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Paper>
          </div>
        </div>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    textFieldValue: state.auth.textFieldValue,
    rows: state.auth.rows,
  }
}

const mapDispatchToProps = {
  changeSettingCheck
};

const CustomizedContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(CustomizedSelects);
export default withStyles(styles)(CustomizedContainer);

