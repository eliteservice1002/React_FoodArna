import React from 'react';
import Logo from '../../../../assets/images/logo.svg';
import styles from './style.module.css';

export default  function Banner(){
    return(
        <div className={styles.logoStyle}>
           <img style={{height:'13vh'}} alt="imate" src={Logo} />
        </div>
    );
}