import React from 'react';
import Box from '@material-ui/core/Box';

export default function SimpleRating() {
    return (
        <div>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating name="read-only" value={value} readOnly />
            </Box>
        </div>
    );
}
