import React from 'react';
import Landing1 from './Landing1';
import Landing2 from './Landing2';
import Landing3 from './Landing3';
import Landing4 from './Landing4';
import Landing5 from './Landing5';
import Landing6 from './Landing6';
import Landing7 from './Landing7';
import Landing8 from "./Landing8";
import Footer from '../Component/Footer';


export default function Container() {
    let user = {
        authToken: "",
        data: ""
    };
    let localState = localStorage.getItem('user');
    if (localState === null) {
        localStorage.setItem('user', JSON.stringify(user));
    }
    return (
        <div>
            <Landing1 />
            <Landing2 />
            <Landing3 />
            <Landing4 />
            <Landing5 />
            <Landing6 />
            <Landing7 />
            <Landing8 />
            <Footer />
        </div>
    )
}
