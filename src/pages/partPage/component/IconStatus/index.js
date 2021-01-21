import React from 'react';

export default function IconStatus(props) {
    return(
        <div style={{display:'flex'}}>
            <div>
                <img src={props.src} width={props.width} height={props.height} alt="alt" />
            </div>
            <div style={{marginLeft:'3px', alignSelf:'center'}}>
                <img src={props.srcIcon} alt="alt" />
            </div>
        </div>
    );
}