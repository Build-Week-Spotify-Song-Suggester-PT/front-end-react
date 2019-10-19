import React from 'react';
import { Grommet } from 'grommet';
import Nav from './Components/Nav';

import Routes from './Components/Routes';

const App = () => {
  return (
    <div className="App">
      <Grommet>
        <Nav />
        {/* Keep components between <Grommet> for style rendering */}
        <Routes />
      </Grommet>
    </div>
  );
};

export default App;
