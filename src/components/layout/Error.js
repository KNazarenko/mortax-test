import React from 'react';
import { Typography } from '@material-ui/core/';

const Error = () => {
  return (
    <div style={{ margin: '10rem' }}>
      <Typography variant="h3" gutterBottom>
        404 Path Not Found
      </Typography>
      <Typography variant="h6" gutterBottom>
        Sorry, that page does not exist
      </Typography>
    </div>
  );
};

export default Error;
