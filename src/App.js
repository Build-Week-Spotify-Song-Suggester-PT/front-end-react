import React from 'react';
import { Grommet } from 'grommet';

import Routes from './Components/Routes';

const App = () => {
  return (
    <div className="App">
      <Grommet>
        <Routes />
      </Grommet>
    </div>
  );
};

export default App;
