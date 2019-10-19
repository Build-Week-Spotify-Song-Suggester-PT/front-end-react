import React from 'react';
import { Link } from 'react-router-dom';
import { Heading, Box, Text } from 'grommet';

const NonRoute = () => {
  return (
    <Box
      height="xxlarge"
      responsive={true}
      width={{ max: '700px' }}
      margin={{ horizontal: 'auto' }}
      pad={{ horizontal: '20px' }}
      align="center"
    >
      <Heading>404!</Heading>
      <Text>
        This page does not exist.
        <span role="img" aria-label="sad">
          😟
        </span>
      </Text>
      <Text>
        <Link to="/login">Click Here</Link> to go back to the login page.
      </Text>
    </Box>
  );
};

export default NonRoute;
