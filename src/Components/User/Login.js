import React, { useState } from 'react';
// import token authentication
import { axiosWithAuth } from '../../Auth/AxiosWithAuth';

//Styling Library
import { Heading, Box, Form, FormField, Button, Text } from 'grommet';

const Login = props => {
  const [error, setError] = useState(false);

  const submitHandler = e => {
    setError(false);
    axiosWithAuth()
      .post('/accounts/login', e.value)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        // props.history.push('/')
      })
      .catch(() => {
        setError(true);
      });
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
          <Text>Need to Sign up? Click Here</Text>
        </Box>
      </Form>
    </Box>
  );
};

export default Login;
