import React from 'react';
import { Box, Tabs, Tab, Heading, Text } from 'grommet';
import SuggestedSongs from './SuggestedSongs';
import { Box, Tabs, Tab } from 'grommet';
import MyProfile from './MyProfile';
import Discover from './Discover';
import FavList from './FavList';
import Welcome from '../User/WelcomeMessage';

const TabNav = ({ match, history }) => {
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
        <Tab title="My Profile">
          <Box pad="medium">
            <MyProfile history={history} match={match} />
          </Box>
        </Tab>
      </Tabs>
    </Box>
  );
};

export default TabNav;
