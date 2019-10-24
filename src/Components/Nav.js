import React from 'react';
import { Heading, Box } from 'grommet';

const Nav = () => {
  return (
    
    <Box background="linear-gradient(90deg, #C37D92, #7B4B94, #C37D92);">
      <Heading
        responsive={true}
        margin={{ horizontal: 'auto', vertical: '10px' }}
        color="#F0EFF4"
      >
        SongSight
      </Heading>
    </Box>
      
    
  );
};

export default Nav;
