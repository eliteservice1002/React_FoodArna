import React from "react";
import './../commonStyle.css';
import Tooltip from '@material-ui/core/Tooltip';
import {
    makeStyles,
} from '@material-ui/core/styles';
const useStylesBootstrap = makeStyles((theme) => ({
    arrow: {
        color: theme.palette.common.black,
        fontSize: '100%',
    },
    tooltip: {
        backgroundColor: theme.palette.common.black,
        fontWeight: 'unset !important',
        fontSize: '15px'
    },
}));
function BootstrapTooltip(props) {
    const classes = useStylesBootstrap();
    return <Tooltip arrow classes={classes} {...props} />;
}

export default function AddIcon(props) {
    return (
        <form method="post" style={{ textAlign: 'center' }}>
            <input
                id={props.id_val}
                type="file"
                name={props.id_val}
                accept="image/gif,image/jpeg,image/jpg,image/png,video/mp4,video/x-m4v"
                title="Add photos or video"
                onChange={props.onchange}
                multiple
                hidden='true'
            />
            <label htmlFor={props.id_val}>
                <BootstrapTooltip title="Click Here!">
                    <img style={{ width: '50%', cursor: 'pointer' }} src={props.src} alt='alt' />
                </BootstrapTooltip>
            </label>
            <div style={{ fontFamily: 'Roboto', fontStyle: 'normal', fontWeight: 'normal', fontSize: '100%', color: 'rgba(60, 60, 60, 1)' }}>{props.title}</div>
            {/* <button type="submit" id="file_upload">submit</button> */}
        </form>
    );
}
