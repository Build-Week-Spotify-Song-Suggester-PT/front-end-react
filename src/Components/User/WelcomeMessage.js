import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';

import { Box } from 'grommet';

const WelcomeMessage = ({ message }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (localStorage.getItem('keepClosed') === 'DoNotOpenWelcomeMessage') {
      setVisible(false);
    }
  }, []);

  const clickHandler = () => {
    setVisible(false);
    localStorage.setItem('keepClosed', 'DoNotOpenWelcomeMessage');
  };

  return (
    <div
      style={
        visible
          ? { display: 'flex', justifyContent: 'center' }
          : { display: 'none' }
      }
    >
      <Box align="center" responsive={true} direction="row">
        {/* TESTING */}
        <h2>{message}</h2>
        <button
          type="button"
          onClick={clickHandler}
          style={{
            background: 'transparent',
            border: 'none',
            margin: '0 10px',
            cursor: 'pointer'
          }}
        >
          <span aria-label="x">✖</span>
        </button>
      </Box>
    </div>
  );
};

const mapStateToProps = ({ userData }) => {
  return {
    message: userData.message
  };
};

export default connect(
  mapStateToProps,
  {}
)(WelcomeMessage);
