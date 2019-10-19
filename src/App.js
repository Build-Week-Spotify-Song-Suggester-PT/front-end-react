import React from 'react';
import Login from './Components/User/Login';
import { Grommet } from 'grommet';

function App() {
  return (
    <div className="App">
      <Grommet>
        <Login />
      </Grommet>
    </div>
  );
}

export default App;
