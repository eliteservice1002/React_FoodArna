import React from "react";
import './../commonStyle.css';
import {PageTitleStyle} from "./../partPageStyle";




export default class PageTitle extends React.Component {
    render() {
        return (
            <div>
                <PageTitleStyle>
                    {this.props.identify === 'authenticFood'?'“Enjoy AUTHENTIC FOOD from AUTHENTIC CHEFS with the same origin as the food”':
                     this.props.identify ==='fiveStar'?'“A 5 STAR experience at the CHEFS HOME with the tales of FOOD and CULTURE”':
                     this.props.identify === 'tryCook'?'“TRY if you can COOK up a lasting memory TOGETHER ”':
                     this.props.identify === 'profile1'?'“I wish I was full of TACOS instead of emotions”':
                     this.props.identify === 'profile2'?'“I like the TANDOORI with CHARCOAL flowers and no oil”':
                     this.props.identify === 'onlineCookery'?'“Live online COOKERY classes with our MASTER CHEFS ”':''}
                </PageTitleStyle>

            </div>
        );
    }
}
