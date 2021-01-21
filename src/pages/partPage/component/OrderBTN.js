import React, { useState } from "react";
import './../commonStyle.css';
import { ContainerOrderDivStyle } from './../partPageStyle';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import Snack from './snackbar';

export default function StatusBTN(props) {
    const history = useHistory();
    const gotodeliverylist = () => {
        const data = {
            order_id: props.order_id
        };
        axios.post('http://localhost/api/orders/findone', data)
            .then(function (res) {
                if (res.data[0].check_state === false) {
                    history.push('/deliverylist', { order_id: props.order_id });
                }
                else {
                    document.getElementById('snack_info').click();
                }
            })
            .catch(function (e) {
                console.log('errorer');
            })
    }
    const gotodeliveryLocation = () => {
        const data = {
            order_id: props.order_id
        };
        axios.post('http://localhost/api/orders/findone', data)
            .then(function (res) {
                if (res.data[0].check_state === false) {
                    const data1 = {
                        order_id: props.order_id,
                        delivery_name: "Self",
                        delivery_state:true
                    };
                    axios.put('http://localhost/api/orders/update', data1)
                        .then(function (res) {
                            if (res.status === 200) {
                                history.push('/');
                                history.push('/orderStatus');
                            }
                            else
                                console.log("400");
                        })
                        .catch(function (e) {
                            console.log('error');
                        })
                }
                else {
                    document.getElementById('snack_info').click();
                }
            })
            .catch(function (e) {
                console.log('errorer');
            })
    }
    return (
        <>
            <Snack alert="Delivering..." />
            <ContainerOrderDivStyle onClick={props.state === "delivery" ? gotodeliverylist : gotodeliveryLocation}>
                <img src={props.state === 'delivery' ? './images/partPage/delivery_order.svg' : './images/partPage/pickup_order.svg'} alt={props.order_id} style={{width:'15%',}} />
                <div style={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'normal', color: '#464646' }}>{props.state === 'delivery' ? 'Home Delivery' : 'Self Pick-Up'}</div>
            </ContainerOrderDivStyle>
        </>
    );
}
