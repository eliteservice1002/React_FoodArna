import React from "react";
import './../commonStyle.css';
import {
    withStyles,
} from '@material-ui/core/styles';
import FixedTextField from '../component/FixedTextField';
const CssTextField = withStyles({
    root: {
        '& label': {
            fontFamily: 'Roboto',
            fontStyle: 'normal',
            fontWeight: 'bold',
            fontSize: '100%',
            alignItems: 'center',
            textAlign: 'center',

            color: ' rgba(221,53,77,1)',
            transform: 'translate(22px, 16px) scale(1)'
        },

        '& label.Mui-focused': {
            color: ' rgba(221,53,77,1)',
        },
        '& .MuiInput-underline:after': {
            borderBottomColor: '#fff',
        },
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                border: '1px solid rgba(221,53,77,1)',
                borderRadius: '19px'
            },
            '&:hover fieldset': {
                borderColor: ' rgba(221,53,77,1)',
            },
            '&.Mui-focused fieldset': {
                borderColor: ' rgba(221,53,77,1)',
            },
        },
    },
})(FixedTextField);
export default function CookFeedbackRow(props) {
    return (
        <div style={{ fontSize: '130%', color: 'rgba(60, 60, 60, 1)', fontFamily: 'Roboto', fontStyle: 'normal', marginTop: '7%' }}>
            <div style={{ fontWeight: 'normal' }}>
                <CssTextField
                    label={props.title}
                    variant="outlined"
                    placeholder={props.content}
                    id="custom-css-outlined-input"
                    style={{ width: '100%' }}
                    multiline
                    rows={4}
                    name={props.func} onChange={props.onchange}
                />
            </div>
        </div>
    );
}
