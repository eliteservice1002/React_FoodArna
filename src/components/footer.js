import React from 'react';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import "./style.css";
const styles = theme => ({
  footer: {
    position: '',
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 10,
    //backgroundColor: theme.palette.primary.dark,
    backgroundColor: '#12284C',
    padding: theme.spacing(2),
    '& .content': {
      textAlign: 'center',
    },
    '& h6': {
      color: theme.palette.textOnPrimary,
    },
  },
  link: {
    color: '#fff',
    textDecoration: 'none'
  },
  spacer: {
    display: 'inline',
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  }
});

const fontstyle={
  'fontFamily': 'Roboto',
  'fontStyle': 'normal',
  'fontWeight': 'normal',
  'fontSize': '30px',

  'color': '#FCD652'

}
const Footer = ({ classes }) => (
  <footer style={{'backgroundColor':'black'}} className={classes.footer}>
    <Typography variant="subtitle2" align="center"  gutterBottom style={fontstyle}>
      {"Copyright " + (new Date().getFullYear())+" All Rights Reserved"}
    </Typography>
  </footer>
);

export default withStyles(styles)(Footer);
