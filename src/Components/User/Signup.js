import React from 'react';
import { Heading, Box, Form, FormField, Button } from 'grommet';

const Signup = () => {
  const submitHandler = e => {
    console.log(e.value);
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
      <Form onSubmit={submitHandler}>
        <FormField name="name" label="Name" required={true} />
        <FormField name="email" label="Email" required={true} />
        <FormField name="password" label="Password" required={true} />
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
