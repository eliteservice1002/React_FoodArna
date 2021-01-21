import React from 'react';
import {CarouselContainer, CarouselLabel} from "./style";
import Grid from '@material-ui/core/Grid';
import carousimage from '../../../../assets/images/cooker.png';
import Carousel from 'nuka-carousel';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faAngleLeft, faAngleRight} from '@fortawesome/free-solid-svg-icons';
import './style.css';

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
        fontSize: '32px',
        lineHeight: '35px',
        color: '#464646',
        '@media(max-width:767px)':{
            fontSize: '25px'
        }
    }
  }));


export default function CarouselItem() {
    var items = [
        {
            src: {carousimage},
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply'
        },
        {
            src: {carousimage},
            text: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum is simply'
        }
    ]
    return (
        <Carousel
            renderCenterLeftControls={({ previousSlide }) => (
                <button onClick={previousSlide} style={{backgroundColor:'none', display:'none'}}>
                    <FontAwesomeIcon icon={faAngleLeft} />
                </button>
            )}
            renderCenterRightControls={({ nextSlide }) => (
                <button onClick={nextSlide} style={{backgroundColor:'none',  display:'none'}}>
                    <FontAwesomeIcon icon={faAngleRight} />
                </button>
            )}
        >
        {
            items.map( (item, index) => {
                 return(<Item key={index} src={item.src} text={item.text} key={index} />);
             })
         }
         </Carousel>
    );
}

function Item(props)
{
    const classes=useStyles();
    return (
      <CarouselContainer>
          <Grid container>
              <Grid item lg={5} md={5} sm={6} xs={6} style={{display:'flex', justifyContent:'center', alignItems:'center',height:'327px'}}>
                  <div className="CarouselImageBorder">
                      <img alt="imate" src={carousimage} className="CarouselImageStyle" />
                  </div>
              </Grid>
              <Grid item lg={7} md={7} sm={6} xs={6} style={{display:'flex', alignItems:'center'}}>
                  <CarouselLabel>
                    <ThemeProvider theme={theme}>
                        <Typography className={classes.paper}>{props.text}</Typography>
                    </ThemeProvider>
                  </CarouselLabel>
              </Grid>
          </Grid>
      </CarouselContainer>
    );
}