import React from "react";
import IconStatus from "../../component/IconStatus";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import styles from './style.module.css';
import browseBook from '../../../../assets/images/browse_book.svg';
import browseContact from '../../../../assets/images/browse_contact.svg';
import browseLight from '../../../../assets/images/browse_light.svg';
import browseMsg from '../../../../assets/images/browse_msg.svg';
import browsePhone from '../../../../assets/images/browse_phone.svg';
import browseWord from '../../../../assets/images/browse_word.svg';
import onlineIcon from '../../../../assets/images/online.svg';
import offlineIcon from '../../../../assets/images/offline.svg';
import { useHistory } from 'react-router-dom';

export default function BrowsePage() {
    const history = useHistory();
    return (
        <Grid container style={{ width: '100%', height: '100vh', backgroundImage: 'url(./images/browseBack.svg)', backgroundSize: 'cover', backgroundPosition: 'center', position: 'relative' }}>
            <Grid container style={{ width: '100%', height: '100%', backgroundColor: 'white', opacity: '0.8', zIndex: '3', position: 'abolute', top: '0', left: '0' }}></Grid>
            <Grid container style={{ width: '100%', height: '100vh', zIndex: '5', position: 'absolute', top: '0', left: '0' }}>
                <Grid item lg={1} md={1}></Grid>
                <Grid item lg={10} md={10} sm={12} xs={12} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
                    <Grid container style={{ width: '100%', display: 'flex', justifyContent: 'center', marginTop: '12%', cursor: 'pointer' }} className={styles.titleStyle} onClick={() => { history.push('/') }}>
                        Browse and select from contact list
                    </Grid>
                    <Grid container className={styles.iconContainerStyle}>
                        <IconStatus width={'73px'} height={'73px'} src={browsePhone} srcIcon={onlineIcon} />
                        <IconStatus width={'73px'} height={'73px'} src={browseMsg} srcIcon={offlineIcon} />
                        <IconStatus width={'73px'} height={'73px'} src={browseContact} srcIcon={offlineIcon} />
                    </Grid>
                    <Grid container className={styles.iconContainerStyle}>
                        <IconStatus width={'73px'} height={'73px'} src={browseLight} srcIcon={onlineIcon} />
                        <IconStatus width={'73px'} height={'73px'} src={browseWord} srcIcon={onlineIcon} />
                        <IconStatus width={'73px'} height={'73px'} src={browseBook} srcIcon={onlineIcon} />
                    </Grid>
                    <Grid container style={{ display: "flex", justifyContent: "center", marginTop: '100px' }}>
                        <Button
                            style={{ borderRadius: '49px', backgroundColor: ' #dd354d', width: '332px', border: '2px solid  #dd354d', height: '68px', color: '#fac947', fontSize: '32px' }}
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            Submit
                        </Button>
                    </Grid>
                </Grid>
                <Grid item lg={1}></Grid>
            </Grid>
        </Grid>
    );
}