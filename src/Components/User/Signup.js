import React, { useState } from 'react';
import { axiosWithAuth } from '../../Auth/AxiosWithAuth';

//Styling Library
import { Heading, Box, Form, FormField, Button } from 'grommet';

const Signup = props => {
  const [error, setError] = useState(false);

  const submitHandler = e => {
    setError(false);
    axiosWithAuth()
      .post('/accounts/register', e.value)
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
        Sign Up
      </Heading>
      {error && (
        <p style={{ margin: '0 auto', color: 'red' }}>
          Something went wrong. Please try again.
        </p>
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
        <Button type="submit" primary label="Register" />
      </Form>
    </Box>
  );
};

export default Signup;

// 500px
// 768px
//
//
