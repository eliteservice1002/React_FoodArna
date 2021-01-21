import React from "react";
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import './../commonStyle.css';
import {Constant} from "./constant";
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import { makeStyles } from '@material-ui/core/styles';
import {ContainerStatusDivStyle} from "../partPageStyle";


export default function StatusBTN(props) {

    return (
        <ContainerStatusDivStyle state={props.state} >
            <img src={props.state === 'chef1Status'?'./images/partPage/cheficon.svg':'./images/partPage/cheficon_white.svg'} alt='alt'/>
            <div style={{fontFamily: 'Roboto',fontStyle: 'normal',fontWeight: 'normal',color:'black'}}>{props.state==='chef1Status'}Chef 1:</div>
            <img src={props.state === 'chef1Status'?'./images/partPage/chefwaiting.svg':'./images/partPage/checkaccept_white.svg'} alt='alt'/>
            <div style={{fontFamily: 'Roboto',fontStyle: 'normal',fontWeight: 'normal',color:'black'}}>Waiting</div>
        </ContainerStatusDivStyle>
    );
}
