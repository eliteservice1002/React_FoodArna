import React from "react";

import './../commonStyle.css';

const container = {
    border:'1px solid #DD354D',height:'100%',marginTop:'15%',borderRadius:'15px',backgroundColor:'#ffffff',textAlign:'center'
}

const qualityStyle = {
    border:'1px solid #DD354D',height:'10%',marginTop:'15%',borderRadius:'15px',width:'80%',marginLeft:'10%',
}

const totalCostStyle = {
    border:'1px solid #DD354D',height:'10%',marginTop:'10%',borderRadius:'15px',width:'80%',marginLeft:'10%'
}

const commentToChefStyle = {
    border:'1px solid #DD354D',height:'45%',marginTop:'10%',borderRadius:'15px',width:'80%',marginLeft:'10%',alignItems: 'end',justifyContent: 'center',display:'block'
}

export default class CookGrade extends React.Component {
    render() {
        return (
            <div style={container}>
                <div style={qualityStyle} className='profilecookGradeFontStyle'><div style={{marginLeft:'10%'}}>Quality : 2</div></div>
                <div style={totalCostStyle} className='profilecookGradeFontStyle'><div style={{marginLeft:'10%'}}>Total Cost : 240</div></div>
                <div style={commentToChefStyle} className='profilecookGradeFontStyle'>
                    <div>Comment to Chef:</div>
                    <div style={{fontSize:'80%'}}>Please make it less spicy.</div>
                </div>
            </div>
        );
    }
}
