import React, { Fragment } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { signupAction } from '../../store/actions/authDataActions/signupAction';

//Styling Library
import { Heading, Box, Form, FormField, Button, Text } from 'grommet';

const Signup = ({ signupAction, authenticated, error, userID }) => {
  if (authenticated) {
    return <Redirect to={`/user/${userID}`} />;
  }

  const submitHandler = e => {
    signupAction(e.value);
  };
  return (
    <Box
      height="xxlarge"
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
    error: authData.authError,
    userID: userData.userID
  };
};

export default connect(
  mapStateToProps,
  { signupAction }
)(Signup);
