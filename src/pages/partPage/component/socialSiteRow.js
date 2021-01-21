import React from "react";
import './../commonStyle.css';



export default function SocialSiteRow(props) {

    return (
        <div style={{display:'flex',justifyContent: 'center', alignItems: 'center',fontSize:'120%',color:'black',fontFamily: 'Roboto', fontStyle: 'normal',marginTop:'10%'}}>
            <div style={{width:'15%'}}>{props.index}</div>
            <div style={{width:'20%'}}><img src={props.img} alt='alt' style={{width:'100%'}}/></div>
            <div style={{width:'60%',paddingLeft:'5%'}}>{props.title}</div>
            <div style={{width:'5%'}}><img src={props.state} alt='alt' style={{width:'200%'}}/></div>
        </div>
    );
}
