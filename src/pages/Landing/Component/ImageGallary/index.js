import React from 'react';
import styles from './style.module.css';

export default function ImageGallery(props) {
    return (
         <div className={styles.imageContainer}>
            <img alt="image1" src={props.src} width="100%" height="100%" style={{objectFit:'cover', 'borderRadius':'30px'}}/>
         </div>
    );
}