import React from 'react'
import styles from './style.module.css';

export default function AudienceLabel(props){
    return(
        <div className={styles.labelStyle}>
            {props.text}
        </div>
    );
}