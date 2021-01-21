import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './../commonStyle.css';
import {Constant} from "./constant";
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import { makeStyles } from '@material-ui/core/styles';
import {ContainerOrderDivStyle} from './../partPageStyle';



export default function StatusBTN(props) {

    return (
        <ContainerOrderDivStyle>
            <img src={props.state === 'delivery'?'./images/partPage/delivery_order.svg':'./images/partPage/pickup_order.svg'} alt='alt'/>
            <div style={{fontFamily: 'Roboto',fontStyle: 'normal',fontWeight: 'normal',color:'black'}}>{props.state==='delivery'?'Home Delivery':'Self Pick-Up'}</div>
        </ContainerOrderDivStyle>
    );
}
