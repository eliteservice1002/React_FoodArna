import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import axios from 'axios';
import $ from 'jquery';

function Shopify() {

    const check = () => {
        var settings = {
            "url": "https://dining-barprimavera.myshopify.com/admin/oauth/authorize?client_id=e953ac11a0c8ccc3b6f554cc620f54da&scope=read_orders,write_products&redirect_uri=http%3A%2F%2Flocalhost%2Fgenerate_token.php",
            "method": "GET",
            "timeout": 0,
            "headers": {
                "Content-Type": "application/json"
            }
        };
        $.ajax(settings).done(function (res) {
            console.log(res);
        });
    }
    return (
        <Button onClick={check}>Shopify</Button>
    );
}
export default Shopify;