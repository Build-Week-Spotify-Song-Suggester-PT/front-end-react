import React, { Fragment, useState } from 'react';
import { Link } from 'react-router-dom';
import { axiosWithAuth } from '../../auth/AxiosWithAuth';

//Styling Library
import { Heading, Box, Form, FormField, Button, Text } from 'grommet';

const Signup = props => {
  const [error, setError] = useState(false);

  const submitHandler = e => {
    let caseSensitiveInput = {
      ...e.value,
      email: e.value.email.toLowerCase()
    };
    setError(false);
    axiosWithAuth()
      .post('/accounts/register', caseSensitiveInput)
      .then(res => {
        localStorage.setItem('token', res.data.token);
        props.history.push(`/user/${res.data.id}`);
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

export default Signup;
