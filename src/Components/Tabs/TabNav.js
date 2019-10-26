import React from 'react';
import { Box, Tabs, Tab, Heading, Text } from 'grommet';
import SuggestedSongs from './SuggestedSongs';
import Discover from './Discover';
import FavList from './FavList';
import Welcome from '../User/WelcomeMessage';

const TabNav = ({ match }) => {
  return (
    <Box alignContent="center">
      <Welcome />
      <Tabs>
        <Tab title="Saved Songs">
          <Box pad="medium">
            <Text textAlign="center" size="xxxsmall">Head on over to Discover to add new songs!</Text>
            <FavList info={match} />
          </Box>
        </Tab>
        <Tab title="Discover">
          <Box pad="medium">
            <Discover />
          </Box>
        </Tab>
        <Tab title="Suggested Songs">
          <Box pad="medium">
            <SuggestedSongs />
          </Box>
        </Tab>
      </Tabs>
    </Box>
  );
};

export default TabNav;
