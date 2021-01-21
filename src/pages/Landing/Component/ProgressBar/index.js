import React, {useState, useEffect} from 'react';
import {Typography, LinearProgress} from "@material-ui/core";
import {withStyles} from "@material-ui/styles";
import Header from '../Header';

const styles = theme => ({
    root: {
        position: 'sticky',
        top: 0,
        paddingTop: '0px',
        zIndex: 15,
    },
    details: {
        display: 'flex'
    },
    progressWrapper: {
        marginTop: theme.spacing(2)
    },
    linearProgress: {
        height: 0
    },
});


export function ProgressBar(props) {
    const { profileDetail, classes } = props;
    const [completeness, setCompleteness] = useState(0)

    useEffect(() => {
        if (profileDetail) {
            setCompleteness(profileDetail.teamKeysTier1.split(",").filter(x => { return x.length != 0 }).length + profileDetail.teamKeysTier2.split(",").filter(x => { return x.length != 0 }).length)
        }
    }, [profileDetail])

    return (
        <div className={classes.root} >
            <div >
                {completeness > 8 ?
                    <div className={classes.progressWrapper}>
                        <Typography variant="h3" color="textSecondary"><Header />sdfsfwe</Typography>
                        <br />
                        <br />
                        <LinearProgress
                            className={classes.linearProgress}
                            value={completeness * 10 + 10}
                            variant="determinate"
                            position="fixed"
                        /> </div>:
                    <div className={classes.progressWrapper}>
                        <Typography variant="h3" color="textSecondary"><Header />asdasd</Typography>
                        <br />
                        <br />
                        <LinearProgress
                            className={classes.linearProgress}
                            value={completeness * 10}
                            variant="determinate"
                            position="fixed"
                        />
                    </div>
                }
            </div>
        </div>

    )

}

export default withStyles(styles)(ProgressBar);