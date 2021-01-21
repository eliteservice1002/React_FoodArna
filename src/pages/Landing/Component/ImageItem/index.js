import React from 'react';
import styles from './style.module.css';
import { constants } from "../../Utility/constant";

export default function ImageItem(props) {
    return (
        <div className={styles.container}>
            <img src={"https://s3.eu-north-1.amazonaws.com/foodarna/images/items/" + props.itemid + "/" + props.src} alt="Avatar" className={styles.image} style={{ width: '100%' }}></img>
            <div className={styles.middle}>
                <div className={styles.text}>
                    <img className={styles.imgStyle} alt="image1" src={constants.tileImageIcon[0]} />
                    <img className={styles.imgStyle} alt="image1" src={constants.tileImageIcon[1]} />
                    <img className={styles.imgStyle} alt="image1" src={constants.tileImageIcon[2]} />
                </div>
            </div>
        </div>
    );
}