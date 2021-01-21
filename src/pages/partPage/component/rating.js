import React from 'react';
// import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function SimpleRating() {
    const [value, setValue] = React.useState(2);

    return (
        <div>
            <img src='./images/partPage/feedback.png'/>
        </div>

        // <div>
        //     <Box component="fieldset" mb={3} borderColor="transparent">
        //         <Typography component="legend">Read only</Typography>
        //         {/*<Rating name="read-only" value={value} readOnly />*/}
        //         {/*<Rating name="half-rating-1" value={3.6} precision={0.2} />*/}
        //     </Box>
        // </div>
    );
}
