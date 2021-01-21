import React from 'react';
import {LabelContainer, Label1, Label2} from "./style";
import { createMuiTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import {ThemeProvider} from "@material-ui/styles";
import {
  makeStyles,
} from '@material-ui/core/styles';

const theme = createMuiTheme();
const useStyles = makeStyles((theme) => ({
  paper: {
      fontFamily: 'Roboto',
      fontStyle: 'normal',
      fontWeight: 'normal',
      fontSize: '2vw',
      lineHeight: '3vw',
      color: '#464646',
      '@media(max-width:959px)':{
        fontSize:'5vw',
        lineHeight:'6vw'
      }
  }
}));

export default function Landing6Label(props) {
  const classes=useStyles();
    return(
      <LabelContainer>
          <Label1>{props.label1}</Label1>
          <Label2><ThemeProvider>
            <Typography className={classes.paper}>{props.label2}</Typography>
        </ThemeProvider></Label2>
      </LabelContainer>
    );
}