import React from "react";
import './../commonStyle.css';
import {Constant} from './constant';
import SimpleRating from './rating';

export default function ChefInfo(props) {
    return (
            <div style={{border: '1px solid rgb(221, 53, 77)',marginTop:'15%',borderRadius:'15px',height:'100%',width:'100%',backgroundColor:'white'}}>
                <div style={{display: 'flex',justifyContent: 'space-around', height: '10%',marginTop:'5%'}}>
                    <div style={{color:'black',fontSize:'150%', display: 'flex', alignItems: 'center',fontFamily: 'Roboto',fontStyle: 'normal',fontWeight: 'normal'}}>Chef Name</div>
                    <img style={{display: 'flex',alignItems: 'center'}} src={props.id === 'profile1'?Constant.profile1.src[0]:props.id === 'profile2'?Constant.profile2.src[0]:''} alt='alt'/>
                </div>
                <div style={{display: 'flex',justifyContent: 'center', alignItems: 'center',marginTop:'5%'}}>
                    <img style={{borderRadius: '10px',width:'80%'}} src={props.id === 'profile1'?Constant.profile1.src[1]:props.id === 'profile2'?Constant.profile2.src[1]:''} alt='alt'/>
                </div>
                <a style={{display:'flex',justifyContent:'center',color:'black',marginTop:'5%',fontSize:'140%',fontFamily: 'Roboto',fontStyle: 'normal',fontWeight: 'normal'}} href={{}} >View Profile</a>
                <div style={{display:'flex',justifyContent:'space-around',marginTop:'5%'}}>
                    <img src='./images/partpage/chefphone.svg'/>
                    <img src='./images/partpage/chefmail.svg'/>
                </div>
                <SimpleRating/>
                <div style={{color:'black',display:'flex',justifyContent:'center',alignItem:'center',marginTop:'5%',fontSize:'100%',fontFamily: 'Roboto',fontStyle: 'normal',fontWeight: 'normal'}}>Chef Rank : 3</div>
            </div>
        );
}
