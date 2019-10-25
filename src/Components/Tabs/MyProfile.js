import React from 'react';
import { axiosWithAuth } from '../../Auth/AxiosWithAuth';

import { Heading, Box, Form, FormField, Button, Text } from 'grommet';

const MyProfile = () => {
  return (
    <Box
      responsive={true}
      width={{ max: '700px' }}
      margin={{ horizontal: 'auto' }}
      pad={{ horizontal: '20px' }}
    >
      {/* EDIT */}
      <Box
        responsive={true}
        width={{ max: '700px' }}
        margin={{ horizontal: 'auto' }}
        pad={{ horizontal: '20px', vertical: '10px' }}
        alignContent="center"
        border="horizontal"
      >
        <Heading
          level="2"
          margin={{ bottom: '10px', top: '0px' }}
          alignSelf="center"
        >
          Change Your Info
        </Heading>
        <Form>
          <FormField type="text" name="name" label="Name" />
          <FormField type="email" name="email" label="Email" />
          <FormField
            type="password"
            name="password"
            label="Password"
            required={true}
          />
          <Box direction="row-responsive" align="center" justify="between">
            <Button type="submit" label="Submit" />
          </Box>
        </Form>
      </Box>

      {/* LOGOUT */}
      {/* <Box
        responsive={true}
        width={{ max: '700px' }}
        margin={{ horizontal: 'auto' }}
        pad={{ horizontal: '20px' }}
      ></Box> */}
      <Button type="button" label="Logout" />

      {/* DELETE */}
      <Box
        responsive={true}
        width={{ max: '700px' }}
        margin={{ horizontal: 'auto' }}
        pad={{ horizontal: '20px' }}
      ></Box>
    </Box>
  );
};

export default MyProfile;
