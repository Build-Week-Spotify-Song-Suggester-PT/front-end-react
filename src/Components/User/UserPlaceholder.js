import React from 'react';

const UserPlaceholder = props => {
  const logoutHandler = () => {
    localStorage.removeItem('token');
    props.history.push('/');
  };
  return (
    <button type="button" onClick={logoutHandler}>
      LOGOUT
    </button>
  );
};

export default UserPlaceholder;
