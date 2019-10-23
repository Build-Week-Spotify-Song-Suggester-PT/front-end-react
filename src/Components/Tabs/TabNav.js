import React from 'react';
import { Box, Tabs, Tab } from 'grommet';
import SuggestedSongs from "./SuggestedSongs";
import Discover from "./Discover";
import FavList from "./FavList";

const TabNav = () => {
    return (
    <Tabs>
        <Tab title="Saved Songs">
            <Box pad="medium">Head on over to Discover to add new songs!<FavList /></Box>
        </Tab>
        <Tab title="Discover">
            <Box pad="medium"><Discover /></Box>
        </Tab>
        <Tab title="Suggested Songs">
            <Box pad="medium"><SuggestedSongs /></Box>
        </Tab>
    </Tabs>
    )
}

export default TabNav;
