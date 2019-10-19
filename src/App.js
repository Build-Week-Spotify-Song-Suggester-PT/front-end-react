import React from 'react';
import Signup from './Components/User/Signup';
import { Grommet } from 'grommet';

function App() {
  return (
    <div className="App">
      <Grommet>
        <Signup />
      </Grommet>
    </div>
  );
}

export default App;
