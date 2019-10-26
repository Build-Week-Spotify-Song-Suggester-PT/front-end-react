import React, { Fragment, useEffect, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signupAction } from '../../store/actions/authDataActions/signupAction';
import { clearAuthData } from '../../store/actions/authDataActions/clearAuthData';
import Loading from '../Loading';

//Styling Library
import { Heading, Box, Form, FormField, Button, Text } from 'grommet';

const Signup = ({
  signupAction,
  authenticated,
  error,
  userID,
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
    signupAction(e.value);
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
        Sign Up
      </Heading>
      {error && (
        <Fragment>
          <p style={{ margin: '0 auto', color: 'red' }}>
            Either something went wrong, or use a different email.
          </p>
          <p style={{ margin: '0 auto', color: 'red' }}>Please try again.</p>
        </Fragment>
      )}
      <Form onSubmit={submitHandler}>
        <FormField name="name" label="Name" required={true} />
        <FormField type="email" name="email" label="Email" required={true} />
        <FormField
          type="password"
          name="password"
          label="Password"
          required={true}
        />
        <Box direction="row-responsive" justify="between" align="center">
          <Button type="submit" primary label="Register" />
          <Text>
            Need to Login? <Link to="/login">Click Here</Link>
          </Text>
        </Box>
      </Form>
    </Box>
  );
};

const mapStateToProps = ({ authData, userData }) => {
  return {
    authenticated: authData.authenticated,
    error: authData.registerAuthError,
    userID: userData.userID
  };
};

export default connect(
  mapStateToProps,
  { signupAction, clearAuthData }
)(Signup);
