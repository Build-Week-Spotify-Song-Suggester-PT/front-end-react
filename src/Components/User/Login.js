import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../../Auth/AxiosWithAuth';

import { connect } from 'react-redux';
import { loginAction } from '../../store/actions/loginAction';

//Styling Library
import { Heading, Box, Form, FormField, Button, Text } from 'grommet';

const Login = ({ error }) => {
  const submitHandler = e => {
    let caseSensitiveInput = {
      ...e.value,
      email: e.value.email.toLowerCase()
    };
    loginAction(caseSensitiveInput);
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

const mapStateToProps = state => {
  return {
    error: state.error
  };
};

export default connect(
  mapStateToProps,
  { loginAction }
)(Login);
