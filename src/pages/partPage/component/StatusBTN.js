import React from "react";
import './../commonStyle.css';
import { ContainerStatusDivStyle } from "../partPageStyle";
import {
    makeStyles,
} from '@material-ui/core/styles';
const useStyles = makeStyles({
    true: {
        backgroundColor: '#dd354d',
    },
})
const state = {
    backgroundColor: '#dd354d',
}
const nstate = {
    backgroundColor: 'initial',
}
export default function StatusBTN(props) {
    const classes = useStyles();
    return (
        <ContainerStatusDivStyle state={props.state} style={props.checkstate === true ? state : nstate}>
            <img src={props.checkstate === false ? './images/partPage/cheficon.svg' : './images/partPage/cheficon_white.svg'} alt='alt' />
            <div style={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'normal', color: '#464646' }}>{props.chefname}:</div>
            <img src={props.checkstate === false ? './images/partPage/chefwaiting.svg' : './images/partPage/checkaccept_white.svg'} alt='alt' />
            <div style={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'normal', color: '#464646' }}>{props.checkstate === false ? "Waiting" : "Accepted"}</div>
        </ContainerStatusDivStyle>
    );
}
