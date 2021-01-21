import React from 'react';
import {MDBView, MDBMask} from "mdbreact";

export default function MdbImage() {
    return(
    <MDBView hover zoom>
        <img
            src="https://mdbootstrap.com/img/Others/documentation/img%20(131)-mini.jpg"
            className="img-fluid"
            alt=""
        />
        <MDBMask className="flex-center" overlay="red-slight">
            <p className="white-text">Super light overlay</p>
        </MDBMask>
    </MDBView>);
}
