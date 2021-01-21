import React from "react";
import {TitleFont, ContentFont, DeliveryLocationInfoFont} from "./../partPageStyle";



export default function DeliveryLocationInfo() {
    return(
        <DeliveryLocationInfoFont>
            <div style={{display:'flex'}}>
                <TitleFont>Address:</TitleFont>
                <ContentFont>Grepvagen 1</ContentFont>
            </div>
            <div style={{display:'flex'}}>
                <TitleFont>Post Number:</TitleFont>
                <ContentFont>135-43</ContentFont>
            </div>
            <div style={{display:'flex'}}>
                <TitleFont>Telephone:</TitleFont>
                <ContentFont>072-252 9321</ContentFont>
            </div>
        </DeliveryLocationInfoFont>
    );
}
