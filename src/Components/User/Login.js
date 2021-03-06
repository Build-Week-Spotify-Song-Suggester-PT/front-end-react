import React, { useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { loginAction } from '../../store/actions/authDataActions/loginAction';
import { clearAuthData } from '../../store/actions/authDataActions/clearAuthData';
import Loading from '../Loading';

//Styling Library
import { Heading, Box, Form, FormField, Button, Text } from 'grommet';

const Login = ({
  authenticated,
  error,
  userID,
  loginAction,
  clearAuthData
}) => {
  //Loading state set locally
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    clearAuthData();
  }, [clearAuthData]);

  if (authenticated) {
    return <Redirect to={`/user/${userID}`} />;
  }

  //Render loading component based on if loading state is true and errors are false
  if (!error && loading) {
    return <Loading />;
  }

  const submitHandler = e => {
    loginAction(e.value);
    setLoading(true);
  };

  return (
    <Box
      responsive={true}
      width={{ max: '700px' }}
      margin={{ horizontal: 'auto' }}
      pad={{ horizontal: '20px' }}
    >
      <Heading alignSelf="center" responsive={true}>
        Login
      </Heading>
      {error && (
        <p style={{ margin: '0 auto', color: 'red' }}>
          Username/Password incorrect. Please try again.
        </p>
      )}
      <Form onSubmit={submitHandler}>
        <FormField type="email" name="email" label="Email" required={true} />
        <FormField
          type="password"
          name="password"
          label="Password"
          required={true}
        />
        <Box direction="row-responsive" justify="between" align="center">
          <Button type="submit" primary label="Login" />
          <Text>
            Need to Sign up? <Link to="/signup">Click Here</Link>
          </Text>
        </Box>
      </Form>
    </Box>
  );
};

const mapStateToProps = ({ authData, userData }) => {
  return {
    authenticated: authData.authenticated,
    error: authData.loginAuthError,
    userID: userData.userID
  };
};

export default connect(
  mapStateToProps,
  { loginAction, clearAuthData }
)(Login);
