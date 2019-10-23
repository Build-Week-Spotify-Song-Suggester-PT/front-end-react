import React from 'react';
import { Heading, Box, Text } from 'grommet';

const NonRoute = () => {
  const goBack = () => {
    window.history.back();
  };
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
        <span
          onClick={goBack}
          style={{
            color: 'purple',
            cursor: 'pointer',
            textDecoration: 'underline'
          }}
        >
          Click here
        </span>{' '}
        to go back to the login page.
      </Text>
    </Box>
  );
};

export default NonRoute;
